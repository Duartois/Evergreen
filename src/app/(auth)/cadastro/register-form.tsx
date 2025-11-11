'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import registerAction from './registerAction';
import { useActionState } from 'react';
import Form from 'next/form';

type RegisterFormState = {
  success: boolean;
  message?: string;
} | null;

export default function RegisterForm() {
  const [state, formAction, isPending] = useActionState<
    RegisterFormState,
    FormData
  >(registerAction, null);

  return (
    <>
      {state?.success === false && (
        <div
          className="text-xs mb-6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong className="font-bold">Error!</strong>
          <span className="block sm:inline">{state?.message}</span>
        </div>
      )}
      <Form action={formAction}>
        <div>
          <Label>Name</Label>
          <Input
            type="text"
            name="name"
            placeholder="your name"
            autoComplete="name"
            required
          />
        </div>
        <div>
          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            placeholder="your@email.com"
            autoComplete="email"
            required
          />
        </div>
        <div>
          <Label>Password</Label>
          <Input
            type="password"
            name="password"
            placeholder="********"
            autoComplete="new-password"
            minLength={6}
            required
          />
        </div>
        <div>
          <Button disabled={isPending} className="w-full mt-6" type="submit">
            Register
          </Button>
        </div>
      </Form>
    </>
  );
}
