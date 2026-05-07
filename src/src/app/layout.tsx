import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import { TopBar } from '@/components/layout/TopBar';
import { BottomNav } from '@/components/layout/BottomNav';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Douglas Gockah — Product Designer',
  description:
    'UI/UX Designer crafting intuitive digital experiences for enterprise platforms, payment systems, and brand identities.',
  openGraph: {
    title: 'Douglas Gockah — Product Designer',
    description:
      'UI/UX Designer crafting intuitive digital experiences for enterprise platforms, payment systems, and brand identities.',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: 'Douglas Gockah Portfolio',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans min-h-screen flex flex-col">
        <TopBar />
        <main className="flex-1 w-full max-w-narrow mx-auto px-4 pb-24 pt-16">
          {children}
        </main>
        <BottomNav />
      </body>
    </html>
  );
}
