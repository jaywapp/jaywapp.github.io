import type { Metadata } from 'next';
import type { Locale } from '@/data/content';

// Metadata shared by the home page and the resume. `path` is the part after the locale, e.g. '' or 'resume/'.
export function pageMetadata(locale: Locale, path: string, title: string, description: string): Metadata {
  const url = `/${locale}/${path}`;
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: { ko: `/ko/${path}`, en: `/en/${path}`, 'x-default': `/ko/${path}` },
    },
    openGraph: {
      title,
      description,
      url,
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
