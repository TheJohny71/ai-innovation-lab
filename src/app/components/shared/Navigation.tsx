'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export interface NavigationItem {
  text: string;
  href: string;
}

export interface NavigationProps {
  items?: NavigationItem[];
}

export const Navigation: React.FC<NavigationProps> = ({ items }) => {
  const pathname = usePathname();
  
  const defaultItems = [
    { text: 'Welcome', href: '/' },
    { text: 'Solutions', href: '/solutions' },
    { text: 'Disruption', href: '/disruption' },
    { text: 'Mindset', href: '/mindset' }
  ];

  const navigationItems = items || defaultItems;

  return (
    <nav 
      className="flex justify-center gap-8 fixed bottom-8 left-1/2 transform -translate-x-1/2 backdrop-blur-md bg-gray-900/30 p-2 rounded-2xl border border-gray-700/20 shadow-xl z-50" 
      role="navigation"
    >
      {navigationItems.map(({ text, href }) => {
        const isCurrent = pathname === href;
        
        return (
          <Link
            key={text}
            href={href}
            className={`relative px-8 py-2.5 group focus:outline-none focus:ring-2 focus:ring-blue-400/50 rounded-xl transition-all duration-300 ${
              isCurrent
                ? 'text-white bg-gradient-to-br from-purple-500/20 to-blue-500/5 shadow-lg border border-blue-400/20'
                : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
            }`}
            aria-current={isCurrent ? 'page' : undefined}
          >
            {text}
            <div 
              className={`absolute inset-0 rounded-xl transition-opacity duration-300 ${
                isCurrent 
                  ? 'opacity-100 bg-blue-400/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]' 
                  : 'opacity-0 group-hover:opacity-100 bg-gradient-to-b from-white/5 to-transparent'
              }`} 
            />
          </Link>
        );
      })}
    </nav>
  );
};
