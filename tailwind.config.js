/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        custom: {
          primary: "#162082",
          darkGray: "#666666",
          gray: "#f8fafc",
          lightGray: "#dde2e4",
          inactiveGray: "#eceded",
          otherGray: "#c3c7ce",
          white: "#ffffff",
        },
      },
    },
  },
  plugins: [],
};
