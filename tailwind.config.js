const withMT = require("@material-tailwind/html/utils/withMT");
 
module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {},
  plugins: [],
});

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  
    extend: {
      colors:{
        col1: "#E97451",
        swhite:"#fff8e8",
        steal:"#17BEBB",
        sblack:"#39393a",
        col2:"#D56A4A",
        col3:"#A83614"
      },
      fontFamily:{
        'montserrat': ['Montserrat'],
        'playfair':['Playfair Display'],
        'opensans' :['Open Sans'],
        'rob':['Roboto'],
        'lato':['Lato']
      },
      screens: {
        
        'xs': '300px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--gradient-color-stops))',
      }
    }
  },
  plugins: [],
};
