var path = require("path");
var webpack = require("webpack");
var ExtractCSS = require("extract-text-webpack-plugin");
module.exports = {
  devtool: "inline-source-map",
  entry: "./src/index.ts",
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
      test: /\.ts$/,
      exclude: /node_modules/,
      use: ["ts-loader"]
    }, {
      test: /\.scss$/,
      use: ExtractCSS.extract({
        fallback: "style-loader",
        use: [{
          loader: "typings-for-css-modules-loader",
          options: {
            namedexport: true,
            camelcase: true,
            modules: true
          }
        }, {
          loader: "sass-loader",
          options: {
            outputStyle: "compressed"
          }
        }]
      })
    }]
  },
  resolve: {
    extensions: ['.js', '.ts']
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      comments: false
    }),
    new ExtractCSS("styles.css")
  ]
}
