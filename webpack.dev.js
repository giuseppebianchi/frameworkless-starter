const path = require("path");
const common = require('./webpack.common');
const {merge} = require("webpack-merge");

module.exports = merge(common, {
    mode: "development",
    output: {
        // il percorso e nome del file che webpack andrà a generare
        filename: "bundle.js",
    },
    devServer: {
        port: 3000,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader", // 2. Inject styles into DOM
                    "css-loader", // 1. turn CSS into CommonJS
                ]
            },
            {
                test: /\.(sa|sc)ss$/,
                use: [
                    "style-loader", // 3. Inject styles into DOM
                    "css-loader", // 2. turn CSS into CommonJS
                    "sass-loader" // 1. turn SASS into CSS
                ]
            },
        ]
    }
});