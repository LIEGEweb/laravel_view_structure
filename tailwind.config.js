module.exports = {
  content: [
      "./resources/**/*.blade.php",
      "./resources/**/*.js",
      "./resources/**/*.vue",
  ],
  theme: {
    extend: {
        margin: {
            '500': '2000px',
        },
        transitionProperty: {
            'spacing': 'margin, padding',
        }
    },
  },
  plugins: [],
}
