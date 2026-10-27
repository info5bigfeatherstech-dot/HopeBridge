/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#14532D", dark: "#103F23", light: "#EAF2EC" },
        amber: { DEFAULT: "#F59E0B", dark: "#B45309", light: "#FEF3C7" },
        canvas: { DEFAULT: "#FFFFFF", muted: "#F7F7F8" },
        ink: { DEFAULT: "#17221B", muted: "#526057" }
      },
      fontFamily: {
        display: ['"Neue Montreal"', '"Inter Tight"', "sans-serif"],
        body: ["Poppins", "sans-serif"]
      },
      boxShadow: { card: "0 8px 30px rgba(20, 83, 45, 0.07)" },
      maxWidth: { content: "1280px" }
    }
  },
  plugins: []
};
