/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{


        myDarkBlack:'rgba(161, 161, 170, 1)',
        myDarkBlackOp:'rgba(161, 161, 170, .2)',
        myDarkBlackMoreOp:'rgba(161, 161, 170, .4)',
        myDarkBlackMoreOpXl:'rgba(161, 161, 170, .6)',
        myDark:'#0A0A0F',


        myWhite:'#FFFFFF',


        myPurple:'#B15EFA',
        myDarkPurple:'#b148d2',
        myLightPurple:'#e79aff',
        myHoverPurple: '#691883',


        myDarkBlue:'#5369FA',
        myBlue:'#8294FA',
        myLightBlue: '#ADD8E6',


        myLightGray: '#ECECEC',





        myVacCol1: 'rgba(255, 138, 119, .4)',
        myVacCol2: 'rgba(255, 221, 187, .4)',
        myVacCol3: 'rgba(224, 246, 229, .4)',
        myVacCol4: 'rgba(209, 228, 254, .4)',
        myVacCol5: 'rgba(219, 205, 255, .4)',
        myVacCol6: 'rgba(219, 205, 255, .4)',
        myVacCol7: 'rgba(255, 221, 187, .4)',
        myVacCol8: 'rgba(249, 225, 147, .4)',
        myVacCol9: 'rgba(209, 228, 254, .4)',

      }
    },
  },
  plugins: [],
}