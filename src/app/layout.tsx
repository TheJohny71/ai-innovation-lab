import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { Navigation } from './components/shared/Navigation';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0f172a',
};

export const metadata: Metadata = {
  title: 'AI Innovation Lab',
  description: 'Transforming legal practice through AI innovation',
  keywords: 'AI, Legal Tech, Innovation, Legal Practice, Automation',
  authors: [{ name: 'TheJohny71' }],
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        <main className="min-h-screen bg-slate-900 text-white relative overflow-x-hidden">
          <div className="smooth-scroll">
            {children}
          </div>
          <Navigation />
        </main>
      </body>
    </html>
  );
}
