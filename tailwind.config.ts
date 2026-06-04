import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#2F6BFF",
          accent: "#4C8DFF",
          background: "#F7F9FC",
          surface: "#FFFFFF",
          text: "#1A2233",
          muted: "#5B6475",
          border: "#E6EAF2",
          success: "#4C9F70",
        },
      },
      boxShadow: {
        soft: "0 18px 50px rgba(26, 34, 51, 0.08)",
        card: "0 12px 32px rgba(26, 34, 51, 0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
