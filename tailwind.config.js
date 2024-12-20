/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inconsolata Variable", "monospace"],
    },
    colors: {
      neutral: {
        0: "#ffffff",
        300: "#D1D0D5",
        500: "#8784A5",
        700: "#4B4869",
        900: "#0D082D",
      },
      orange: {
        500: "#F57463",
        700: "#E1604F",
      },
    },

    backgroundImage: {
      "orange-gradient": "linear-gradient(90deg, #F37362 0%, #FFF 100%)",
    },
    spacing: {
      0: "0",
      "025": "2px",
      "050": "4px",
      "075": "6px",
      100: "8px",
      150: "12px",
      200: "16px",
      250: "20px",
      300: "24px",
      400: "32px",
      500: "40px",
      600: "48px",
      800: "64px",
      1000: "80px",
    },
    borderRadius: {
      0: "0",
      4: "4px",
      6: "6px",
      8: "8px",
      12: "12px",
      16: "16px",
      20: "20px",
      24: "24px",
      full: "999px",
    },
    extend: {},
  },
  plugins: [],
};
