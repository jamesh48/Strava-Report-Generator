const { rootPath, relativePath } = require("../paths.js");
require("dotenv").config({ path: rootPath("configs/dotenv/.env") });

const webpack = require("webpack");
const { merge } = require("webpack-merge");

const moduleRules = require(relativePath("webpack/webpack.config.rules.js"));

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const clientConfig = merge(moduleRules, {
  target: "web",
  mode: "development",
  devtool: "eval-source-map",
  // Req by webpack 5/ala dotenv-environment variables
  resolve: {
    alias: {
      OptionsProfile: rootPath("src/client/components/OptionsProfile"),
      UserProfile: rootPath("src/client/components/UserProfile"),
      PaginationContainer: rootPath(
        "src/client/components/PaginationContainer"
      ),
      StravaEntries: rootPath("src/client/components/StravaEntries"),
      StaticImages: rootPath("src/client/images"),
      GlobalStore: rootPath("src/client/components/GlobalStore/GlobalStore.js")
    }
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new webpack.DefinePlugin({
      "process.env.clientId": process.env.USER_ID
    })
  ],
  entry: {
    index: rootPath("src/client/index.jsx")
  },
  output: {
    path: rootPath("public"),
    filename: "bundle.js"
  }
});

module.exports = [clientConfig];