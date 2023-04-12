/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('/assets/hero-image.jpg')",
      },
      colors:{
        dark:"#131313",
        darkAlpha:"#1C1C1C",
        primary:"#CC1A1A",
        white:"#CC1A1A"
      }
    }
  },
  plugins: [],
}