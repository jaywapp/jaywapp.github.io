'use client';

import { useTranslations, useLocale } from 'next-intl';
import GitHubCalendar from 'react-github-calendar';

export default function GitHubActivity() {
  const t = useTranslations('github');
  const locale = useLocale();

  return (
    <section id="github" className="py-24 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-white mb-12">{t('title')}</h2>

        <div className="bg-surface border border-border rounded-xl p-6 sm:p-8">
          <h3 className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-6">
            {t('contributions')}
          </h3>
          <div className="overflow-x-auto">
            <GitHubCalendar
              username="jaywapp"
              colorScheme="dark"
              theme={{
                dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
              }}
              labels={{
                totalCount:
                  locale === 'ko'
                    ? '최근 1년간 {{count}}회 기여'
                    : '{{count}} contributions in the last year',
              }}
              style={{ width: '100%' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
