var path = require("path");
var UglifyPlugin = require("uglifyjs-webpack-plugin")
module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: "/dist"
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: ["babel-loader"]
        }, {
            test: /\.scss$/,
            use: ["style-loader", "css-loader", {
                loader: "sass-loader",
                options: {
                    outputStyle: "compressed"
                }
            }]
        }]
    },
    plugins: [
      new UglifyPlugin
    ]
}
