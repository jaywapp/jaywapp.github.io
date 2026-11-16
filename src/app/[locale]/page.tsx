import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { experienceData, type Locale } from '@/data/content';
import { blogUrl, homeContent, posts, type MadeItem } from '@/data/home';
import { pageMetadata } from '@/app/metadata';
import ExtLink from '@/components/ExtLink';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'meta' });
  return pageMetadata(params.locale as Locale, '', t('homeTitle'), t('homeDescription'));
}

function Made({ item }: { item: MadeItem }) {
  // The name links to the finished thing when there is one, otherwise to GitHub, otherwise nowhere.
  const main = item.live?.href ?? item.repo;
  return (
    <li>
      {main ? (
        <ExtLink href={main} className="made-name">
          {item.name}
        </ExtLink>
      ) : (
        <span className="made-name">{item.name}</span>
      )}
      <p>{item.line}</p>
      {(item.live || item.repo) && (
        <p className="made-links">
          {item.live && <ExtLink href={item.live.href}>{item.live.label}</ExtLink>}
          {item.repo && <ExtLink href={item.repo}>GitHub</ExtLink>}
        </p>
      )}
    </li>
  );
}

export default async function HomePage({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);
  const locale = params.locale as Locale;
  const other: Locale = locale === 'ko' ? 'en' : 'ko';
  const t = await getTranslations('home');
  const c = await getTranslations('common');
  const home = homeContent[locale];
  const resume = `/${locale}/resume/`;

  return (
    <div className="home">
      <a className="skip" href="#work">
        {c('skipToContent')}
      </a>
      <header className="card">
        <h1>{home.slogan}</h1>
        <p className="role">
          <strong>{home.name}</strong>
          {home.role}
        </p>
        <div className="intro">
          {home.intro.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <nav className="nav" aria-label={c('mainMenu')}>
          <a href="#work">{t('work')}</a>
          <a href="#made">{t('made')}</a>
          <a href="#posts">{t('posts')}</a>
          <a href={resume}>{c('resume')}</a>
          <ExtLink href="https://github.com/jaywapp">{t('github')}</ExtLink>
          <a href="mailto:jaywapp16@gmail.com">{t('email')}</a>
          <a className="lang" href={`/${other}/`} lang={other} hrefLang={other}>
            {c('switchLanguage')}
          </a>
        </nav>
      </header>
      <main className="rest">
        <section aria-labelledby="work">
          <h2 id="work">{t('work')}</h2>
          <p className="lead">{home.workLead}</p>
          <div className="fields">
            {home.fields.map((f) => (
              <div key={f.name}>
                <h3>{f.name}</h3>
                <p className="blurb">{f.blurb}</p>
                <ul>
                  {f.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="employer">
            {/* Official wordmark from https://www.smilegate.com/assets/img/common/ (fetched 2026-11-14). Trademark of Smilegate; not redrawn or recolored. */}
            <span className="employer-logo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="on-light" src="/smilegate-logo-black.svg" alt="Smilegate" width={160} height={32} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="on-dark" src="/smilegate-logo-white.svg" alt="Smilegate" width={160} height={32} />
            </span>
            <a className="more" href={resume}>
              {t('workMore')}
            </a>
          </div>
        </section>
        <section aria-labelledby="made">
          <h2 id="made">{t('made')}</h2>
          <p className="lead">{home.madeLead}</p>
          {home.madeGroups.map((g) => (
            <div className="group" key={g.title}>
              <h3>{g.title}</h3>
              <ul className="made">
                {g.items.map((m) => (
                  <Made key={m.name} item={m} />
                ))}
              </ul>
            </div>
          ))}
        </section>
        <section aria-labelledby="posts">
          <h2 id="posts">{t('posts')}</h2>
          <ul className="posts">
            {posts.map((p) => (
              <li key={p.href}>
                <ExtLink href={p.href}>
                  <span lang="ko">{p.title}</span>
                </ExtLink>
                <span className="date">{p.date}</span>
              </li>
            ))}
          </ul>
          <ExtLink className="more" href={blogUrl}>
            {t('postsMore')}
          </ExtLink>
        </section>
        <section aria-labelledby="career">
          <h2 id="career">{t('career')}</h2>
          <ul className="career">
            {experienceData[locale].slice(0, 2).map((e) => (
              <li key={e.company}>
                <span className="date">{e.period}</span>
                <strong>{e.company}</strong>
                <span className="career-role">{e.role}</span>
              </li>
            ))}
          </ul>
          <a className="more" href={resume}>
            {t('careerMore')}
          </a>
        </section>
        <footer className="foot">
          <p>© {new Date().getFullYear()} Junyoung Park</p>
        </footer>
      </main>
    </div>
  );
}
