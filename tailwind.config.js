/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontfamily: {
        poppins: ["Poppins", "serif"],
      },
      backgroundImage: {
        footer: "url('/src/assets/assets/leaf.jpg')",
        banner1: "url('/src/assets/assets/rainforest-waterfall.jpg')",
        banner2: "url('/src/assets/assets/snowy-mountain.jpg')",
        banner3: "url('/src/assets/assets/coral-reef.jpg')",
        banner4: "url('/src/assets/assets/desert-camel.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
};
