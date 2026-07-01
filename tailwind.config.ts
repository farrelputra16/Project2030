import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Instrument Serif', 'serif'],
        body: ['Barlow', 'sans-serif'],
      },
      colors: {
        brand: {
          green: '#00ff88',
          'green-dark': '#00cc6a',
          'green-darker': '#009955',
          dark: '#0a0a0a',
          'dark-2': '#111111',
        },
      },
      borderRadius: {
        DEFAULT: '9999px',
      },
    },
  },
  plugins: [],
};

export default config;
