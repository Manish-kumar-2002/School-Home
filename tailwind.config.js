/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      fontFamily:{
        "custom":["Poppins", "system-ui"]
      },
      colors:{
        "primary":"#2b3c53",
      },
      backgroundColor:{
        "bgPrimary":"#2b3c53",
      },
      backgroundImage:{
        'bar-icon': "url('../images/bar-icon.png')",
        'search-icon' : "url('../images/search-icon.png')"
      },
      backgroundSize:{
        "29px":"29px"
      },
      screens: {
        'tablet': '768px',
        'laptop': '992px',
        'desktop': '1280px',
      },
    },
  },
  plugins: [],
}

