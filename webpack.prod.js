const path = require("path");
const common = require('./webpack.common');
const {merge} = require("webpack-merge");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: "bundle.[hash].js",
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].[hash].css"
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                // Look for JavaScript files and apply the babel-loader
                // It uses the configuration in `.babelrc`
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, // 3. Extract CSS into files
                    "css-loader", // 2. turn CSS into CommonJS
                    "postcss-loader", // 1. Autoprefixing CSS Rules
                ]
            },
            {
                test: /\.(sa|sc)ss$/,
                use: [
                    MiniCssExtractPlugin.loader, // 4. Extract CSS into files
                    "css-loader", // 3. turn CSS into CommonJS
                    "postcss-loader", // 2. Autoprefixing CSS Rules
                    "sass-loader" // 1. turn SASS into CSS
                ]
            },
        ]
    }
})