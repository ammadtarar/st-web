 // vue.config.js
 const path = require("path");
 module.exports = {
  outputDir: path.resolve(__dirname, "../dist"),
  assetsDir: "./",
    chainWebpack: config => {
      config
      .plugin('html')
      .tap(args => {
        args[0].title = 'Sawa Technologies'
        return args
      })
    }
  }