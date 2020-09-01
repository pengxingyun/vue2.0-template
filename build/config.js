module.exports = {
    dev: {
        env: {
            NODE_ENV: '"development"',
            type: 0
        },
        port: 8080,
        template: 'index-dev.html',
        autoOpenBrowser: false,
        assetsSubDirectory: 'public',
        assetsPublicPath: '/',
        proxyTable: {},
        // CSS Sourcemaps off by default because relative paths are "buggy"
        // with this option, according to the CSS-Loader README
        // (https://github.com/webpack/css-loader#sourcemaps)
        // In our experience, they generally work as expected,
        // just be aware of this issue when enabling this option.
        cssSourceMap: false
    }
}