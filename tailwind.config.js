/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      colors: {
        'main': '#f15a29',
        'mainDark': '#851f00',
        'mainLight': '#ffcfbe',
        'bgDarker': '#00031a',
        'bgDark': '#000321',
        'bgLessDark': '#12142b'
      }
    },
  },
  plugins: [],
}

