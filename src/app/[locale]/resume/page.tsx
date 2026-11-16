import type { Metadata } from 'next';
import { Plus } from 'lucide-react';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import {
  certifications,
  educationData,
  experienceData,
  skills,
  socialLinks,
  type Locale,
} from '@/data/content';
import { homeContent, profile } from '@/data/home';
import { pageMetadata } from '@/app/metadata';
import ExtLink from '@/components/ExtLink';
import PrintButton from '@/components/PrintButton';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'meta' });
  return pageMetadata(params.locale as Locale, 'resume/', t('resumeTitle'), t('resumeDescription'));
}

const plus = <Plus size={20} strokeWidth={1.75} aria-hidden="true" />;

export default async function ResumePage({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);
  const locale = params.locale as Locale;
  const other: Locale = locale === 'ko' ? 'en' : 'ko';
  const t = await getTranslations('resume');
  const c = await getTranslations('common');
  const me = profile[locale];

  return (
    <div className="resume">
      <a className="skip" href="#rows">
        {c('skipToContent')}
      </a>
      <nav className="nav crumb no-print" aria-label={c('mainMenu')}>
        <a href={`/${locale}/`}>{c('home')}</a>
        <a href={`/${other}/resume/`} lang={other} hrefLang={other}>
          {c('switchLanguage')}
        </a>
      </nav>
      <header>
        <div className="top">
          <div>
            <h1>{me.name}</h1>
            <p className="role">{me.role}</p>
          </div>
          <PrintButton label={t('savePdf')} />
        </div>
        <p className="summary">{me.summary}</p>
        <ul className="nav links">
          {socialLinks.map((l) => (
            <li key={l.href}>
              <ExtLink href={l.href}>{l.label[locale]}</ExtLink>
            </li>
          ))}
        </ul>
      </header>
      <main className="rows" id="rows">
        {experienceData[locale].map((co) => (
          <details className="co" key={co.company}>
            <summary>
              <h2>{co.company}</h2>
              <span className="date">{co.period}</span>
              {plus}
              <span className="co-role">{co.role}</span>
            </summary>
            <div className="co-body">
              <p>{co.description}</p>
              {co.projects && co.projects.length > 0 && (
                <ul className="works">
                  {co.projects.map((p) => (
                    <li key={p.title}>
                      <h3>{p.title}</h3>
                      {p.bullets.length > 0 && (
                        <ul className="bul">
                          {p.bullets.map((b) => (
                            <li key={b}>{b}</li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </details>
        ))}
        <details className="co">
          <summary>
            <h2>{t('basics')}</h2>
            <span className="date" />
            {plus}
          </summary>
          <div className="co-body">
            <ul className="pairs">
              <li>
                <span>{t('skills')}</span>
                <span>{[...skills.major, ...skills.minor].join(', ')}</span>
              </li>
              <li>
                <span>{t('education')}</span>
                <span>
                  {educationData[locale].map((e) => (
                    <span key={e.school}>
                      {e.school} {e.major} <span className="date">{e.period}</span>
                    </span>
                  ))}
                </span>
              </li>
              <li>
                <span>{t('certifications')}</span>
                <span>{certifications[locale].map((x) => x.name).join(', ')}</span>
              </li>
            </ul>
          </div>
        </details>
        <details className="co">
          <summary>
            <h2>{t('sideProjects')}</h2>
            <span className="date" />
            {plus}
          </summary>
          <div className="co-body">
            <ul className="pairs">
              {/* Same projects as the home page, so the two lists cannot drift apart. */}
              {homeContent[locale].madeGroups
                .flatMap((g) => g.items)
                .map((m) => {
                  const href = m.live?.href ?? m.repo;
                  return (
                    <li key={m.name}>
                      {href ? <ExtLink href={href}>{m.name}</ExtLink> : <strong>{m.name}</strong>}
                      <span>{m.line}</span>
                    </li>
                  );
                })}
            </ul>
          </div>
        </details>
      </main>
      <footer className="foot no-print">
        <p>© {new Date().getFullYear()} Junyoung Park</p>
      </footer>
    </div>
  );
}
