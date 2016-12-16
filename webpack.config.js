const HtmlWebpackPlugin = require('html-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: [
        './app/index.js'
    ],
    devtool: 'source-map',
    output: {
        path: __dirname + '/dist',
        filename: 'index_bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
            {
                test: /\.scss$/,
                loaders: [
                    'style',
                    'css?sourceMap',
                    'sass?sourceMap'
                ]
            }
        ]
    },
    plugins: [
        HtmlWebpackPluginConfig,
        new LiveReloadPlugin()
    ]
};
