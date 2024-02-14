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
        primary: "#f7f7f7",
      },
      colors: {
        primary: "#24272c",
        secondary: "#f75d34",
        secondaryLight: "#f7724e",
        gray1: "rgba(36,39,44,.7)",
        gray2: "rgba(36,39,44,.5)",
        red: "#ee4b2b",
        blue: "#2176ae",
        green: "#6bad23",
        // shadow: 0 8px 8px 0 rgba(247, 93, 52, .2);
      },
      fontSize: {
        medium: "14px",
      },
    },
  },
  plugins: [],
};
