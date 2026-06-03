'use client';

import { useTranslations } from 'next-intl';
import GitHubCalendar from 'react-github-calendar';

export default function GitHubActivity() {
  const t = useTranslations('github');

  return (
    <section id="github" className="py-24 px-6 border-t border-[#2a2a2a]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-white mb-12">{t('title')}</h2>

        <div className="bg-[#111111] border border-[#2a2a2a] rounded-xl p-6 sm:p-8">
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
                totalCount: '{{count}} contributions in the last year',
              }}
              style={{ width: '100%' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
