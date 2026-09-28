import Image from 'next/image';
import { FiArrowDownRight, FiDownload } from 'react-icons/fi';
import Reveal from './Reveal';
import portrait from '@/public/images/me.jpg';
import { site } from '@/data/data';

function DotGrid({ className, cols = 6, rows = 1 }) {
  return (
    <svg className={className} width={cols * 14} height={rows * 14} aria-hidden="true">
      {Array.from({ length: cols * rows }, (_, i) => (
        <circle key={i} cx={(i % cols) * 14 + 3} cy={Math.floor(i / cols) * 14 + 3} r="2.5" fill="currentColor" />
      ))}
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-24 pt-32 md:pb-32 md:pt-44">
      {/* Soft landscape shape behind the headline */}
      <svg
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 hidden h-[70%] w-full text-accent-soft sm:block [mask-image:linear-gradient(to_bottom,black_55%,transparent)]"
        viewBox="0 0 1440 600"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M0 470C110 420 170 300 300 280s200-150 330-170 190 110 300 140 170-80 290-70 170 120 220 150v370H0Z"
        />
      </svg>
      <DotGrid className="pointer-events-none absolute left-1/2 top-28 hidden text-sun md:block" cols={6} />
      <DotGrid className="pointer-events-none absolute bottom-10 left-[8%] text-sun" cols={4} rows={3} />
      <span
        className="pointer-events-none absolute right-[6%] top-24 hidden h-24 w-10 rotate-[30deg] rounded-[100%_0] bg-sun/80 lg:block"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 md:grid-cols-[1.35fr_1fr]">
        <div>
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Based in {site.location}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              Hi! I&rsquo;m Anesu.
              <br />
              <span className="text-accent">Data &amp; AI</span> Engineer.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted">
              I build the data systems, dashboards and machine learning models that turn day-to-day operations into
              clear decisions. I lead technology at Munisa Resources and run the consultancy Kordel Data.
            </p>
          </Reveal>
          <Reveal delay={0.24} className="mt-10 flex flex-wrap gap-3">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-fg transition-transform hover:-translate-y-0.5"
            >
              See my work <FiArrowDownRight aria-hidden="true" />
            </a>
            <a
              href={site.cv}
              download
              className="inline-flex items-center gap-2 rounded-full border border-fg/15 bg-bg/60 px-6 py-3 text-sm font-semibold backdrop-blur transition-colors hover:border-accent hover:text-accent"
            >
              <FiDownload aria-hidden="true" /> Download CV
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="relative mx-auto w-full max-w-[340px]">
          <div className="absolute -inset-3 -z-10 rotate-3 rounded-[2.5rem] bg-accent/15" aria-hidden="true" />
          <Image
            src={portrait}
            alt="Portrait of Anesu Rirwa"
            priority
            placeholder="blur"
            sizes="(min-width: 768px) 340px, 80vw"
            className="aspect-[4/5] w-full rounded-[2rem] object-cover object-top shadow-xl shadow-accent/10"
          />
        </Reveal>
      </div>
    </section>
  );
}
