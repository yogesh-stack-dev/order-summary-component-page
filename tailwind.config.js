/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      colors: {
        //  Primary
        PaleBlue: "hsl(225, 100%, 94%)",
        BrightBlue: "hsl(245, 75%, 52%)",

        // Neutral
        VeryPaleBlue: "hsl(225, 100%, 98%)",
        DesaturatedBlue: "hsl(224, 23%, 55%)",
        DarkBlue: "hsl(223, 47%, 23%)",
      },
        backgroundImage: {
          'bgimg1': "url('/images/pattern-background-desktop.svg')",
          'bgimg2': "url('/images/pattern-background-mobile.svg')",
        }
    },
  },
  plugins: [],
}

