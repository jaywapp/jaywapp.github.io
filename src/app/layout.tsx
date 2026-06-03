import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Junyoung Park',
  description: 'Software developer focused on algorithm performance and software architecture.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
