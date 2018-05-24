'use strict';
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin")
const VueLoaderPlugin = require("vue-loader/lib/plugin")

module.exports = {
    mode: "development",
    entry: "./src/main.js",
    output: {
        filename: "bundle.js",
        path: "/dist/",
        publicPath: "/"
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: "vue-loader"
        },{
            test: /\.js$/,
            loader: "babel-loader",
            exclude: file => (
                /node_modules/.test(file) &&
                !/\.vue\.js/.test(file)
            )
        },{
            test: /\.css$/,
            loader: "css-loader"
        },{
            test: /\.scss$/,
            use: [
              'vue-style-loader',
              'css-loader',
              'sass-loader'
            ]
        },{
            test: /\.sass$/,
            use: [
                'vue-style-loader',
                'css-loader',
                {
                    loader: 'sass-loader',
                    options: {
                        indentedSyntax: true,
                        // you can also read from a file, e.g. `variables.scss`
                        data: `$color: red;`
                    }
                }
            ]
        },{
            test: /\.css$/,
            use: [
                "vue-style-loader",
                {
                    loader: "css-loader",
                    options: {importLoaders: 1}
                },
                "postcss-loader"
            ]
        }]
    },
    devtool: "cheap-module-source-map",
    devServer: {
        historyApiFallback: true,
        host: "localhost",
        port: 3000
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html', // 文件名
            template: "src/index.html", // 真实路径，不是打包后的路径
            inject: true // 将js注入body里面
        }),
        new VueLoaderPlugin()
    ]
}