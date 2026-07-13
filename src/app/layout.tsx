import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://jaywapp.github.io'),
  title: 'Junyoung Park',
  description: 'Software developer focused on algorithm performance and software architecture.',
  icons: { icon: '/favicon.svg' },
  alternates: { canonical: '/ko/' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
