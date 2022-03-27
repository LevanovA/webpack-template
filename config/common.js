const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    context: path.resolve(__dirname, '../src'),
    entry: {
        main: './index.js'
    },
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, '../dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {from: path.resolve(__dirname, '../public'), to: path.resolve(__dirname, '../dist')},
                {from: path.resolve(__dirname, '../src/assets/img'), to: path.resolve(__dirname, '../dist/assets/img')},
            ]
        }),
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/i,
                    name: "vendors",
                    chunks: "all"
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|jpeg|svg)/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/img/[name][ext]'
                }
            },
            {
                test: /\.(woff|woff2|ttf|eot)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/fonts/[name][ext]'
                }
            },
            {
                test: /\.(c|sa|sc)ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
        ]
    },
}