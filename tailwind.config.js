module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  
  safelist: [
    'bg-${props.color}',
    'text-${props.color}'
  ],
  theme: {
    fontFamily: {
      'antonio': 'Antonio',
      'spartan': 'League Spartan'
  },
    extend: {
      colors: {
        'navyBlue': '#070724',
        'darkGray': '#38384F',
        'lightGray': '#838391',
        'teal': '#419EBB',
        'yellow': '#EDA249',
        'purple': '#6F2ED6',
        'lightRed': '#D14C32',
        'darkRed': '#D83A34',
        'orange': '#CD5120',
        'green': '#1EC2A4',
        'blue': '#2D68F0',
      }
  },
  plugins: [],
  }
}