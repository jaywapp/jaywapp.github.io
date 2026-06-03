import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import '@/app/globals.css';

export const metadata: Metadata = {
  title: 'Junyoung Park — Software Developer',
  description:
    'Software developer focused on algorithm performance, software architecture, and code readability.',
  openGraph: {
    title: 'Junyoung Park — Software Developer',
    description:
      'Software developer focused on algorithm performance, software architecture, and code readability.',
    url: 'https://jaywapp.github.io',
    siteName: 'Junyoung Park',
    locale: 'ko_KR',
    type: 'website',
  },
};

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

  if (!routing.locales.includes(locale as 'ko' | 'en')) {
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
