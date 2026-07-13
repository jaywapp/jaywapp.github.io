import { useTranslations, useLocale } from 'next-intl';
import { skills, educationData, certifications, type Locale } from '@/data/content';
import { GraduationCap, Award } from 'lucide-react';

const skillColors: Record<string, string> = {
  'C#': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  '.NET': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  'WPF': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  'Perforce': 'bg-orange-500/10 text-orange-400 border-orange-500/20',
  'TeamCity': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  'React': 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  'JavaScript': 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
  'Node.js': 'bg-green-500/10 text-green-400 border-green-500/20',
};

export default function About() {
  const t = useTranslations('about');
  const locale = useLocale() as Locale;
  const education = educationData[locale];
  const certs = certifications[locale];

  return (
    <section id="about" className="py-24 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-white mb-12">{t('title')}</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: bio + education + certifications */}
          <div className="space-y-8">
            <p className="text-zinc-400 leading-relaxed text-[15px]">{t('description')}</p>

            {/* Education */}
            <div>
              <h3 className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-4">
                {t('education')}
              </h3>
              <div className="space-y-2">
                {education.map((edu) => (
                  <div
                    key={edu.school}
                    className="flex items-start gap-3 bg-surface border border-border rounded-lg p-4"
                  >
                    <GraduationCap className="text-blue-400 mt-0.5 shrink-0" size={18} />
                    <div>
                      <p className="text-white font-medium text-sm">{edu.school}</p>
                      <p className="text-zinc-400 text-sm">{edu.major}</p>
                      <p className="text-zinc-600 text-xs mt-1">{edu.period}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-4">
                {t('certifications')}
              </h3>
              <div className="space-y-2">
                {certs.map((cert) => (
                  <div
                    key={cert.name}
                    className="flex items-start gap-3 bg-surface border border-border rounded-lg p-4"
                  >
                    <Award className="text-yellow-400 mt-0.5 shrink-0" size={18} />
                    <div>
                      <p className="text-white font-medium text-sm">{cert.name}</p>
                      <p className="text-zinc-500 text-xs">{cert.type}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: skills */}
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-4">
                {t('skills')} — {t('major')}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.major.map((skill) => (
                  <span
                    key={skill}
                    className={`text-sm px-3 py-1.5 rounded-md border font-medium ${skillColors[skill] ?? 'bg-zinc-800 text-zinc-300 border-zinc-700'}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-4">
                {t('skills')} — {t('minor')}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.minor.map((skill) => (
                  <span
                    key={skill}
                    className={`text-sm px-3 py-1.5 rounded-md border font-medium ${skillColors[skill] ?? 'bg-zinc-800 text-zinc-300 border-zinc-700'}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
