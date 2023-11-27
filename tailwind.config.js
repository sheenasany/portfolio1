/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      gradientColorStops: {
        'logo-colors': {
          'from': '#f59e0b',
          'via': '#115e59',
          'to': '#831843',
        },
        'about-colors': {
          'from': '#fed7aa',
          'via': '#fca5a5',
          'to': '#4c1d95',
        },
        'project-colors': {
          'from': '#134e4a',
          'via': '#eab308',
          'to': '#6ee7b7',
        },
        'contact-colors': {
          'from': '#f97316',
          'via': '#7f1d1d',
          'to': '#7f1d1d'
        },
      },
    },
    fontFamily: {
      Nunito: ["Nunito", "sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        xs: "320px",
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      }
    }
  },
  plugins: [],
}

