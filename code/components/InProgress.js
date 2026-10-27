import Section from './Section';
import Reveal from './Reveal';
import { inProgress } from '@/data/data';

export default function InProgress() {
  return (
    <Section id="in-progress" index="04" eyebrow="In progress" title="What I’m building next.">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {inProgress.map((project, i) => (
          <Reveal key={project.title} delay={i * 0.08} className="flex h-full flex-col rounded-3xl border border-dashed border-line p-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">{project.kind}</p>
            <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight">{project.title}</h3>
            <p className="mt-3 leading-relaxed text-muted">{project.description}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
