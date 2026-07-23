import { useLocale, useTranslations } from 'next-intl';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { featuredProjects, type Locale } from '@/data/content';

export default function Projects() {
  const t = useTranslations('projects');
  const locale = useLocale() as Locale;
  const projects = featuredProjects[locale];

  return (
    <section id="projects" className="border-t border-border px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex items-center justify-between gap-6">
          <h2 className="text-2xl font-semibold text-white">{t('title')}</h2>
          <a
            href="https://github.com/jaywapp?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-11 items-center gap-1.5 text-sm text-zinc-400 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
          >
            {t('viewAll')}
            <ExternalLink size={14} />
          </a>
        </div>

        <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-blue-400">
          {t('featured')}
        </p>

        <div className="grid gap-4 lg:grid-cols-2">
          {projects.map((project, index) => (
            <a
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name}: ${t('openProject')}`}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-0.5 hover:border-blue-500/40 hover:bg-surface-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400 sm:p-8 ${index === 0 ? 'lg:col-span-2' : ''}`}
            >
              {index === 0 && (
                <div
                  aria-hidden="true"
                  className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-blue-600/10 blur-3xl"
                />
              )}

              <div className="relative flex items-start justify-between gap-6">
                <div>
                  <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">
                    {project.category}
                  </p>
                  <h3 className="text-xl font-semibold text-white transition-colors group-hover:text-blue-400 sm:text-2xl">
                    {project.name}
                  </h3>
                </div>
                <ArrowUpRight
                  className="shrink-0 text-zinc-600 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-400"
                  size={22}
                />
              </div>

              <p
                className={`relative mt-5 leading-relaxed text-zinc-400 ${index === 0 ? 'max-w-3xl text-base sm:text-lg' : 'text-sm'}`}
              >
                {project.description}
              </p>

              <p className="relative mt-6 border-l-2 border-blue-500 pl-3 text-sm font-medium text-zinc-200">
                {project.highlight}
              </p>

              <div className="relative mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-border-strong bg-black/20 px-3 py-1 text-xs text-zinc-400"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
