var path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        app: './app.js',
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }]
    },
    devtool: 'inline-source-map',
};