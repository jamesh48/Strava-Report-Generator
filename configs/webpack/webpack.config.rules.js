const { rootPath } = require("../paths");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports.imageRules = {
  test: /\.(png|jpeg)$/,
  include: rootPath("build/dist/client/images"),
  loader: "file-loader",
  options: {
    name: "[name].[ext]",
    outputPath: `/images`
  }
};

module.exports.cssRules = {
  test: /\.(css|scss)$/,
  include: rootPath("build/dist/client"),
  exclude: /node_modules/,
  use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
};

module.exports.jsRules = {
  test: /\.(js|jsx)$/,
  exclude: [/node_modules/, /src/],
  use: {
    loader: "babel-loader",
    options: {
      presets: ["@babel/preset-env", "@babel/preset-react"]
    }
  }
};
