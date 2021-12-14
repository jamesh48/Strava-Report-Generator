const { rootPath, relativePath } = require("../paths.js");
require("dotenv").config({ path: rootPath("configs/dotenv/.env") });
const { cssRules, jsRules, imageRules } = require("./webpack.config.rules.js");
const webpack = require("webpack");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const clientConfig = {
  target: "web",
  mode: "development",
  devtool: "eval-source-map",
  // Req by webpack 5/ala dotenv-environment variables
  module: {
    rules: [jsRules, cssRules, imageRules]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      OptionsProfile: rootPath("build/dist/client/components/OptionsProfile"),
      UserProfile: rootPath("build/dist/client/components/UserProfile"),
      PaginationContainer: rootPath(
        "build/dist/client/components/PaginationContainer"
      ),
      StravaEntries: rootPath("build/dist/client/components/StravaEntries"),
      StaticImages: rootPath("build/dist/client/images"),
      GlobalStore: rootPath("build/dist/client/components/GlobalStore/globalStore.js")
    }
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new webpack.DefinePlugin({
      "process.env.clientId": process.env.USER_ID
    })
  ],
  entry: {
    index: rootPath("build/dist/client/index.js")
  },
  output: {
    path: rootPath("build/dist/public"),
    filename: "bundle.js"
  }
};

module.exports = [clientConfig];
