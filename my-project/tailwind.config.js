/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      lg:'1024px',
      xl:'1280px',
    },
    extend: {
       colors:{
        brightRed: 'hsl(12, 88%, 59%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        backgrounds: 'hsl(227, 41%, 18%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
        verylightblue:'hsl(180, 79%, 72%)',
        verylightsilver:'hsl(0, 2%, 88%)',
        backgroundback:'hsl(20, 2%, 30%)',
        borderback: 'hsl(0, 1%, 10%)',
        navbars:'hsl(224, 41%, 7%)',
      },
      fontFamily:{
        young:['Young'],
        dancing:['Dancing'],
      }
    },
  
  },
  plugins: [],
}

