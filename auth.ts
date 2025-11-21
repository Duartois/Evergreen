import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { findUserByCredentials } from './lib/user';

export const { handlers, signIn, signOut, auth } = NextAuth({
  trustHost: true,
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const user = await findUserByCredentials(
          credentials.email,
          credentials.password
        );

        return user;
      },
    }),
  ],
});
