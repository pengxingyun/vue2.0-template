const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}
module.exports = {
    entry: './src/main.js',
    output: {
        path: resolve('dist'),
        filename: 'js/[name].[hash].js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.vue'],
        modules: [
            resolve('src'),
            resolve('node_modules')
        ],
        alias: {
            '@': resolve('src'),
            assets: resolve('assets'),
            components: resolve('src/components')
        }
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        },
        // 它会应用到普通的 `.js` 文件
        // 以及 `.vue` 文件中的 `<script>` 块
        {
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader'
        },
        // 它会应用到普通的 `.css` 文件
        // 以及 `.vue` 文件中的 `<style>` 块
        {
            test: /\.less$/,
            use: [
                process.env.NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'vue-style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        esModule: false // 默认是true 需要配置false 否则样式不会生效
                    }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        ident: 'postcss',
                        plugins: (loader) => [
                            require('autoprefixer')()
                        ]
                    }
                },
                'less-loader'
            ]
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url-loader',
            // options额外的配置，⽐如资源名称
            options: {
                esModule: false, // 不开启esModule
                name: "[name]_[hash].[ext]",
                //打包后的存放位置
                outputPath: "images/",
                //⼩于2048，才转换成base64
                limit: 2048
            }
        },
        {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url-loader',
            // options额外的配置，⽐如资源名称
            options: {
                esModule: false, // 不开启esModule
                name: "[name]_[hash].[ext]",
                //打包后的存放位置
                outputPath: "images/",
                //⼩于2048，才转换成base64
                limit: 2048
            }
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name]_[hash].css'
        })
    ]
}