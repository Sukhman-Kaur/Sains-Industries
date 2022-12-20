module.exports = {
    style: {
      eslint: {
        enable: false,
      },
      postOptions: {
        plugins: [
          require('tailwindcss'),
          require('autoprefixer'),
        ],
      },
    },
  }