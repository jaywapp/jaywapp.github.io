'use client';

import { useTranslations } from 'next-intl';
import { Github, Linkedin, Mail, BookOpen } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/jaywapp', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/jaywapp16/', label: 'LinkedIn' },
  { icon: BookOpen, href: 'https://jaywapp.tistory.com/', label: 'Blog' },
  { icon: Mail, href: 'mailto:jaywapp16@gmail.com', label: 'Email' },
];

export default function Hero() {
  const t = useTranslations('hero');

  const impact = [
    { value: '9+', label: t('impact.years') },
    { value: '70', label: t('impact.engineers') },
    { value: '550+', label: t('impact.analyses') },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden px-6 pb-16 pt-28 sm:pt-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[38rem] w-[60rem] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[120px]"
      />
      <div className="relative mx-auto flex min-h-[calc(100vh-11rem)] max-w-5xl flex-col items-center justify-center text-center animate-fade-in">
        <p className="mb-5 font-mono text-xs uppercase tracking-[0.22em] text-blue-400">
          {t('eyebrow')}
        </p>
        {/* Subtle top badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#2a2a2a] bg-[#111111]/80 px-4 py-1.5 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs text-zinc-400">Smilegate RPG</span>
        </div>

        {/* Name */}
        <h1 className="mb-5 text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
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
        <p className="mb-6 text-lg font-medium text-zinc-300 sm:text-xl">{t('title')}</p>

        {/* Description */}
        <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
          {t('description')}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a
            href="#experience"
            className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
          >
            {t('viewWork')}
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-[#2a2a2a] bg-[#111111] px-6 py-3 text-sm font-medium text-white transition-colors hover:border-zinc-600 hover:bg-[#1a1a1a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
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
              className="grid h-11 w-11 place-items-center rounded-full text-zinc-500 transition-colors hover:bg-white/5 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>

        <dl className="mt-14 grid w-full max-w-3xl grid-cols-1 gap-px overflow-hidden rounded-2xl border border-[#2a2a2a] bg-[#2a2a2a] text-left sm:grid-cols-3">
          {impact.map((item) => (
            <div key={item.label} className="bg-[#101010] px-6 py-5">
              <dt className="text-sm text-zinc-500">{item.label}</dt>
              <dd className="mt-1 font-mono text-2xl font-semibold text-white">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
