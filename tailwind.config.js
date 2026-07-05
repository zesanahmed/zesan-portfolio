/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#14181F",
        paper: "#F7F6F3",
        surface: "#FFFFFF",
        navy: {
          DEFAULT: "#1C2B4A",
          light: "#2C4A7C",
          dark: "#101B30",
        },
        bronze: {
          DEFAULT: "#B8863B",
          light: "#D3A461",
          dark: "#8F6A2C",
        },
        slate: {
          DEFAULT: "#6B7280",
          light: "#9CA3AF",
        },
      },
      fontFamily: {
        display: ["Sora", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
      maxWidth: {
        content: "1180px",
      },
    },
  },
  plugins: [],
};
