
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
  User,
  BrainCircuit, 
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
  { href: '/about', label: 'About Me', icon: User },
  { href: '/projects', label: 'Projects', icon: Briefcase },
  { href: '/blog', label: 'Blog', icon: Newspaper },
  { href: '/contact', label: 'Contact', icon: Mail },
  { href: '/ai-converge', label: 'AI Converge', icon: BrainCircuit },
  // { href: '/login', label: 'Login', icon: LogIn }, // Removed Login link
];

import { useEffect, useState } from 'react';

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
    <header
      className={cn(
        'fixed top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300 shadow-md',
        'flex items-center justify-between px-4 md:px-8 h-16'
      )}
      role="navigation"
      aria-label="Main Navigation"
    >
      {/* Logo/Brand */}
      <Link href="/" className="flex items-center gap-2 font-bold text-lg text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md" aria-label="Home">
        <Home className="h-6 w-6" />
        <span className="hidden sm:inline">Joinal Ahmed</span>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-1 ml-8" aria-label="Primary">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={cn(
              'flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary hover:bg-primary/10 hover:text-primary',
              pathname === item.href
                ? 'text-primary bg-primary/5 shadow-sm'
                : 'text-muted-foreground'
            )}
            aria-current={pathname === item.href ? 'page' : undefined}
            tabIndex={0}
          >
            <item.icon className="h-5 w-5" />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>

      {/* Mobile Hamburger Menu */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 p-0 bg-background/95 backdrop-blur">
            <nav className="flex flex-col gap-1 mt-8 px-4" aria-label="Mobile Navigation">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    'flex items-center gap-3 rounded-lg px-4 py-3 text-base font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary hover:bg-primary/10 hover:text-primary',
                    pathname === item.href ? 'text-primary bg-primary/5 shadow' : 'text-muted-foreground'
                  )}
                  aria-current={pathname === item.href ? 'page' : undefined}
                  tabIndex={0}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
