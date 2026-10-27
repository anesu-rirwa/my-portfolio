import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FiArrowLeft, FiArrowRight, FiDownload, FiGithub } from 'react-icons/fi';
import { loadNotebook } from '@/lib/notebook';
import { projects, site } from '@/data/data';

const notebooks = projects.filter((p) => p.notebook);

export const dynamicParams = false;

export function generateStaticParams() {
  return notebooks.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = notebooks.find((p) => p.slug === slug);
  if (!project) return {};
  const title = `${project.title} | ${site.name}`;
  return {
    title,
    description: project.description,
    alternates: { canonical: `/notebooks/${slug}` },
    openGraph: { title, description: project.description, url: `${site.url}/notebooks/${slug}` },
    twitter: { title, description: project.description },
  };
}

function Output({ output }) {
  if (output.kind === 'image') {
    // eslint-disable-next-line @next/next/no-img-element -- inline base64 plot from the notebook
    return <img src={output.src} alt="Plot output" className="mx-auto max-w-full rounded-xl bg-white p-2" />;
  }
  if (output.kind === 'html') {
    return <div className="nb-table overflow-x-auto" dangerouslySetInnerHTML={{ __html: output.html }} />;
  }
  return (
    <pre
      className={`max-h-[32rem] overflow-auto whitespace-pre font-mono text-[13px] leading-relaxed ${
        output.kind === 'error' ? 'text-red-600 dark:text-red-400' : 'text-fg/85'
      }`}
    >
      {output.text}
    </pre>
  );
}

function CodeCell({ cell }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-surface">
      <pre className="nb-code overflow-x-auto bg-accent-soft/50 px-5 py-4 font-mono text-[13px] leading-relaxed">
        <code dangerouslySetInnerHTML={{ __html: cell.html }} />
      </pre>
      {cell.outputs.length > 0 && (
        <div className="space-y-4 border-t border-line px-5 py-4">
          {cell.outputs.map((output, i) => (
            <Output key={i} output={output} />
          ))}
        </div>
      )}
    </div>
  );
}

export default async function NotebookPage({ params }) {
  const { slug } = await params;
  const index = notebooks.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();
  const project = notebooks[index];
  const next = notebooks[(index + 1) % notebooks.length];

  const { cells } = await loadNotebook(project.notebook);

  return (
    <article id="top" className="mx-auto max-w-4xl px-6 pb-20 pt-28 md:pt-36">
      <Link
        href="/#work"
        className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent"
      >
        <FiArrowLeft aria-hidden="true" /> All work
      </Link>

      <header className="mt-8 border-b border-line pb-10">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{project.kind}</p>
        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">{project.title}</h1>
        {project.result && <p className="mt-4 text-xl font-semibold text-accent">{project.result}</p>}
        <p className="mt-5 text-lg leading-relaxed text-muted">{project.description}</p>
        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
          {project.tags.map((tag) => (
            <li key={tag} className="rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent">
              {tag}
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={`/notebooks/${project.notebook}`}
            download
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-fg transition-transform hover:-translate-y-0.5"
          >
            <FiDownload aria-hidden="true" /> Download notebook
          </a>
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-fg/15 px-5 py-2.5 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
            >
              <FiGithub aria-hidden="true" /> View on GitHub
            </a>
          )}
        </div>
        <p className="mt-6 text-sm text-muted">
          The full notebook, shown with the outputs from its last run.
          {project.data && <> Data: {project.data}.</>}
        </p>
      </header>

      <div className="mt-10 space-y-6">
        {cells.map((cell, i) =>
          cell.type === 'markdown' ? (
            <div key={i} className="nb-md" dangerouslySetInnerHTML={{ __html: cell.html }} />
          ) : (
            <CodeCell key={i} cell={cell} />
          )
        )}
      </div>

      <Link
        href={`/notebooks/${next.slug}`}
        className="group mt-16 flex items-center justify-between gap-6 rounded-3xl border border-line bg-surface p-7 transition-colors hover:border-accent/40"
      >
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted">Next notebook</p>
          <p className="mt-2 font-display text-2xl font-semibold tracking-tight transition-colors group-hover:text-accent">
            {next.title}
          </p>
          {next.result && <p className="mt-1 text-sm text-muted">{next.result}</p>}
        </div>
        <FiArrowRight className="size-6 shrink-0 text-muted transition-all group-hover:translate-x-1 group-hover:text-accent" aria-hidden="true" />
      </Link>
    </article>
  );
}
