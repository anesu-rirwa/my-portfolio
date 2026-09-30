import { FiArrowUpRight } from 'react-icons/fi';
import Section from './Section';
import Reveal from './Reveal';
import { projects } from '@/data/data';

function Card({ project }) {
  const body = (
    <>
      <div className="flex items-start justify-between gap-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">{project.kind}</p>
        {project.link && (
          <FiArrowUpRight
            className="size-5 shrink-0 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
            aria-hidden="true"
          />
        )}
      </div>
      <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight transition-colors group-hover:text-accent">
        {project.title}
      </h3>
      <p className="mt-3 flex-1 leading-relaxed text-muted">{project.description}</p>
      <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
        {project.tags.map((tag) => (
          <li key={tag} className="rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent">
            {tag}
          </li>
        ))}
      </ul>
    </>
  );

  const className =
    'group flex h-full flex-col rounded-3xl border border-line bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5';

  return project.link ? (
    <a href={project.link} target="_blank" rel="noopener noreferrer" className={className}>
      {body}
    </a>
  ) : (
    <div className={className}>{body}</div>
  );
}

export default function Work() {
  return (
    <Section
      id="work"
      index="03"
      eyebrow="Selected work"
      title="Things you can click on."
      intro="Most of what I build runs inside the organisations I work for; these are the pieces that are public."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 0.08}>
            <Card project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
