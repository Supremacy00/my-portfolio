const { Work_Sans, Poppins } = require("next/font/google");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "350px",
        sm: "680px",
        md: "768px",
        lg: "1074px",
        xl: "1199px",
        xxl: "1300px",
        "2xl": "1536px",
      },
      colors: {
        primary: "#EFB90B",
        secondary: "#222429",
        light: "#323232",
        dark: "#FFFFFFE6",
        light2: "#646464",
        dark2: "#FFFFFF8C",
        custom1: "#F3F6F6",
        custom2: "#2D2F34",
        custom3: "#A6A6A6",
        custom4: "#1773EA",
        custom5: "#1C9CEA",
        custom6: "#E12A72",
        custom7: "#44566C",
        custom8: "#E3E3E3",
        custom9: "#6AB5B9",
        custom10: "#333333",
        custom11: "#EEEEEE",
        custom12: "#3E4148",
        custom13: "#282A2E",
        custom14: "#E6E8E8",
      },
      fontFamily: {
        "IBM" : ['IBM Plex Sans', 'sans-serif'],
        "lekton": ['Lekton', 'sans-serif'],
      },
      backgroundImage: {
        'light-background': "url('/assets/images/whitebg.jpg')",
        'dark-background': "url('/assets/images/darkbg.jpg')",
      },
      transitionProperty: {
        multiple: "width , height , backgroundColor , border-radius"
      },
      aspectRatio: {
        '2/1': '2 / 1',
        '200/120': '200/120'
      },
    },
  },
  darkMode: "class",
  plugins: [
    require('tailwind-scrollbar'),
],
};
