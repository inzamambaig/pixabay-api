const tailwindcss = require("tailwindcss");

module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.jsx"],
  plugins: [tailwindcss("./tailwind.js"), require("autoprefixer")],
};
