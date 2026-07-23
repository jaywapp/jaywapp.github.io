import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import type { Locale } from '@/data/content';
import '@/app/globals.css';

const siteMeta: Record<Locale, { title: string; description: string }> = {
  ko: {
    title: '박준영 — Developer Productivity & Tooling Engineer',
    description:
      '개발 조직의 생산성을 높이는 내부 도구, 자동화, AI 워크플로우 및 개발자 플랫폼을 설계하고 구현합니다.',
  },
  en: {
    title: 'Junyoung Park — Developer Productivity & Tooling Engineer',
    description:
      'Developer Productivity and Tooling Engineer building internal tools, automation, AI workflows, and developer platforms.',
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
