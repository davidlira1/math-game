const path = require('path');
const SRC_DIR = path.join(__dirname, '/client');
const DIST_DIR = path.join(__dirname, '/public/dist');

module.exports = {
    mode: "development",
    devtool: false, 
    entry: `${SRC_DIR}/index.jsx`,
    output: {
        filename: 'bundle.js',
        path: DIST_DIR,
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                        presets: ['@babel/preset-react', 
                                  '@babel/preset-env']
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}