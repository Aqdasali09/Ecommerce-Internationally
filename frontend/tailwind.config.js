// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "50": "#eff6ff",
          "100": "#dbeafe",
          "200": "#bfdbfe",
          "300": "#93c5fd",
          "400": "#60a5fa",
          "500": "#3b82f6",
          "600": "#2563eb",
          "700": "#1d4ed8",
          "800": "#1e40af",
          "900": "#1e3a8a",
          "950": "#172554",
        },
      },
      spacing: {
        '128': '32rem', // Custom large spacing for layouts
        '144': '36rem',
      },
      screens: {
        '2xl': '1536px', // Larger screen breakpoint for ultra-wide displays
      },
      fontSize: {
        'xxs': '0.625rem', // Extra small font size
        '4.5xl': '2.5rem', // Custom intermediate font size for headings
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in forwards',
        "pulse-slow": "pulse 2s infinite", // Slow beating
        "spin-slow": "spin 3s linear infinite", // Slow spinning
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulse: {
          "0%, 100%": { transform: "scale(1)", opacity: 1 },
          "50%": { transform: "scale(1.1)", opacity: 0.8 }, // Pulsating effect
        },
      },
    },
  },
  plugins: [],
};
