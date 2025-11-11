'use server';

import db from '@/lib/db';
import { hashSync } from 'bcrypt-ts';
import { redirect } from 'next/navigation';

type RegisterActionState = {
  success: boolean;
  message?: string;
};

const MIN_PASSWORD_LENGTH = 6;

export default async function registerAction(
  _prevState: RegisterActionState | null,
  formData: FormData
): Promise<RegisterActionState | null> {
  const name = formData.get('name');
  const email = formData.get('email');
  const password = formData.get('password');

  if (
    typeof name !== 'string' ||
    typeof email !== 'string' ||
    typeof password !== 'string'
  ) {
    return {
      success: false,
      message: 'All fields are required.',
    };
  }

  const trimmedName = name.trim();
  const trimmedEmail = email.trim().toLowerCase();
  const trimmedPassword = password.trim();

  if (!trimmedName || !trimmedEmail || !trimmedPassword) {
    return {
      success: false,
      message: 'All fields are required.',
    };
  }

  if (!trimmedEmail.includes('@')) {
    return {
      success: false,
      message: 'Please provide a valid email address.',
    };
  }

  if (trimmedPassword.length < MIN_PASSWORD_LENGTH) {
    return {
      success: false,
      message: `Your password must be at least ${MIN_PASSWORD_LENGTH} characters long.`,
    };
  }

  const existingUser = await db.user.findUnique({
    where: {
      email: trimmedEmail,
    },
  });

  if (existingUser) {
    return {
      success: false,
      message: 'An account with this email already exists.',
    };
  }

  await db.user.create({
    data: {
      email: trimmedEmail,
      name: trimmedName,
      password: hashSync(trimmedPassword),
    },
  });

  redirect('/login');
  return null;
}
