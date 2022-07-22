/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ffffff",
          secondary: "#F5F6F8",
          accent: "#37cdbe",
          neutral: "#3d4451",
          
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
