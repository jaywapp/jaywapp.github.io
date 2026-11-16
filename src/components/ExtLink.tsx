import type { ReactNode } from 'react';

// A link that leaves the site opens in a new tab; mailto and in-site links do not.
export default function ExtLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  const external = /^https?:\/\//.test(href) && !href.startsWith('https://jaywapp.com/');
  return (
    <a href={href} className={className} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
      {children}
    </a>
  );
}
