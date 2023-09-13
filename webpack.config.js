import { resolve } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import nodeExternals from "webpack-node-externals";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const commonConfig = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};

const clientConfig = {
  ...commonConfig,
  entry: "./src/client/index.js",
  output: {
    path: resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
};

const serverConfig = {
  ...commonConfig,
  entry: "./src/server/index.js",
  target: "node",
  output: {
    path: resolve(__dirname, "dist"),
    filename: "server.cjs",
  },
  externals: [nodeExternals()],
};

export default [clientConfig, serverConfig];
