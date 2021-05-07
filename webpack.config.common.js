
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminMozjpeg = require('imagemin-mozjpeg');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const cssnano = require('cssnano');
const path = require('path');
const modules = require('./webpack.config.modules');

const publicPath = '/public';
const srcPath = path.join(__dirname, 'src');
const env = 'development';
const outputPath = path.resolve(__dirname, env === 'production' ? 'public' : 'public');


const config = {
    entry: {
        app: path.join(srcPath, 'index.jsx'),
    },
    output: {
        path: outputPath,
        publicPath: publicPath,
        filename: '[name]-[hash]-bundle.js',
        chunkFilename: "[name]-[hash]-bundel.js"
    },
    watchOptions: {
        ignored: /node_modules/,
    },
    optimization: {
        minimize: env === 'production',
        emitOnErrors: env === 'production',
        splitChunks: {
            chunks: 'all',
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: false,
            cacheGroups: {
                defaultVendors: {
                    test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
                    priority: 0,
                    chunks: 'all',
                    name: 'vendor',
                },
                default: {
                    minChunks: 2,
                    priority: -1,
                    reuseExistingChunk: true,
                }
            }
        }
    },
    module: modules,
    resolve: {
        extensions: ['.json5', '.js', '.jsx', ".json", ".ts", ".tsx"],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(env),
        }),
        new HtmlWebpackPlugin({
            template: './index.html',
            googleAnalitic: env === 'production' ? `<script></script>` : '',
            title: 'test'
        }),
        new MiniCssExtractPlugin({
            filename: "[name]-[hash].css",
        }),
        new CssMinimizerPlugin({
            test: /\.css$/g,
            cache: true,
            minimizerOptions: {
                preset: [
                    'default',
                    {
                        discardComments: { removeAll: true },
                    },
                ],
            }
        }),
        // new OptimizeCssAssetsPlugin({
        //     assetNameRegExp: /\.css$/g,
        //     // cssProcessor: cssnano,
        //     cssProcessorPluginOptions: {
        //         preset: ['default', { discardComments: { removeAll: true } }],
        //     }
        // }),
        new CopyWebpackPlugin(
            {
                patterns: [{
                    from: 'assets/**/*',
                    to: outputPath,
                    // ignore: ['assets/styles/**/*']
                }]
            },
            { debug: 'warning', copyUnmodified: env === 'production' }),
        new ImageminPlugin({
            disable: env !== 'production',
            test: /\.(jpe?g|png|gif|svg)$/i,
            optipng: {
                optimizationLevel: 9
            },
            plugins: [
                imageminMozjpeg({
                    quality: 20,
                    progressive: true
                })
            ]
        }),
    ],
};
module.exports = config;