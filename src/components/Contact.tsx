import { useTranslations } from 'next-intl';
import { Github, Linkedin, Mail, BookOpen } from 'lucide-react';

const contactLinks = [
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/jaywapp',
    href: 'https://github.com/jaywapp',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/jaywapp16',
    href: 'https://www.linkedin.com/in/jaywapp16/',
  },
  {
    icon: BookOpen,
    label: 'Blog',
    value: 'jaywapp.tistory.com',
    href: 'https://jaywapp.tistory.com/',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'jaywapp16@gmail.com',
    href: 'mailto:jaywapp16@gmail.com',
  },
];

export default function Contact() {
  const t = useTranslations('contact');

  return (
    <section id="contact" className="py-24 px-6 border-t border-[#2a2a2a]">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">{t('title')}</h2>
          <p className="text-zinc-400 leading-relaxed">{t('description')}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {contactLinks.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="bg-[#111111] border border-[#2a2a2a] rounded-xl p-5 hover:border-[#3a3a3a] hover:bg-[#141414] transition-all group text-center"
            >
              <Icon
                size={22}
                className="text-zinc-500 group-hover:text-blue-400 transition-colors mx-auto mb-3"
              />
              <p className="text-white text-sm font-medium mb-1">{label}</p>
              <p className="text-zinc-500 text-xs truncate">{value}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
