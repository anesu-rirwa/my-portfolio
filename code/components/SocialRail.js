import SocialIcon from './SocialIcon';
import { socialLinks } from '@/data/data';

// Fixed vertical social links on wide screens.
export default function SocialRail() {
  return (
    <aside className="fixed bottom-0 left-6 z-40 hidden flex-col items-center gap-5 xl:flex" aria-label="Social links">
      {socialLinks.map((s) => (
        <a
          key={s.name}
          href={s.url}
          target={s.url.startsWith('mailto:') ? undefined : '_blank'}
          rel="noopener noreferrer"
          aria-label={s.name}
          className="text-muted transition-all hover:-translate-y-0.5 hover:text-accent"
        >
          <SocialIcon name={s.name} className="size-4" />
        </a>
      ))}
      <span className="mt-1 h-24 w-px bg-line" />
    </aside>
  );
}
