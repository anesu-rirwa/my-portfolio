import { FiArrowUp } from 'react-icons/fi';
import { site } from '@/data/data';

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()} {site.name} · {site.location}
        </p>
        <a href="#top" className="inline-flex items-center gap-1.5 transition-colors hover:text-accent">
          Back to top <FiArrowUp aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
