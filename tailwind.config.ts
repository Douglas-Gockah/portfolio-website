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
        bg: 'var(--bg)',
        bg2: 'var(--bg2)',
        bg3: 'var(--bg3)',
        border: 'var(--border)',
        border2: 'var(--border2)',
        t1: 'var(--t1)',
        t2: 'var(--t2)',
        t3: 'var(--t3)',
        accent: 'var(--accent)',
        green: 'var(--green)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
      },
      maxWidth: {
        narrow: '540px',
        medium: '720px',
        wide: '900px',
      },
      borderRadius: {
        pill: '100px',
        card: '16px',
        'card-lg': '24px',
        module: '12px',
      },
    },
  },
  plugins: [],
};

export default config;
