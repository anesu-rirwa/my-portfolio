'use client';

import { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle';
import { navLinks } from '@/data/data';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        solid ? 'border-line bg-bg/85 backdrop-blur-md' : 'border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6" aria-label="Main">
        <a href="#top" className="font-display text-2xl font-bold tracking-tight">
          anesu<span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-xs font-semibold uppercase tracking-[0.14em] text-muted transition-colors hover:text-fg"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="grid size-9 place-items-center rounded-full border border-line md:hidden"
          >
            {open ? <FiX className="size-4" /> : <FiMenu className="size-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <ul id="mobile-menu" className="border-t border-line px-6 py-4 md:hidden">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 font-display text-2xl font-semibold"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
