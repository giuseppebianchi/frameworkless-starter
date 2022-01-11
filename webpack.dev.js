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
        port: 3000
    }
});