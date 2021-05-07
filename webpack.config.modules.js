const path = require('path');
const srcPath = path.join(__dirname, 'src');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require('autoprefixer');

const skin = process.env.skin || 'default';

module.exports = {
    rules: [
        {
            enforce: 'pre',
            test: /\.(jsx|js)?/,
            include: [path.resolve(__dirname, 'skin', skin, 'src'), srcPath],
            loader: 'babel-loader',
            // issuer: /\.css$/,
        },
        {
            test: /\.css$/,
            rules: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
        },
        {
            test: /\.(png|jpg|gif|svg|woff|woff2|eot|ttf|otf|webm)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                    publicPath: '/'
                },
            }],
        },
        {
            test: /\.scss$/,
            rules: [
                {loader: MiniCssExtractPlugin.loader,},
                {loader: 'css-loader'},
                {
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions: {
                            plugins: [
                                autoprefixer({ overrideBrowserslist: ['ie >= 8', 'last 20 version'] }),
                                // {
                                //     browsers: ['last 10 versions']
                                //     //  overrideBrowserslist: ['ie >= 8', 'last 20 version']
                                // }
                            ]
                        }
                    }
                },
                {
                    loader: "sass-loader",
                }
            ],
        },
        {
            // make all files ending in .json5 use the `json5-loader`
            test: /\.json5$/,
            loader: 'json5-loader'
        }
    ]
};