const path = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

/*const plugins = () => {
    let base = [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {from: path.resolve(__dirname, '../public'), to: path.resolve(__dirname, '../dist')},
                {from: path.resolve(__dirname, '../src/assets/img'), to: path.resolve(__dirname, '../dist/assets/img')},
            ]
        }),
    ]

    const files = glob.sync(path.resolve(__dirname, '../src/pages/!**!/!*.html'));

    for (let i = 0; i < files.length; i++) {
        const filePath = files[i];
        const file = filePath.split('/').pop();
        const parts = file.split('.');
        const name = parts[0]
        // const extension = parts[1]

        base.push(
            new HtmlWebpackPlugin({
                template: filePath,
                filename: file,
                chunks: [name, 'vendor'],
                inject: 'body'
            })
        )
    }

    // glob.sync(`${path.resolve(__dirname, '../src/pages/!**!/!*.html')}`).forEach(item => {
    //     base.push(
    //         new HtmlWebpackPlugin({
    //             template: item,
    //             filename: `${path.basename(item)}`,
    //             chunks: [`${path.basename(item, path.extname(item))}`, 'vendor'],
    //             inject: 'body'
    //         })
    //     )
    // });

    return base
}*/

// const plugins = () => {
//     let base = [
//         new CleanWebpackPlugin(),
//         new CopyWebpackPlugin({
//             patterns: [
//                 {from: path.resolve(__dirname, '../public'), to: path.resolve(__dirname, '../dist')},
//                 {from: path.resolve(__dirname, '../src/assets/img'), to: path.resolve(__dirname, '../dist/assets/img')},
//             ]
//         }),
//     ]
//
//     glob.sync(`${path.resolve(__dirname, '../src/pages/**/*.html')}`).forEach(item => {
//         base.push(
//             new HtmlWebpackPlugin({
//                 template: item,
//                 filename: `${path.basename(item, path.extname(item))}.html`,
//                 chunks: [`${path.basename(item, path.extname(item))}`, 'vendor'],
//                 inject: 'body'
//             })
//         )
//     });
//
//     return base
// }

module.exports = {
    context: path.resolve(__dirname, '../src'),
    entry: {
        main: './pages/main/main.js',
        contacts: './pages/contacts/contacts.js'
    },
    // plugins: plugins(),
    plugins: [
        new HtmlWebpackPlugin({
            template: './pages/main/main.html',
            filename: 'index.html',
            chunks: [`main`, 'vendor'],
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            template: './pages/contacts/contacts.html',
            filename: 'contacts.html',
            chunks: [`contacts`, 'vendor'],
            inject: 'body'
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {from: path.resolve(__dirname, '../public'), to: path.resolve(__dirname, '../dist')},
                {from: path.resolve(__dirname, '../src/assets/img'), to: path.resolve(__dirname, '../dist/assets/img')},
            ]
        }),
        new SpriteLoaderPlugin({ plainSprite: true })
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
                test: /\.(png|jpg|jpeg)/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/img/[name][ext]'
                }
            },
            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader',
                options: {
                    extract: true,
                    // output: 'assets/img'
                    publicPath: 'assets/img/'
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