const path = require(`path`);
const SRC_DIR = path.join(__dirname, `/client/src`);
const DIST_DIR = path.join(__dirname, `/public`);
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
  devtool: "eval-source-map",
  // for production:
  // devtool: "source-map",
  mode: 'development',
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: `${SRC_DIR}`,
        exclude: [path.resolve(__dirname, `node_modules`)],
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: ['@babel/plugin-transform-runtime', ["@babel/plugin-proposal-class-properties", { "loose": true }]]
        }
      },
      {
        test: /\.(css|scss)$/,
        include: path.join(__dirname, 'client/src'),
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              // discardDuplicates: true,
              importLoaders: 1,
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
              sourceMap: process.env.NODE_ENV !== 'production',
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: process.env.NODE_ENV !== 'production',
            },
          },
        ]
      },
      {
        test: /\.(png|jpeg)$/,
        include: `${SRC_DIR}/images`,
        loader: "file-loader",
        options: {
          name: '[name].[ext]',
          outputPath: `/images`,
        },
      },
      {
        test: /\.scss$/,
        include: `${SRC_DIR}/styles`,
        use: [
          // 'style-loader',
          // MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      }
    ]
  }
}