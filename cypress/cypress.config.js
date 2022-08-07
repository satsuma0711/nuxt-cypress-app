const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: "**/tests/*.spec.js",
    supportFile: false,
    video: true,
    videoUploadOnPasses: false,
    defaultCommandTimeout: 10000
  }
})
