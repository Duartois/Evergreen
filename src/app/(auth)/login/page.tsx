import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from '@/components/ui/card';
import Link from 'next/link';
import LoginForm from './login-form';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export default async function LoginPage() {
  const session = await auth();
  if (session) {
    return redirect('/dashboard');
  }

  return (
    <>
      <Card variant="white" className="max-w-sm w-full rounded-2xl mt-12">
        <CardHeader>
          <h2 className="text-primary text-xl font-bold">Welcome!</h2>
          <CardDescription>Log in with your email and password.</CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
      <p className="text-sm text-muted-foreground mt-3">
        Don&apos;t have an account?{' '}
        <Link className="text-gray-800 hover:underline" href="/cadastro">
          Register now
        </Link>
        .
      </p>
    </>
  );
}
