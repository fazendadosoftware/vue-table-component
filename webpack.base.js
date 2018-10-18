module.exports = {
    module: {
        rules: [
            {
                test: /\.js/,
                loaders: ['babel-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.vue$/,
                loaders: ['vue-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },

    resolve: {
        extensions: ['.js', '.vue'],
    },
};
