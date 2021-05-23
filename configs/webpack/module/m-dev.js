// module development config
const { merge } = require("webpack-merge");
const webpack = require("webpack");
const commonConfig = require("../common");

const path = require("path");
const DIST_DIR = path.resolve(__dirname, `../../../../../review`);

module.exports = merge(commonConfig, {
  mode: "development",
  entry: [
    "react-hot-loader/patch", // activate HMR for React
    "webpack-dev-server/client?http://0.0.0.0:8081", // bundle the client for webpack-dev-server and connect to the provided endpoint
    "webpack/hot/only-dev-server", // bundle the client for hot reloading, only- means to only hot reload for successful updates
    "./index.tsx", // the entry point of our app
  ],
  output: {
    filename: "module-example/js/bundle.[contenthash].min.js",
    path: DIST_DIR,
    publicPath: "./",
    clean: true,
  },
  devServer: {
    contentBase: DIST_DIR,
    port: 5000,
    historyApiFallback: true,
    hot: true,
    open: false,
    clientLogLevel: "debug",
    writeToDisk: true,
  },
  devtool: "cheap-module-source-map",
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // enable HMR globally,
  ],
});