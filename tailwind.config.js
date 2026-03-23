/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: '#050505',
          light: '#0a0a0a',
          card: '#0d0d0d',
        },
        gold: {
          DEFAULT: '#D4AF37',
          dim: '#b8962e',
          glow: 'rgba(212, 175, 55, 0.15)',
        },
        red: {
          kryp: '#C1121F',
          glow: 'rgba(193, 18, 31, 0.2)',
        },
        white: {
          DEFAULT: '#F5F5F5',
          muted: 'rgba(255,255,255,0.6)',
          faint: 'rgba(255,255,255,0.1)',
        },
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-red': 'glowRed 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        glowRed: {
          '0%': { boxShadow: '0 0 10px rgba(193,18,31,0.2)' },
          '100%': { boxShadow: '0 0 30px rgba(193,18,31,0.5), 0 0 60px rgba(193,18,31,0.2)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'grid-pattern': `linear-gradient(rgba(212,175,55,0.03) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(212,175,55,0.03) 1px, transparent 1px)`,
      },
      backgroundSize: {
        'grid': '60px 60px',
      },
    },
  },
  plugins: [],
}
