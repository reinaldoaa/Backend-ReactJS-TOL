module.exports = {
  purge: ['src/**/*.{js,jsx,ts,tsx}', 'public/index.html'], 
//  content: ["./src/**/*.{html,js}"], 
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {      
            blueimgs100: '#3973E3',
            lightgreen: '#00A19D',
            limegreen: '#105652',
            green700 : '#0A97B0',       
            navbar900 : '#0C4A6E',
            sky800: '#075985',     
            },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
