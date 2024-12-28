import './globals.css';
import type { Metadata, Viewport } from 'next'; // Add Viewport import
import { Inter } from 'next/font/google';

// Optimize font loading with subset and display settings
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap', // Ensures text remains visible during webfont load
  variable: '--font-inter', // Enable CSS variable for font
});

// Separate viewport configuration
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0f172a', // Moved from metadata to viewport
};

// Enhanced metadata without viewport and themeColor
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
          {/* Add scroll smoothing and better text rendering */}
          <div className="smooth-scroll">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}