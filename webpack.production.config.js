const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const config = {
  devtool: "cheap-module-source-map",

  entry: ["react-hot-loader/patch", "./client/index.js"],

  output: {
    path: path.resolve(__dirname, "build"),
    filename: "app.bundle.js"
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              // query: { sourceMap: false },
              options: {
                importLoaders: 1
              }
            },
            {
              loader: "postcss-loader"
            }
          ]
        })
      },
      {
        test: /\.jsx?$/,
        use: "babel-loader",
        exclude: /node_modules/
      },

      {
        test: /\.(png|jpe?g|gif|ico|\.woff$|\.ttf$|\.wav$|\.mp3$)$/i,
        use: ["file-loader?name=img/[name].[ext]", "image-webpack-loader"]
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: "file-loader?name=fonts/[name].[ext]"
      },
      {
        test: /\.svg/,
        use: {
          loader: "svg-url-loader"
        }
      }
    ]
  },

  plugins: [
    // index.html custom template
    new HtmlWebpackPlugin({
      title: "Portfolio",
      template: "./index.html",
      favicon: "favicon.ico"
    }),

    // new webpack.EnvironmentPlugin(['NODE_ENV']),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: process.env.NODE_ENV
      }
    }),

    // extract css files
    new ExtractTextPlugin({
      filename: "styles.css",
      disable: false,
      allChunks: true
    }),
    new UglifyJsPlugin({
      cache: true,
      sourceMap: false,
      exclude: [/\.min\.js$/gi],
      uglifyOptions: {
        mangle: true,
        compress: {
          pure_getters: true,
          unsafe: true,
          unsafe_comps: true
        },
        output: {
          comments: false,
          beautify: false
        }
      }
    }),

    new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/])
  ]
};
module.exports = config;
