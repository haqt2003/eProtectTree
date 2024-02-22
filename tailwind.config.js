/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        black: "#000",
        gray: "rgba(255, 255, 255, 0.05)",
        day: "#818451",
        night: "#4B4B4B",
      },
      animation: { "animate-bounce": "bounce 3s linear infinite" },
      keyframes: {
        bounce: {
          "0%, 100%": { transform: "translateY(-3%)" },
          "50%": { transform: "translateY(0)" },
        },
      },
      spacing: {},
    },
    fontSize: {
      inherit: "inherit",
    },
  },
  plugins: [],
};
