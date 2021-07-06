module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "color-image-comment": "#404040",
        "main-blue": "#137C83",
        "main-green": "#009D10",
        "default-white": "#EBEBEB",
      },

      width: {
        "128": "32rem",
        "192": "48rem"
      },

      borderColor: {
        "main-blue": "#137C83",
        "main-green": "#009D10",
      },

      backgroundColor: {
        "main-blue": "#137C83",
        "main-green": "#009D10",
        "main-blue-lighter": "#1DAEB8"
      },

      backgroundImage: () => ({
        "homepage-introduction": "url('/images/homepage/blogs-introduction.jpg')"
      }),

      keyframes: {
        headerResize: {
          "0%": {left: 0, transform: "translateX(0%)", borderRadius: "0rem", width: "100%"},
          "100%": {left: "50%", transform: "translateX(-50%)", borderRadius: "0 0 1.5rem 1.5rem", width: "32rem"}
        },

        headerResizeOpposite: {
          "0%": {left: "50%", transform: "translateX(-50%)", borderRadius: "0 0 1.5rem 1.5rem", width: "32rem"},
          "100%": {left: 0, transform: "translateX(0%)", borderRadius: "0rem", width: "100%"},
        },
      },

      animation: {
        headerResize: "headerResize 0.5s ease-in-out 0s 1 normal forwards",
        headerResizeOpposite: "headerResizeOpposite 0.5s ease-in-out 0s 1 normal forwards",
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ["hover"]
    },
  },
  plugins: [],
}
