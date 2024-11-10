/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#312ECB",
        secondry: "#007AFF",
        main:"32aae4",
      },
      fontFamily: {
        nunito: ['Nunito Sans', 'sans-serif'], 
      },
      screens: {
        'xsm': '425px' , // Custom screen for 425px - 640px
      },
    },
  },
  plugins: [],
};
