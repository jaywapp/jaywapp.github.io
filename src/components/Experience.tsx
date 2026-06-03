import { useTranslations, useLocale } from 'next-intl';
import { experienceData, type Locale } from '@/data/content';

export default function Experience() {
  const t = useTranslations('experience');
  const locale = useLocale() as Locale;
  const items = experienceData[locale];

  return (
    <section id="experience" className="py-24 px-6 border-t border-[#2a2a2a]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-white mb-12">{t('title')}</h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-[#2a2a2a] ml-[7px] hidden sm:block" />

          <div className="space-y-8">
            {items.map((item, idx) => (
              <div key={idx} className="sm:pl-8 relative">
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 hidden sm:block ${
                    item.current
                      ? 'bg-blue-500 border-blue-400'
                      : 'bg-[#0a0a0a] border-[#2a2a2a]'
                  }`}
                />

                <div className="bg-[#111111] border border-[#2a2a2a] rounded-xl p-5 hover:border-[#3a3a3a] transition-colors">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-white font-semibold">{item.company}</h3>
                      <p className="text-blue-400 text-sm">{item.role}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      {item.current && (
                        <span className="flex items-center gap-1.5 bg-green-500/10 text-green-400 text-xs px-2.5 py-1 rounded-full border border-green-500/20">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                          {t('present')}
                        </span>
                      )}
                      <span className="text-zinc-500 text-xs">{item.period}</span>
                    </div>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
