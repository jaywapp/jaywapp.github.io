'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Star, GitFork, ExternalLink } from 'lucide-react';

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
}

const languageColors: Record<string, string> = {
  'C#': '#178600',
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  Python: '#3572A5',
  Go: '#00ADD8',
  Rust: '#dea584',
  Java: '#b07219',
  default: '#8b8b8b',
};

export default function Projects() {
  const t = useTranslations('projects');
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/users/jaywapp/repos?sort=stars&per_page=100&type=public')
      .then((r) => r.json())
      .then((data: Repo[]) => {
        const filtered = data
          .filter((r) => !r.name.startsWith('.') && r.name !== 'jaywapp')
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, 6);
        setRepos(filtered);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section id="projects" className="py-24 px-6 border-t border-[#2a2a2a]">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-2xl font-semibold text-white">{t('title')}</h2>
          <a
            href="https://github.com/jaywapp?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-zinc-400 hover:text-white transition-colors"
          >
            {t('viewAll')}
            <ExternalLink size={14} />
          </a>
        </div>

        {loading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="bg-[#111111] border border-[#2a2a2a] rounded-xl p-5 animate-pulse h-40"
              />
            ))}
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {repos.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#111111] border border-[#2a2a2a] rounded-xl p-5 hover:border-[#3a3a3a] hover:bg-[#141414] transition-all group"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-white font-medium text-sm group-hover:text-blue-400 transition-colors truncate pr-2">
                    {repo.name}
                  </h3>
                  <ExternalLink
                    size={14}
                    className="text-zinc-600 group-hover:text-zinc-400 shrink-0 mt-0.5 transition-colors"
                  />
                </div>

                <p className="text-zinc-500 text-xs leading-relaxed mb-4 line-clamp-2">
                  {repo.description ?? t('noDescription')}
                </p>

                <div className="flex items-center gap-4 mt-auto">
                  {repo.language && (
                    <span className="flex items-center gap-1.5 text-xs text-zinc-500">
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{
                          backgroundColor:
                            languageColors[repo.language] ?? languageColors.default,
                        }}
                      />
                      {repo.language}
                    </span>
                  )}
                  {repo.stargazers_count > 0 && (
                    <span className="flex items-center gap-1 text-xs text-zinc-500">
                      <Star size={12} />
                      {repo.stargazers_count}
                    </span>
                  )}
                  {repo.forks_count > 0 && (
                    <span className="flex items-center gap-1 text-xs text-zinc-500">
                      <GitFork size={12} />
                      {repo.forks_count}
                    </span>
                  )}
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
