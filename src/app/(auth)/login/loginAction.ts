'use server';

import { signIn } from '@/auth';
import { isRedirectError } from 'next/dist/client/components/redirect-error';

type LoginActionState = {
  success: boolean;
  message?: string;
};

export default async function loginAction(
  _prevState: LoginActionState | null,
  formData: FormData
): Promise<LoginActionState | null> {
  const email = formData.get('email');
  const password = formData.get('password');

  if (typeof email !== 'string' || typeof password !== 'string') {
    return {
      success: false,
      message: 'Please provide both email and password.',
    };
  }

  try {
    await signIn('credentials', {
      email,
      password,
      redirect: true,
      redirectTo: '/dashboard',
    });
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }

    if (
      typeof error === 'object' &&
      error !== null &&
      'type' in error &&
      error.type === 'CredentialsSignin'
    ) {
      return {
        success: false,
        message: 'We could not sign you in with those credentials.',
      };
    }

    console.error('Login failed', error);
    return {
      success: false,
      message: 'Something went wrong while trying to sign you in.',
    };
  }

  return null;
}
