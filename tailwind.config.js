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
          'from': '#134e4a',
          'via': '#bef264',
          'to': '#fb923c',
        },
        'project-colors': {
          'from': '#610F40',
          'via' : '#164e63',
          'to': '#164e63',
        },
        'contact-colors': {
          'from': '#f97316',
          'via': '#7f1d1d',
          'to': '#7f1d1d'
        },
        'resume-colors': {
          'from': '#8820A6',
          'via': '#E67194',
          'to': '#F7CC18'
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
        // xs: "320px",
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      }
    }
  },
  plugins: [],
}

