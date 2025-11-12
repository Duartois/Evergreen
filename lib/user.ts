import { compareSync } from 'bcrypt-ts';
import db from './db';

type User = {
  id: string;
  email: string;
  name: string;
  password?: string;
};

export async function findUserByCredentials(
  email: string,
  password: string
): Promise<User | null> {
  const normalizedEmail = email.trim().toLowerCase();
  const normalizedPassword = password.trim();

  if (!normalizedEmail || !normalizedPassword) {
    return null;
  }

  const user = await db.user.findFirst({
    where: {
      email: normalizedEmail,
    },
  });

  if (!user) {
    return null;
  }

  const passwordMatch = compareSync(normalizedPassword, user.password);

  if (passwordMatch) {
    return {
      id: user.id.toString(),
      email: user.email,
      name: user.name,
    };
  }

  return null;
}
