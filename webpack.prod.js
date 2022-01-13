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
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, // 2. Extract CSS into files
                    "css-loader", // 1. turn CSS into CommonJS
                ]
            },
            {
                test: /\.(sa|sc)ss$/,
                use: [
                    MiniCssExtractPlugin.loader, // 3. Extract CSS into files
                    "css-loader", // 2. turn CSS into CommonJS
                    "sass-loader" // 1. turn SASS into CSS
                ]
            },
        ]
    }
})