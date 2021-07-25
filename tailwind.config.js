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
        "default-dark": "#272727",
        "post-date": "#4E4E4E"
      },

      width: {
        "128": "32rem",
        "192": "48rem"
      },

      height: {
        "65per": "65%",
        "20per": "20%",
        "15per": "15%"
      },

      maxHeight: {
        "128": "32rem"
      },

      borderColor: {
        "main-blue": "#137C83",
        "main-green": "#009D10",
      },

      backgroundColor: {
        "main-blue": "#137C83",
        "main-green": "#009D10",
        "main-blue-lighter": "#1DAEB8",
        "main-green-trans": "#009D1099"
      },

      backgroundImage: () => ({
        "homepage-introduction": "url('/images/homepage/blogs-introduction.jpg')"
      }),

      boxShadow: {
        "personal": "1px 1px 3px black"
      },

      gradientColorStops: {
        "main-blue-lighter": "#1DAEB8"
      },

      zIndex: {
        "-10": "-10"
      },

      keyframes: {
        spinner: {
          "0%": { transform: "rotate(0deg); border-top-color: #009D10;" },
          "100%": { transform: "rotate(360deg); border-top-color: #009D10;" }
        }
      },

      animation: {
        "spinner": "spinner 1s linear infinite"
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ["hover"],
      transform: ["hover"]

    },
  },
  plugins: [],
}
