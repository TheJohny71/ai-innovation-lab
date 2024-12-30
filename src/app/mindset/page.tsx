// src/app/mindset/page.tsx
'use client';
import { Navigation } from '../components/shared/Navigation';
import { usePathname } from 'next/navigation';

export default function MindsetPage() {
  const pathname = usePathname();
  const navigationItems = [
    { text: 'Welcome', href: '/', current: pathname === '/' },
    { text: 'Solutions', href: '/solutions', current: pathname === '/solutions' },
    { text: 'Disruption', href: '/disruption', current: pathname === '/disruption' },
    { text: 'Mindset', href: '/mindset', current: pathname === '/mindset' }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.03)_0%,rgba(0,0,0,0)_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(56,189,248,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.01)_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      <div className="relative max-w-7xl mx-auto px-8 py-12">
        <div className="mb-12 max-w-5xl">
          <h1 className="text-7xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 inline-block text-transparent bg-clip-text">
              AI Mindset
            </span>
          </h1>
          <p className="text-xl text-gray-400">
            Developing the right mindset for AI innovation
          </p>
        </div>
        
        {/* Add your mindset content here */}
      </div>

      <Navigation items={navigationItems} />
    </div>
  );
}
