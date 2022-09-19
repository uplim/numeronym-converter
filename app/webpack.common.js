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
    alias: {
      '@': path.resolve(__dirname, './src/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [{
          loader: "ts-loader",
          options: {
            configFile: path.resolve(__dirname, 'tsconfig.json')
          },
        }],
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