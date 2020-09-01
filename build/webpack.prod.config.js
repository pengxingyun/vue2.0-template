const baseWebpackConfig = require('./webpack.base.config.js')
const path = require('path')
const webpack = require('webpack')
const config = require('./config.js')
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const {merge} = require('webpack-merge')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const htmlWebpackPlugin = require("html-webpack-plugin")

const {env} = config.dev
module.exports = merge(baseWebpackConfig, {
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            'process.env': env,
            '$envType': env
        }),
        // 请确保引入这个插件来施展魔法
        new VueLoaderPlugin(),
        new htmlWebpackPlugin({
            title: 'webpack demo',
            template: path.join(__dirname, '../public/index.html'),
            filename: 'index.html'   //指定生成的页面名称
        })
    ],
});