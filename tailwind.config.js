module.exports = {
  purge: ['src/**/*.{js,jsx,ts,tsx}', 'public/index.html'], 
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],  
  theme: {
    extend: {
      colors: {
        blueimgs100: '#3973E3',
        lightgreen: '#00A19D',
        limegreen: '#105652',
        green700 : '#0A97B0',       
        bluenavbar900 : '#0C4A6E',
        sky800: '#075985',     
        },
    },
  },
  plugins: [],
}
