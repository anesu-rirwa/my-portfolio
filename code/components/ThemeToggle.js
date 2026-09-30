'use client';

import { FiMoon, FiSun } from 'react-icons/fi';

export default function ThemeToggle() {
  const toggle = () => {
    const isDark = document.documentElement.classList.toggle('dark');
    try {
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    } catch {}
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
      className="grid size-9 place-items-center rounded-full border border-line text-fg transition-colors hover:border-accent hover:text-accent"
    >
      <FiMoon className="size-4 dark:hidden" />
      <FiSun className="hidden size-4 dark:block" />
    </button>
  );
}
