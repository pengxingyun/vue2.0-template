// const path = require('path')
module.exports = {
    // 全局less变量
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
        // patterns: [path.resolve(__dirname, './src/assets/less/1.less')]
        patterns: []
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'https://www.baidu.com',
        ws: true,
        changeOrigin: true
      }
    }
  }
};