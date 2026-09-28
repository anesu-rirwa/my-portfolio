import Reveal from './Reveal';

export default function Section({ id, index, eyebrow, title, intro, children, className = '' }) {
  return (
    <section id={id} className={`mx-auto max-w-6xl px-6 py-20 md:py-28 ${className}`}>
      <Reveal className="mb-12 max-w-2xl md:mb-16">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          {index} — {eyebrow}
        </p>
        <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-5xl">{title}</h2>
        {intro && <p className="mt-5 text-lg leading-relaxed text-muted">{intro}</p>}
      </Reveal>
      {children}
    </section>
  );
}
