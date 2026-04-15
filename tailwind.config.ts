import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./server/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        vync: {
          background: "#0f172a",
          surface: "#1e293b",
          brand: "#10b981",
          accent: "#3b82f6",
          foreground: "#f1f5f9",
          muted: "#94a3b8",
          border: "#334155",
          status: {
            lead: "#64748b",
            proposal: "#eab308",
            execution: "#3b82f6",
            delivery: "#10b981",
            completed: "#22c55e",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
