/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brandCol1: "#FFA500",
        brandCol2: "#FFD700",
        brandCol3: "#FF8C00",
        brandCol4: "#FF4500",
      },
    },
  },
  plugins: [],
};
