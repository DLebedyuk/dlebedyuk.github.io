'use client';

import * as React from 'react';
import { Menu, X } from 'lucide-react';
import { Container } from '@/components/container';
import { ThemeToggle } from '@/components/theme-toggle';
import { profile } from '@/content/profile';

const links = [
  { href: '#about', label: 'About' },
  { href: '#case-studies', label: 'Case Studies' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#architecture', label: 'Architecture' },
  { href: '#contact', label: 'Contact' },
];

export function Nav() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-bg/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-3">
        <a href="#top" className="shrink-0 truncate font-mono text-sm font-medium">
          {profile.name}
        </a>

        <nav className="hidden items-center gap-5 lg:flex lg:gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="whitespace-nowrap text-sm text-muted-fg transition-colors hover:text-fg"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Меню"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </Container>

      {open && (
        <div className="border-t border-border/60 lg:hidden">
          <Container className="flex flex-col gap-1 py-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-sm text-muted-fg hover:bg-muted hover:text-fg"
              >
                {l.label}
              </a>
            ))}
          </Container>
        </div>
      )}
    </header>
  );
}
