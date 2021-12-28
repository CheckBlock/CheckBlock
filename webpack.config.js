const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV,
  entry: "./client/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    // publicPath: '/build',
    filename: "bundle.js",
  },
  devServer: {
    static: {
      directory: path.join(__dirname),
      publicPath: "/",
    },
    compress: true,
    //port: 9000,
    proxy: {
      "/": {
        target: "http://localhost:3000/",
        secure: false,
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/index.html",
      filename: "index.html",
      inject: "body",
    }),
  ],
};
