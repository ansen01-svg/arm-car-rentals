/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#eff3f5",
      },
      colors: {
        primary: "#666",
        secondary: "#1f9990",
        hover: "#1b8b84",
      },
      fontSize: {
        medium: "14px",
      },
    },
  },
  plugins: [],
};
