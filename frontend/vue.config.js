const { defineConfig } = require('@vue/cli-service')
const static_dir = '../src/config/static'
const template_path = '../templates/base.html'

module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: process.env.NODE_ENV === 'production' ? static_dir : 'dist/',
  indexPath: process.env.NODE_ENV === 'production' ? template_path : 'index.html',
  publicPath: process.env.NODE_ENV === 'production' ? '/static' : '/',
  assetsDir: '',
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/assets/styles/variables.scss";@import "@/assets/styles/selectors.scss";`
      }
    }
  },
  devServer: {
    proxy: {
      'api/': {
        'target': 'http://localhost:8000/',
      },
      'media/': {
        'target': 'http://localhost:8000/',
      },
    }
  }
})
