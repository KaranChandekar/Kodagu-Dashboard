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
        "gray-blue-95": "#EDEFF2",
        "gray-blue-80": "#ADB8CC",
        "gray-blue-70": "#7D8FB3",
        "gray-blue-60": "#6B7A99",
        "gray-blue-50": "#4D5E80",
        "orange-30": "#FF6633",
        "pink-40": "#E62E7B",
        "purple-30": "#8833FF",
        "teal-blue": "#33BFFF",
        yellow: "#FFCB33",
        blue: "#3361FF",
        purple: "#8833FF",
        green: "#29CC39",
      },
    },
  },
  plugins: [],
};
