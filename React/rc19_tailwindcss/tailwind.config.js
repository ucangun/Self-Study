/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    //! eğer tailwind'in default theme ayarları yerine kendimizinkini eklemek istemiyorsak mutlaka extend objesi içinde eklememiz gerekli yoksa tüm theme objesi değişir ve kendi eklediklerimiz dışındakileri kullanamayız.
    extend: {
      colors: {
        primary: "#891",
        blue: {
          950: "#17275c",
        },
      },
    },
  },
  plugins: [],
  darkMode: "selector",
};
