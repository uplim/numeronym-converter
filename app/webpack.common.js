const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [{ loader: "ts-loader" }],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'ぬめろにむ こんばーた！',
      filename: 'index.html',
    })
  ]
};