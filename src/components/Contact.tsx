import { useTranslations } from 'next-intl';
import { socialLinks } from '@/data/content';

export default function Contact() {
  const t = useTranslations('contact');

  return (
    <section id="contact" className="py-24 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">{t('title')}</h2>
          <p className="text-zinc-400 leading-relaxed">{t('description')}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {socialLinks.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="bg-surface border border-border rounded-xl p-5 hover:border-border-strong hover:bg-surface-hover transition-all group text-center"
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
