/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        custom: {
          primary: "#162082",
          secondary: "#e9eaf6",
          50: "#f9fafb",
        },
      },
    },
  },
  plugins: [],
};
