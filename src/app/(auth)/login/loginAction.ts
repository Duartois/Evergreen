'use server';

import { signIn } from '@/auth';
import { redirect } from 'next/navigation';

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
    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });

    if (result?.error === 'CredentialsSignin') {
      return {
        success: false,
        message: 'We could not sign you in with those credentials.',
      };
    }

    if (result?.error) {
      return {
        success: false,
        message: 'Something went wrong while trying to sign you in.',
      };
    }
  } catch (error) {
    console.error('Login failed', error);
    return {
      success: false,
      message: 'Something went wrong while trying to sign you in.',
    };
  }

  redirect('/dashboard');

  return null;
}
