'use client';

import { useTranslations } from 'next-intl';
import { socialLinks } from '@/data/content';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-3xl mx-auto text-center animate-fade-in">
        {/* Subtle top badge */}
        <div className="inline-flex items-center gap-2 bg-surface border border-border rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs text-zinc-400">Smilegate RPG</span>
        </div>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
          <span className="block">{t('greeting')}</span>
          <span className="block">
            {t('subGreeting')}{' '}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              {t('name')}
            </span>
            {t('suffix')}
          </span>
        </h1>

        {/* Title */}
        <p className="text-zinc-400 text-lg sm:text-xl mb-6">{t('title')}</p>

        {/* Description */}
        <p className="text-zinc-500 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          {t('description')}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a
            href="#experience"
            className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg text-sm font-medium transition-colors"
          >
            {t('viewWork')}
          </a>
          <a
            href="#contact"
            className="bg-surface hover:bg-surface-2 border border-border text-white px-6 py-3 rounded-lg text-sm font-medium transition-colors"
          >
            {t('contact')}
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-5">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              aria-label={label}
              className="text-zinc-500 hover:text-white transition-colors"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
