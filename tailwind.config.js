module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: (theme) => ({
        "90p": "90%",
        "95p": "95%",
      }),
      backgroundImage: (theme) => ({
        "carousel-1": "url('/img/slide1.jpg')",
        "carousel-2": "url('/img/slide2.jpg')",
        "carousel-3": "url('/img/slide3.jpg')",
        "contact-bg": "url('/img/contact_bg.jpg')",
      }),
      margin: (theme) => ({
        "ml-26": "margin-left:7rem",
        "mr-26": "margin-right:7rem",
        "mx-26": "margin-left:7rem, margin-right:7rem",
        "my-26": "margin-top:7rem, margin-bottom:7rem",
        "m-26":
          "margin-left:7rem, margin-right:7rem, margin-top:7rem, margin-bottom:7rem",
      }),
      fontFamily: {
        sans: ["Gotham TR", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {
      padding: ["hover"],
      outline: ["focus", "hover"],
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    // ...
  ],
};
