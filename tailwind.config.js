/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      height: {
        155: "620px",
      },
      spacing: {
        160: "640px",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
