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
        // The "Dark Soul" Palette
        'cyber-black': '#020204', // Deeper than standard black
        'cyber-gray': '#121214',  // For card backgrounds
        'neon-cyan': '#00f3ff',   // Primary accent (Intelligence)
        'neon-purple': '#bc13fe', // Secondary accent (Creative)
        'matrix-green': '#00ff41', // Success states
      },
      fontFamily: {
        mono: ['var(--font-jetbrains)'], // Connects to the layout setup
      },
    },
  },
  plugins: [],
};
export default config;