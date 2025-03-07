module.exports = {
    plugins: {
      autoprefixer: {},
      '@fullhuman/postcss-purgecss': {
        content: [
          './components/**/*.{vue,js,ts}',
          './layouts/**/*.vue',
          './pages/**/*.vue',
          './plugins/**/*.{js,ts}',
          './nuxt.config.{js,ts}',
        ],
        safelist: {
          standard: [/^v-/, /^bg-/, /^text-/,  /^theme--light$/], // Pastikan class Vuetify tidak terhapus
        },
        defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
      },
    },
  }
  