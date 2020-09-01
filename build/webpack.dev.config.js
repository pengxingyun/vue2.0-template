const baseWebpackConfig = require('./webpack.base.config.js')
const path = require('path')
const webpack = require('webpack')
const config = require('./config.js')
const {merge} = require('webpack-merge')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const htmlWebpackPlugin = require("html-webpack-plugin")
const { env } = config.dev

module.exports = merge(baseWebpackConfig, {
    mode: 'development',
    devtool: '#cheap-module-eval-source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': env,
            '$envType': env
        }),
        // 请确保引入这个插件来施展魔法
        new VueLoaderPlugin(),
        new webpack.HotModuleReplacementPlugin(), // 热更新
        new htmlWebpackPlugin({
            title: 'webpack demo',
            template: path.join(__dirname, '../public/index.html'),
            filename: 'index.html'   //指定生成的页面名称
        })
    ],
    devServer: {
        contentBase: path.join(__dirname,'dist'),
        open: true,
        port: 8080,
        hotOnly: true, // 模块刷新，不会做页面刷新
        historyApiFallback: {
            //与output的publicPath有关(HTMLplugin生成的html默认为index.html)
            index: '/index.html' // 要支持history 得改成都匹配到index.html 必须加'/'
        }
    }
});