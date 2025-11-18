'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Form from 'next/form';
import loginAction from './loginAction';
import { useActionState } from 'react';

type LoginFormState = {
  success: boolean;
  message?: string;
} | null;

export default function LoginForm() {
  const [state, formAction, isPending] = useActionState<LoginFormState, FormData>(
    loginAction,
    null
  );

  return (
    <>
      {state?.success === false && (
        <div
          className="text-xs mb-6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong className="font-bold">Error! </strong>
          <span className="block sm:inline">{state?.message}</span>
        </div>
      )}
      <Form action={formAction}>
        <div>
          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            placeholder="your@email.com"
            required
            autoComplete="email"
          />
        </div>
        <div>
          <Label>Password</Label>
          <Input
            type="password"
            name="password"
            placeholder="********"
            required
            autoComplete="current-password"
            minLength={6}
          />
        </div>
        <div>
          <Button className="w-full mt-6 bg-secondary text-primary" type="submit" disabled={isPending}>
            Login
          </Button>
        </div>
      </Form>
    </>
  );
}
