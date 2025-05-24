
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login - Joinal Ahmed',
  description: "Login to access additional features of Joinal Ahmed's site.",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
