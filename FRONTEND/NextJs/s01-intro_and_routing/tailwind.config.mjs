/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#FEAF00",
        navbarColor: "#F2EAE1",
        labelColor: "#6C6C6C",
        white: "#fff",
      },
    },
  },
  plugins: [],
};
