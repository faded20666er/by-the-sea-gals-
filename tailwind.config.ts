import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Beach-inspired color palette
        'sand': '#F4E4C1',
        'sand-light': '#FAF0E6',
        'ocean': '#006994',
        'ocean-light': '#4A90D9',
        'ocean-dark': '#004466',
        'wave': '#7EC8E3',
        'wave-light': '#B0E0E6',
        'sunset': '#FF6B6B',
        'sunset-light': '#FF8E8E',
        'sunset-dark': '#CC4444',
        'coral': '#FF7F50',
        'coral-light': '#FFA07A',
        'seafoam': '#98FB98',
        'seafoam-dark': '#66CDAA',
        'driftwood': '#8B7355',
        'driftwood-light': '#A0896C',
        'night-sky': '#1a1a2e',
        'night-sky-light': '#16213e',
      },
      fontFamily: {
        'display': ['"Bebas Neue"', 'cursive'],
        'body': ['"Poppins"', 'sans-serif'],
        'accent': ['"Pacifico"', 'cursive'],
      },
      backgroundImage: {
        'hero-pattern': "url('/images/hero-bg.jpg')",
        'wave-pattern': "url('/images/wave-bg.svg')",
      },
      animation: {
        'wave': 'wave 8s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(5deg)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(0, 105, 148, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(0, 105, 148, 0.8)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
