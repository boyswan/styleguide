var webpack = require('webpack'); 
var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var PROD = JSON.parse(process.env.PROD_DEV || "0");

module.exports = {  
    entry: PROD? [
      "./src/_index.js"
    ] : [
      'webpack/hot/only-dev-server',
      "./src/_index.js"
    ],
    output: {
        path: path.resolve('./dist'),
        filename: PROD ? "bundle.min.js" : "bundle.js"
    },
    module: {
        loaders: [{ 
            test: /\.js$/, 
            loaders: ['react-hot', 'babel-loader?stage=0'], 
            exclude: /node_modules/,
        },{ 
            test: /\.css$/, 
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]_[local]__[hash:base64:5]!postcss-loader') 
        },{ 
            test: /\.svg$/, 
            loader: "url-loader?limit=10000&mimetype=image/svg+xml" 
        }]
    },
    postcss: [
        require('autoprefixer-core'),
    ],
    resolve: {
        extensions: ["", ".js", ".css"],
        modulesDirectories: ["src", "node_modules"],
    },
    plugins: PROD ? [
        new ExtractTextPlugin('style.css', { allChunks: true }),
        new webpack.optimize.UglifyJsPlugin({minimize: true})
    ] : [
        new webpack.NoErrorsPlugin(),
    ]
};
