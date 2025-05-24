import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeading({ title, subtitle, centered = false, className, ...props }: SectionHeadingProps) {
  return (
    <div className={cn('mb-8 md:mb-12', centered ? 'text-center' : '', className)} {...props}>
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-2">
        {title}
      </h2>
      {subtitle && (
        <p className={cn("text-lg text-muted-foreground", centered ? "mx-auto max-w-2xl" : "max-w-xl")}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
