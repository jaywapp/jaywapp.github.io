import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import type { Locale } from '@/data/content';
import '@/app/globals.css';

const siteMeta: Record<Locale, { title: string; description: string }> = {
  ko: {
    title: '박준영 — 소프트웨어 개발자',
    description:
      '개발 조직과 실무 사용자의 생산성을 높이는 도구와 시스템을 설계하고 구현하는 소프트웨어 개발자입니다.',
  },
  en: {
    title: 'Junyoung Park — Software Developer',
    description:
      'Software developer building tools and systems that boost the productivity of engineering teams and end users.',
  },
};

export function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Metadata {
  const locale = (
    routing.locales.includes(params.locale as Locale)
      ? params.locale
      : routing.defaultLocale
  ) as Locale;
  const { title, description } = siteMeta[locale];

  return {
    metadataBase: new URL('https://jaywapp.github.io'),
    title,
    description,
    icons: { icon: '/favicon.svg' },
    alternates: {
      canonical: `/${locale}/`,
      languages: { ko: '/ko/', en: '/en/', 'x-default': '/ko/' },
    },
    openGraph: {
      title,
      description,
      url: `/${locale}/`,
      siteName: 'Junyoung Park',
      locale: locale === 'ko' ? 'ko_KR' : 'en_US',
      alternateLocale: locale === 'ko' ? 'en_US' : 'ko_KR',
      type: 'website',
      images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og-image.png'],
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className="dark">
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
