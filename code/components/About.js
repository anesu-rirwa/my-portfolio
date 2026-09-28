import Section from './Section';
import Reveal from './Reveal';
import { stats } from '@/data/data';

export default function About() {
  return (
    <Section id="about" index="01" eyebrow="About" title="From paper logbooks to live dashboards.">
      <div className="grid gap-12 md:grid-cols-[1.2fr_1fr] md:gap-16">
        <Reveal className="space-y-5 text-lg leading-relaxed text-muted">
          <p>
            I&rsquo;m a Data &amp; AI Engineer and Technology Lead at{' '}
            <span className="text-fg">Munisa Resources</span>, a Zimbabwean mining and infrastructure group. I designed
            and built the group&rsquo;s in-house ERP and an online mineral-asset marketplace, and moved its operations
            from paper and scattered spreadsheets onto one system with automated reporting and forecasting.
          </p>
          <p>
            I work across the full stack of data: capture, PostgreSQL design, Power BI dashboards, predictive models
            and production web apps in Next.js and TypeScript. Through <span className="text-fg">Kordel Data</span> I
            deliver the same for mining and healthcare clients.
          </p>
          <p>
            I hold a BSc (Hons) in Artificial Intelligence and Machine Learning from the University of Zimbabwe and am
            working towards Microsoft Azure certification.
          </p>
        </Reveal>

        <dl className="grid grid-cols-2 gap-px self-start overflow-hidden rounded-3xl border border-line bg-line">
          {stats.map((s, i) => (
            <Reveal key={s.value} delay={i * 0.06} className="flex flex-col-reverse bg-surface p-6">
              <dt className="mt-2 text-sm leading-snug text-muted">{s.label}</dt>
              <dd className="font-display text-3xl font-bold tracking-tight text-accent md:text-4xl">{s.value}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </Section>
  );
}
