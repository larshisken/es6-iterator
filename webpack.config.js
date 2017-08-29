/**
 * @Author: Lars Hisken
 * @Date:   2017-08-29T19:31:31+02:00
 * @Email:  larshisken@protonmail.com
 * @Last modified by:   Lars Hisken
 * @Last modified time: 2017-08-29T19:41:53+02:00
 */

 var path = require('path');
 var webpack = require('webpack');

 module.exports = {
     entry: './js/main.js',
     output: {
         path: path.resolve(__dirname, 'build'),
         filename: 'main.bundle.js'
     },
     module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
     },
     stats: {
         colors: true
     },
     devtool: 'source-map'
 };
