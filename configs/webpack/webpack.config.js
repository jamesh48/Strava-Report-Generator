const { rootPath, relativePath } = require("../paths.js");
require("dotenv").config({ path: rootPath("configs/dotenv/.env") });
const { cssRules, jsRules, imageRules } = require("./webpack.config.rules.js");
const webpack = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");

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
      OptionsProfile: rootPath("dist/client/components/OptionsProfile"),
      UserProfile: rootPath("dist/client/components/UserProfile"),
      PaginationContainer: rootPath(
        "dist/client/components/PaginationContainer"
      ),
      StravaEntries: rootPath("dist/client/components/StravaEntries"),
      StaticImages: rootPath("frontend/images"),
      GlobalStore: rootPath("dist/client/components/GlobalStore/globalStore.js")
    }
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: rootPath("frontend/src/App.scss"),
          to: rootPath("dist/client"),
          globOptions: {
            ignore: ["**.*.js"]
          }
        },
        {
          from: rootPath(
            "frontend/src/components/OptionsProfile/Radios/AdditionalFilters/additionalFilters.scss"
          ),
          to: rootPath(
            "dist/client/components/OptionsProfile/Radios/AdditionalFilters"
          )
        },
        {
          from: rootPath(
            "frontend/src/components/OptionsProfile/ProgressBar/progressBar.scss"
          ),
          to: rootPath("dist/client/components/OptionsProfile/ProgressBar")
        },
        {
          from: rootPath("frontend/src/components/StravaEntries/report.scss"),
          to: rootPath("dist/client/components/StravaEntries")
        },
        {
          from: rootPath("frontend/index.html"),
          to: rootPath("dist/public/index.html")
        }
      ],
      options: {
        concurrency: 100
      }
    }),
    new MiniCssExtractPlugin(),
    new webpack.DefinePlugin({
      "process.env.clientId": process.env.USER_ID
    })
  ],
  entry: {
    index: rootPath("dist/client/index.js")
  },
  output: {
    path: rootPath("dist/public"),
    filename: "bundle.js"
  },
  stats: {
    cached: false,
    cachedAssets: false,
    chunks: false,
    chunkModules: false,
    chunkOrigins: false,
    modules: false
  }
};

module.exports = [clientConfig];
