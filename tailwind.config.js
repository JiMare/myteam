/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#F67E7E",
        white: "#fff",
        "light-blue": "#79C8C7",
        "dark-blue": "#2C6269",
        "dark-green": " #002529",
        "sacramento-green": "#012F34",
        "jungle-green": "#004047",
        green: "#014E56",
      },
    },
    screens: { xl: "1440px", md: "768px" },
  },
  plugins: [],
};
