import { useLocale, useTranslations } from 'next-intl';
import { ChevronDown } from 'lucide-react';
import { experienceData, type Locale, type Project } from '@/data/content';

interface ProjectItemProps {
  project: Project;
}

function ProjectItem({ project }: ProjectItemProps) {
  return (
    <article className="border-t border-divider px-5 py-5 sm:px-6">
      <h4 className="text-sm font-medium text-zinc-200">{project.title}</h4>
      <ul className="mt-3 space-y-2">
        {project.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-zinc-500">
            <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue-500" />
            <span className="break-keep">{bullet}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function Experience() {
  const t = useTranslations('experience');
  const locale = useLocale() as Locale;
  const items = experienceData[locale];

  return (
    <section id="experience" className="border-t border-border px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-wrap items-baseline gap-4">
          <h2 className="text-2xl font-semibold text-white">{t('title')}</h2>
          <span className="font-mono text-sm text-zinc-500">{t('totalCareer')}</span>
        </div>

        <div className="relative">
          <div className="absolute bottom-0 left-[7px] top-0 hidden w-px bg-border sm:block" />

          <div className="space-y-6">
            {items.map((item) => {
              const visibleCount = item.current ? 3 : 2;
              const selectedProjects = item.projects?.slice(0, visibleCount) ?? [];
              const additionalProjects = item.projects?.slice(visibleCount) ?? [];

              return (
                <article key={item.company} className="relative sm:pl-8">
                  <div
                    aria-hidden="true"
                    className={`absolute left-0 top-7 hidden h-3.5 w-3.5 rounded-full border-2 sm:block ${
                      item.current
                        ? 'border-blue-400 bg-blue-500 shadow-[0_0_0_5px_rgba(59,130,246,0.08)]'
                        : 'border-border-strong bg-background'
                    }`}
                  />

                  <div
                    className={`overflow-hidden rounded-2xl border transition-colors ${
                      item.current
                        ? 'border-blue-500/25 bg-gradient-to-b from-blue-500/[0.06] to-surface'
                        : 'border-border bg-surface hover:border-border-strong'
                    }`}
                  >
                    <header className="flex flex-wrap items-start justify-between gap-4 p-5 sm:p-6">
                      <div>
                        <div className="mb-1 flex flex-wrap items-center gap-2">
                          <h3 className="text-lg font-semibold text-white">{item.company}</h3>
                          {item.current && (
                            <span className="flex items-center gap-1.5 rounded-full border border-green-500/20 bg-green-500/10 px-2 py-0.5 text-xs text-green-400">
                              <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                              {t('present')}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-blue-400">{item.role}</p>
                        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-500">
                          {item.description}
                        </p>
                      </div>
                      <span className="shrink-0 font-mono text-xs text-zinc-500">{item.period}</span>
                    </header>

                    {selectedProjects.length > 0 && (
                      <div>
                        <p className="border-t border-divider px-5 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-600 sm:px-6">
                          {t('selectedWork')}
                        </p>
                        {selectedProjects.map((project) => (
                          <ProjectItem key={project.title} project={project} />
                        ))}
                      </div>
                    )}

                    {additionalProjects.length > 0 && (
                      <details className="group border-t border-divider">
                        <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between px-5 text-sm text-zinc-400 transition-colors hover:bg-white/[0.02] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-blue-400 sm:px-6">
                          {t('moreProjects', { count: additionalProjects.length })}
                          <ChevronDown
                            aria-hidden="true"
                            size={16}
                            className="transition-transform group-open:rotate-180"
                          />
                        </summary>
                        <div>
                          {additionalProjects.map((project) => (
                            <ProjectItem key={project.title} project={project} />
                          ))}
                        </div>
                      </details>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
