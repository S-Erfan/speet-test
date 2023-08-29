/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
        },
      },
      animation: {
        'pingSlow': 'pingSlow 3s linear infinite',
      },
      keyframes: {
        pingSlow: {
          "75%, 100%": {
            transform:"scale(1.2)",
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: [],
};
