import { useTranslations, useLocale } from 'next-intl';
import { experienceData, type Locale } from '@/data/content';

export default function Experience() {
  const t = useTranslations('experience');
  const locale = useLocale() as Locale;
  const items = experienceData[locale];

  return (
    <section id="experience" className="py-24 px-6 border-t border-[#2a2a2a]">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-baseline gap-4 mb-12">
          <h2 className="text-2xl font-semibold text-white">{t('title')}</h2>
          <span className="text-sm text-zinc-500">{t('totalCareer')}</span>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-[#2a2a2a] ml-[7px] hidden sm:block" />

          <div className="space-y-6">
            {items.map((item, idx) => (
              <div key={idx} className="sm:pl-8 relative">
                <div
                  className={`absolute left-0 top-2 w-3.5 h-3.5 rounded-full border-2 hidden sm:block ${
                    item.current
                      ? 'bg-blue-500 border-blue-400'
                      : 'bg-[#0a0a0a] border-[#2a2a2a]'
                  }`}
                />

                <div className="bg-[#111111] border border-[#2a2a2a] rounded-xl overflow-hidden hover:border-[#3a3a3a] transition-colors">
                  {/* Company header */}
                  <div className="p-5 flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <h3 className="text-white font-semibold">{item.company}</h3>
                        {item.current && (
                          <span className="flex items-center gap-1.5 bg-green-500/10 text-green-400 text-xs px-2 py-0.5 rounded-full border border-green-500/20">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                            {t('present')}
                          </span>
                        )}
                      </div>
                      <p className="text-blue-400 text-sm">{item.role}</p>
                    </div>
                    <span className="text-zinc-500 text-xs shrink-0">{item.period}</span>
                  </div>

                  {/* Projects */}
                  {item.projects && item.projects.length > 0 && (
                    <div className="border-t border-[#2a2a2a] divide-y divide-[#1e1e1e]">
                      {item.projects.map((project, pIdx) => (
                        <div key={pIdx} className="px-5 py-4">
                          <p className="text-zinc-300 text-sm font-medium mb-2">{project.title}</p>
                          <ul className="space-y-1.5">
                            {project.bullets.map((bullet, bIdx) => (
                              <li key={bIdx} className="flex gap-2 text-zinc-500 text-xs leading-relaxed">
                                <span className="text-blue-500 mt-1 shrink-0">—</span>
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Simple description for no-project entries */}
                  {!item.projects && (
                    <div className="border-t border-[#2a2a2a] px-5 py-3">
                      <p className="text-zinc-500 text-xs leading-relaxed">{item.description}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
