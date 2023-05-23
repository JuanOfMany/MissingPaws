const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
var mode = process.env.NODE_ENV || 'development';

const config = {
  name: 'Missing Paws',
  mode: mode,
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss'],
    modules: ['src', 'node_modules'],
  },
  externals: {
},
devServer: {
  static: {
    directory: path.join(__dirname, 'public'),
  },
  compress: true,
},
  module: {
    rules: [
      {
        test: /\.(js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
    new CompressionPlugin({
      algorithm: 'gzip',
      test: /.js$|.css$/,
    }),
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};

module.exports = config;