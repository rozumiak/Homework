const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const pathToJs = './src/js/index.js';
const pathToHtml = './src/html/index.html';
module.exports = {
    entry: pathToJs,
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [miniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
        ],
    },
    plugins: [
        new htmlWebpackPlugin({template: pathToHtml}),
        new miniCssExtractPlugin({filename: '[name].css'})],


}