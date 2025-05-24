
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import {
  Home,
  Briefcase,
  Newspaper,
  Mail,
  Menu,
  Feather,
  User, // Added User icon for About Me
} from 'lucide-react';
import { cn } from '@/lib/utils';
import type { FC } from 'react';

interface NavItem {
  href: string;
  label: string;
  icon: FC<React.SVGProps<SVGSVGElement>>;
}

const navItems: NavItem[] = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/about', label: 'About Me', icon: User }, // Added About Me link
  { href: '/projects', label: 'Projects', icon: Briefcase },
  { href: '/blog', label: 'Blog', icon: Newspaper },
  { href: '/contact', label: 'Contact', icon: Mail },
];

export function Header() {
  const pathname = usePathname();

  const renderNavLinks = (isMobile = false) =>
    navItems.map((item) => (
      <Link
        key={item.label}
        href={item.href}
        className={cn(
          'flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-primary/10 hover:text-primary',
          pathname === item.href
            ? 'text-primary bg-primary/5'
            : 'text-muted-foreground',
          isMobile ? 'text-base' : ''
        )}
      >
        <item.icon className="h-5 w-5" />
        {item.label}
      </Link>
    ));

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Feather className="h-7 w-7 text-primary" />
          <span className="text-xl font-bold text-foreground">AI Portfolio</span>
        </Link>

        <nav className="hidden items-center space-x-2 md:flex">
          {renderNavLinks()}
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] p-6">
              <div className="mb-6 flex items-center gap-2">
                 <Feather className="h-7 w-7 text-primary" />
                <span className="text-xl font-bold text-foreground">AI Portfolio</span>
              </div>
              <nav className="flex flex-col space-y-3">
                {renderNavLinks(true)}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
