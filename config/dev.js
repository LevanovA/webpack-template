const webpack = require('webpack')
const { merge } = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // Служит для попадания стилей в нужную папку билда

const common = require('./common')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        compress: true,
        hot: true,
        open: true,
        port: 4200,
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
})