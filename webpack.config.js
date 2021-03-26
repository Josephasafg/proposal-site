const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    test: /\.mp3$/,
    loader: 'file-loader',
    query: {
        name: 'static/media/[name].[hash:8].[ext]'
    }
};