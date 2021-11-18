const webpack = require('webpack');
// const nodeExternals = require("webpack-node-externals");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require("path");
require('dotenv').config({ path: './.env' });

const imageFiles = {
  test: /\.(png|jpeg)$/,
  include: path.resolve(__dirname, 'src/client/images'),
  loader: "file-loader",
  options: {
    name: '[name].[ext]',
    outputPath: `/images`,
  }
};
const css = {
  test: /\.(css|scss)$/,
  include: path.resolve(__dirname, 'src/client'),
  exclude: /node_modules/,
  use: [
    MiniCssExtractPlugin.loader,
    'css-loader',
    'sass-loader'
  ]
}

const js = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
    options: {
      presets: ["@babel/preset-env", "@babel/preset-react"],
    },
  },
};

// const serverConfig = {
//   mode: "development",
//   target: "node",
//   plugins: [new MiniCssExtractPlugin(),
//   new webpack.DefinePlugin({
//   }),
//   ],
//   devtool: "source-map",
//   node: {
//     __dirname: false,
//   },
//   externals: [nodeExternals()],
//   entry: {
//     "index": path.resolve(__dirname, "src/server/index.js"),
//   },
//   module: {
//     rules: [js, css],
//   },
//   output: {
//     path: path.resolve(__dirname, "dist/server"),
//     filename: "[name].js",
//   },
//   resolve: {
//     alias: {
//     },
//   }
// };

const clientConfig = {
  target: "web",
  mode: "development",
  devtool: "eval-source-map",
  // Req by webpack 5/ala dotenv-environment variables
  resolve: {
    //   fallback: {
    //     "fs": false,
    //     "path": false,
    //     "os": false
    //   }
    alias: {
      'OptionsProfile': path.resolve(__dirname, 'src/client/components/OptionsProfile'),
      'UserProfile': path.resolve(__dirname, 'src/client/components/UserProfile'),
      'PaginationContainer': path.resolve(__dirname, 'src/client/components/PaginationContainer'),
      'StravaEntries': path.resolve(__dirname, 'src/client/components/StravaEntries'),
      "StaticImages": path.resolve(__dirname, 'src/client/images'),
      "GlobalStore": path.resolve(__dirname, 'src/client/components/GlobalStore/GlobalStore.js')
    }
  },
  plugins: [new MiniCssExtractPlugin(),
  new webpack.DefinePlugin({
    'process.env.clientId': process.env.USER_ID
  }),
  ],
  entry: {
    "index": path.resolve(__dirname, "src/client/index.jsx"),
  },
  module: {
    rules: [js, css, imageFiles],
  },
  // optimization: {
  //   splitChunks: {
  //     chunks: "all",
  //   },
  // },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },
};

module.exports = [clientConfig];

