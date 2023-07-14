/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "search-background": "url(/world-map.png)",
      },
      colors: {
        primary: "#5908d8",
        primaryDarker: "#312a4f",
        primaryLighter: "#ddd2ea",
        grayPrimary: "#717171",
        grayLighter: "#d2d2d2",
      },
      textColor: {
        grayPrimary: "#717171",
        grayLighter: "#d2d2d2",
      },
    },
  },
  plugins: [],
};
