import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';
import Section from './Section';
import Reveal from './Reveal';
import { projects } from '@/data/data';

function Card({ project }) {
  const body = (
    <>
      <div className="flex items-start justify-between gap-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">{project.kind}</p>
        {(project.link || project.slug) && (
          <FiArrowUpRight
            className="size-5 shrink-0 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
            aria-hidden="true"
          />
        )}
      </div>
      <h4 className="mt-6 font-display text-2xl font-semibold tracking-tight transition-colors group-hover:text-accent">
        {project.title}
      </h4>
      {project.result && <p className="mt-3 font-semibold text-accent">{project.result}</p>}
      {/* Notebook cards show a preview; the full write-up is on the notebook page. */}
      <div className="mt-3 flex-1">
        <p className={`leading-relaxed text-muted ${project.slug ? 'line-clamp-5' : ''}`}>{project.description}</p>
      </div>
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

  if (project.slug) {
    return (
      <Link href={`/notebooks/${project.slug}`} className={className}>
        {body}
        <p className="mt-6 text-sm font-semibold text-accent">Read the notebook and results</p>
      </Link>
    );
  }

  return project.link ? (
    <a href={project.link} target="_blank" rel="noopener noreferrer" className={className}>
      {body}
    </a>
  ) : (
    <div className={className}>{body}</div>
  );
}

const groups = [
  {
    title: 'Machine learning notebooks',
    intro: 'Each one opens with the full code and results, including the checks for leaks and inflated scores.',
    items: projects.filter((p) => p.notebook),
  },
  {
    title: 'Products and dashboards',
    intro: 'Live apps and dashboards you can use.',
    items: projects.filter((p) => !p.notebook),
  },
];

export default function Work() {
  return (
    <Section
      id="work"
      index="03"
      eyebrow="Selected work"
      title="Models you can read, products you can use."
      intro="Most of my data systems run inside the organisations I work for. These are the pieces that are public."
    >
      <div className="space-y-16">
        {groups.map((group) => (
          <div key={group.title}>
            <Reveal className="mb-8 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <h3 className="font-display text-xl font-semibold tracking-tight">{group.title}</h3>
              <p className="text-sm text-muted">{group.intro}</p>
            </Reveal>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {group.items.map((project, i) => (
                <Reveal key={project.title} delay={(i % 3) * 0.08}>
                  <Card project={project} />
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
