import { FiDatabase, FiBarChart2, FiCpu, FiCode } from 'react-icons/fi';
import Section from './Section';
import Reveal from './Reveal';
import { services, skills } from '@/data/data';

const icons = [FiDatabase, FiBarChart2, FiCpu, FiCode];

export default function Expertise() {
  return (
    <Section id="expertise" index="04" eyebrow="Expertise" title="What I can help you with.">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, i) => {
          const Icon = icons[i];
          return (
            <Reveal key={service.title} delay={i * 0.06} className="rounded-3xl border border-line bg-surface p-7">
              <span className="grid size-11 place-items-center rounded-2xl bg-accent-soft text-accent">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-lg font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{service.description}</p>
            </Reveal>
          );
        })}
      </div>

      <Reveal className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((s) => (
          <div key={s.group}>
            <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-muted">{s.group}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {s.items.map((item) => (
                <li key={item} className="rounded-full border border-line px-3 py-1 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Reveal>
    </Section>
  );
}
