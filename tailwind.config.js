/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
    width : {
      "21" : "83",
      "42" : "168px",
      "52" : "65.55208%",
    },
    gap :{
      "13" : "50px"
    },
    spacing : {
      "18" : "70px",
      "41" : "170px",
      "22" : "20%",
      "15" : "60px",
      "63" : "250px",
      "53" : "217px",
      "61" : "64.74%",
      "247" : "68%",
      "81" : "330px",
      "267" : "5%",
    },
      colors: {
        "primary-color" : "#FA8B02",
        "my-gray" : "#333333",
      },
    },
  },
  plugins: [],
};
