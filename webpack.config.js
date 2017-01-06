var path = require("path");
module.exports = {
    entry: "./src/index.js",
    output: {
        path: "./dist",
        filename: "bundle.js",
        publicPath: "/dist"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }, {
          test: /\.scss$/,
          loaders: ["style-loader", "css-loader", "sass-loader"]
        }]
    },
    sassLoader: {
      outputStyle: "compressed"
    }
}
