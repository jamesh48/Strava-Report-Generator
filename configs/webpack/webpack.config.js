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
      OptionsProfile: rootPath("build/dist/client/components/OptionsProfile"),
      UserProfile: rootPath("build/dist/client/components/UserProfile"),
      PaginationContainer: rootPath(
        "build/dist/client/components/PaginationContainer"
      ),
      StravaEntries: rootPath("build/dist/client/components/StravaEntries"),
      StaticImages: rootPath("build/dist/client/images"),
      GlobalStore: rootPath(
        "build/dist/client/components/GlobalStore/globalStore.js"
      )
    }
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: rootPath("src/client/App.scss"),
          to: rootPath("build/dist/client"),
          globOptions: {
            ignore: ["**.*.js"]
          }
        },
        {
          from: rootPath(
            "src/client/components/OptionsProfile/Radios/AdditionalFilters/additionalFilters.scss"
          ),
          to: rootPath(
            "build/dist/client/components/OptionsProfile/Radios/AdditionalFilters"
          )
        },
        {
          from: rootPath(
            "src/client/components/OptionsProfile/ProgressBar/progressBar.scss"
          ),
          to: rootPath(
            "build/dist/client/components/OptionsProfile/ProgressBar"
          )
        },
        {
          from: rootPath("src/client/components/StravaEntries/report.scss"),
          to: rootPath("build/dist/client/components/StravaEntries")
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
    index: rootPath("build/dist/client/index.js")
  },
  output: {
    path: rootPath("build/dist/public"),
    filename: "bundle.js"
  }
};

module.exports = [clientConfig];
