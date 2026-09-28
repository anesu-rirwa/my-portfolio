import Section from './Section';
import Reveal from './Reveal';
import { education, certifications, community, languages } from '@/data/data';

function Card({ title, children, className = '', delay }) {
  return (
    <Reveal delay={delay} className={`rounded-3xl border border-line bg-surface p-7 ${className}`}>
      <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-muted">{title}</h3>
      <div className="mt-5">{children}</div>
    </Reveal>
  );
}

function Row({ name, detail, meta }) {
  return (
    <li className="flex items-baseline justify-between gap-4 border-b border-line py-3 last:border-0 last:pb-0 first:pt-0">
      <div>
        <p className="font-medium">{name}</p>
        {detail && <p className="text-sm text-muted">{detail}</p>}
      </div>
      <p className="shrink-0 text-right font-mono text-xs text-muted">{meta}</p>
    </li>
  );
}

export default function Credentials() {
  return (
    <Section id="education" index="05" eyebrow="Education" title="Learning, certifications & community.">
      <div className="grid gap-5 md:grid-cols-2">
        <Card title="Education">
          <div className="flex items-baseline justify-between gap-4">
            <p className="font-display text-xl font-semibold">{education.school}</p>
            <p className="shrink-0 font-mono text-xs text-muted">{education.period}</p>
          </div>
          <p className="mt-2">{education.degree}</p>
          <p className="mt-1 text-sm text-muted">{education.detail}</p>
          <p className="mt-4 border-l-2 border-accent/40 pl-4 text-sm italic leading-relaxed text-muted">
            Thesis: {education.thesis}
          </p>
        </Card>

        <Card title="Certifications" delay={0.06}>
          <ul>
            {certifications.map((c) => (
              <Row key={c.name} name={c.name} detail={c.issuer} meta={c.status} />
            ))}
          </ul>
        </Card>

        <Card title="Community" delay={0.06}>
          <ul>
            {community.map((c) => (
              <Row key={c.name} name={c.name} detail={c.role} meta={c.period} />
            ))}
          </ul>
        </Card>

        <Card title="Languages" delay={0.12}>
          <ul>
            {languages.map((l) => (
              <Row key={l.name} name={l.name} meta={l.level} />
            ))}
          </ul>
        </Card>
      </div>
    </Section>
  );
}
