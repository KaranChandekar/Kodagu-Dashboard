/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-blue-98": "#F7F8FA",
        "gray-blue-80": "#ADB8CC",
        "gray-blue-70": "#7D8FB3",
        "gray-blue-60": "#6B7A99",
        "gray-blue-50": "#4D5E80",
        blue: "#3361FF",
      },
    },
  },
  plugins: [],
};
