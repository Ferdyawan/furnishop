export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'furni-green': '#2D6A66',
        'furni-gold': '#E5B667',
        'furni-dark': '#23262F',
        'furni-gray': '#F9F9F9',
      },
      fontFamily: {
        sans: ['Saira', 'sans-serif'],
      },
      boxShadow: {
        'card-strong': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
};
