// src/app/components/shared/Navigation.tsx
import Link from 'next/link';

interface NavigationItem {
  text: string;
  href: string;
  current: boolean;
}

interface NavigationProps {
  items: NavigationItem[];
}

export const Navigation: React.FC<NavigationProps> = ({ items }) => (
  <nav className="flex justify-center gap-8 fixed bottom-8 left-1/2 transform -translate-x-1/2 backdrop-blur-md bg-gray-900/30 p-2 rounded-2xl border border-gray-700/20 shadow-xl" role="navigation" aria-label="Main navigation">
    {items.map(({ text, href, current }) => (
      <Link
        key={text}
        href={href}
        className={`relative px-8 py-2.5 group focus:outline-none focus:ring-2 focus:ring-blue-400/50 rounded-xl transition-all duration-300 ${
          current
            ? 'text-white bg-gradient-to-br from-purple-500/20 to-blue-500/5 shadow-lg border border-blue-400/20'
            : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
        }`}
        aria-current={current ? 'page' : undefined}
      >
        {text}
        <div className={`absolute inset-0 rounded-xl transition-opacity duration-300 ${
          current 
            ? 'opacity-100 bg-blue-400/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]' 
            : 'opacity-0 group-hover:opacity-100 bg-gradient-to-b from-white/5 to-transparent'
        }`} />
      </Link>
    ))}
  </nav>
);
