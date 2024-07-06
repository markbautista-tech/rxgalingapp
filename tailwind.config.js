/** @type {import('tailwindcss').Config} */
module.exports={
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
      extend: {
        fontFamily: {
          'roboto': ['Roboto', 'sans-serif'],
        },
        screens: {
          'mob': '480px',
          'pro': '640px',
          'tab': '768px',
          'desk': '1024px',
          'xl': '1280px',
          '2xl': '1536px',
        },
        colors: {
          'purple': '#8b2fc9',
          'darkerpurple':'#2f184b',
          'lightpurple':'#9b72cf',
          'darkpurple':'#6818a5'
        },
        animation: {
          'slide-right': 'slide-right 1s ease-in-out',
        },
      },
    },
    plugins: [],
  }
  
  