import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        purple: {
          400: '#c084fc',
          500: '#a855f7',
        },
        emerald: {
          400: '#34d399',
          500: '#10b981',
          700: '#047857',
        },
        cyan: {
          400: '#22d3ee',
          500: '#06b6d4',
        },
        slate: {
          100: '#f1f5f9',
          300: '#cbd5e1',
          400: '#94a3b8',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        gray: {
          900: '#111827',
        },
        teal: {
          400: '#2dd4bf',
          500: '#14b8a6',
        },
        blue: {
          400: '#60a5fa',
          500: '#3b82f6',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'gradient': 'gradient 15s ease infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '.5' },
        },
      },
    },
  },
  plugins: [],
};

export default config;