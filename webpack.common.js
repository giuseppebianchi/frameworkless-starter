const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const dev_mode = process.env.NODE_ENV !== "production";
module.exports = {
    entry: "./src/index.js",
    output: {
        // si utilizza il modulo path per ottenere il path assoluto della macchina
        // che andrà a contenere il file generato
        // cosi se il codice viene eseguito in un altra macchina verrà generato il
        // path assoluto specifico di quella macchina
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: 'assets/[name][ext]'
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
                test: /\.scss$/,
                use: [
                    "style-loader", // 3. Inject styles into DOM
                    "css-loader", // 2. turn CSS into CommonJS
                    "sass-loader" // 1. turn SASS into CSS
                ]
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                type: 'asset/resource',
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/templates/home.html"
        })
    ]
}