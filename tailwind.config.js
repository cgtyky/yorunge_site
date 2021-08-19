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
  plugins: [],
};
