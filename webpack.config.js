const path = require("path");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");

const clientConfig = {
  entry: "./src/client/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};

const serverConfig = {
  entry: "./src/server/index.js",
  target: "node",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "server.js",
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};

module.exports = [clientConfig, serverConfig];
