module.exports = {
    entry: './src/app.jsx',
    output: {
        path: './dist',
        filename: 'bundle.js'
    },
    devtool: 'inline-source-map',
    module: {
        loaders: [
            {
                test: /\.js(x?)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
};