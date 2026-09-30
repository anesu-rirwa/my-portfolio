import { FiArrowUpRight } from 'react-icons/fi';
import Section from './Section';
import Reveal from './Reveal';
import { experience } from '@/data/data';

export default function Experience() {
  return (
    <Section id="experience" index="02" eyebrow="Experience" title="Where I’ve been building.">
      <ol className="border-t border-line">
        {experience.map((job) => (
          <Reveal as="li" key={job.company} className="grid gap-6 border-b border-line py-10 md:grid-cols-[260px_1fr]">
            <div>
              <h3 className="font-display text-2xl font-semibold tracking-tight">
                {job.url ? (
                  <a
                    href={job.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1 hover:text-accent"
                  >
                    {job.company}
                    <FiArrowUpRight className="size-4 opacity-50 transition-opacity group-hover:opacity-100" aria-hidden="true" />
                  </a>
                ) : (
                  job.company
                )}
              </h3>
              <p className="mt-1 text-sm text-muted">{job.about}</p>
            </div>

            <div className="space-y-8">
              {job.roles.map((role) => (
                <div key={role.title}>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                    <h4 className="text-lg font-semibold">{role.title}</h4>
                    <p className="shrink-0 font-mono text-xs uppercase tracking-wider text-muted">{role.period}</p>
                  </div>
                  <ul className="mt-4 space-y-2.5">
                    {role.points.map((point) => (
                      <li key={point} className="relative pl-5 leading-relaxed text-muted">
                        <span className="absolute left-0 top-[0.7em] size-1.5 rounded-full bg-accent/60" aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
