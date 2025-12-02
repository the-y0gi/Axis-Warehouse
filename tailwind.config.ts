import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}", 
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#050505",       // Main Background
          dark: "#0a0a0a",        // Secondary Background
          surface: "#1a1a1a",     // Card/Bento Background
          copper: {
            DEFAULT: "#c08e6e",   // Main Accent Color 
            light: "#d6a485",     // Gradient Start
            dark: "#8c5e45",      // Gradient End
          },
          text: {
            primary: "#ffffff",
            secondary: "#a1a1aa", // Muted text
          }
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'], 
      },
      backgroundImage: {
        'copper-gradient': 'linear-gradient(135deg, #d6a485 0%, #b07d5b 100%)',
      },
      keyframes: {
      fadeInUp: {
        '0%': { opacity: '0', transform: 'translateY(20px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
      }
    },
    animation: {
      'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
    }
    },
  },
  plugins: [],
};
export default config;