
'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionHeading } from '@/components/shared/section-heading';
import { Mail, KeyRound, LogIn } from 'lucide-react';
import Link from 'next/link';
// import type { Metadata } from 'next'; // Metadata cannot be exported from client components

// If you need metadata, consider moving this to a layout file or a server component parent.
// export const metadata: Metadata = {
//   title: 'Login - Joinal Ahmed',
//   description: "Login to access additional features of Joinal Ahmed's site.",
// };

export default function LoginPage() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Placeholder: In a real application, you would handle form submission here,
    // likely calling an authentication action or API.
    alert('Login functionality not yet implemented.');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-20rem)] py-12">
      <SectionHeading
        title="Login"
        subtitle="Access your account to manage your content."
        centered
        className="mb-8"
      />
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Welcome Back</CardTitle>
          <CardDescription>Enter your credentials to continue.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input id="email" type="email" placeholder="you@example.com" required className="pl-10" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
               <div className="relative">
                <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input id="password" type="password" placeholder="••••••••" required className="pl-10" />
              </div>
            </div>
            <Button type="submit" className="w-full" size="lg">
              <LogIn className="mr-2 h-5 w-5" />
              Login
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col items-center space-y-2 pt-6">
            <p className="text-sm text-muted-foreground">
                Don&apos;t have an account?{' '}
                <Link href="#" className="font-medium text-primary hover:underline">
                    Sign Up
                </Link>
            </p>
            <Link href="#" className="text-sm text-primary hover:underline">
                Forgot password?
            </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
