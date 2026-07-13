import { setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import GitHubActivity from '@/components/GitHubActivity';
import Contact from '@/components/Contact';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default function HomePage({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);

  return (
    <main className="min-h-screen bg-background text-white">
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <GitHubActivity />
      <Contact />
      <footer className="border-t border-border py-8 text-center text-zinc-500 text-sm">
        <p>© {new Date().getFullYear()} Junyoung Park. Built with Next.js & Tailwind CSS.</p>
      </footer>
    </main>
  );
}
