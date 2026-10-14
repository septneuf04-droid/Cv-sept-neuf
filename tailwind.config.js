/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        encre: "#1C1C1E",
        corail: {
          DEFAULT: "#E8634A",
          dark: "#D4523A",
          light: "#FFA08C",
          glow: "rgba(232, 99, 74, 0.25)"
        },
        neige: "#FAFAFA",
        graphite: "#2D2D2D",
        cardbg: "#FFFFFF",
        muted: "#6B7280"
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
        display: ['"Syne"', 'sans-serif'],
        grotesk: ['"Space Grotesk"', 'sans-serif'],
      },
      borderRadius: {
        '2rem': '2rem',
        '2.5rem': '2.5rem',
        '3rem': '3rem',
        '4rem': '4rem',
      },
      boxShadow: {
        'subtle': '0 10px 30px -10px rgba(28, 28, 30, 0.06)',
        'elevated': '0 20px 40px -15px rgba(28, 28, 30, 0.12)',
        'coral': '0 12px 35px -8px rgba(232, 99, 74, 0.35)',
      }
    },
  },
  plugins: [],
}
