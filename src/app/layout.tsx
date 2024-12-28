import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

// Optimize font loading with subset and display settings
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap', // Ensures text remains visible during webfont load
  variable: '--font-inter', // Enable CSS variable for font
});

// Enhanced metadata
export const metadata: Metadata = {
  title: 'AI Innovation Lab',
  description: 'Transforming legal practice through AI innovation',
  keywords: 'AI, Legal Tech, Innovation, Legal Practice, Automation',
  authors: [{ name: 'TheJohny71' }],
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#0f172a', // Matches bg-slate-900
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
          {/* Add scroll smoothing and better text rendering */}
          <div className="smooth-scroll">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}