import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#0F172A",
        "obsidian-green": "#0F2A1F",
        platinum: "#F8FAFC",
        sand: "#F1F5F9",
        emerald: "#10B981",
        cyan: "#06B6D4",
        "muted-text": "#94A3B8",
        "card-bg": "#1E293B",
      },
      fontFamily: {
        display: ["Plus Jakarta Sans", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #0F172A 0%, #0F2A1F 100%)",
        "card-gradient": "linear-gradient(135deg, #1E293B 0%, #0F2A1F 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
