module.exports = {
  extends: ["eslint:recommended", "plugin:react/recommended"],
  plugins: ["react"],
  rules: {
    // React ve JSX kurallarını buraya ekleyebilirsin
    "react/prop-types": "warn", // PropTypes zorunluluğu (uayrı olarak verebilir veya off yapabilirsin)
    "react/react-in-jsx-scope": "off", // Yeni React sürümlerinde gerekmiyor
  },
  settings: {
    react: {
      version: "detect", // React sürümünü otomatik algıla
    },
  },
};
