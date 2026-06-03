'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/navigation';

export default function Nav() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'about', href: '#about' },
    { key: 'experience', href: '#experience' },
    { key: 'projects', href: '#projects' },
    { key: 'github', href: '#github' },
    { key: 'contact', href: '#contact' },
  ] as const;

  const toggleLocale = () => {
    const next = locale === 'ko' ? 'en' : 'ko';
    router.replace(pathname, { locale: next });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#2a2a2a]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className="text-white font-semibold text-lg tracking-tight hover:text-zinc-300 transition-colors"
        >
          jaywapp
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-zinc-400 hover:text-white text-sm transition-colors"
            >
              {t(item.key)}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleLocale}
            className="text-xs font-medium text-zinc-400 hover:text-white border border-[#2a2a2a] hover:border-zinc-500 rounded-full px-3 py-1.5 transition-all"
          >
            {locale === 'ko' ? 'EN' : '한국어'}
          </button>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-zinc-400 hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#111111] border-b border-[#2a2a2a] px-6 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-zinc-400 hover:text-white text-sm transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {t(item.key)}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
