// module production config
const { merge } = require("webpack-merge");
const { resolve } = require("path");

const path = require("path");
const DIST_DIR = path.resolve(__dirname, `../../../../../dist`);

const commonConfig = require("../common");

module.exports = merge(commonConfig, {
  mode: "production",
  entry: ["./index.tsx"],
  output: {
    filename: "module-example/js/bundle.[contenthash].min.js",
    path: DIST_DIR,
    publicPath: "./",
    clean: false
  },
  devtool: "source-map",
  plugins: [],
});