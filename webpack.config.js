import path from 'path';
import glob from 'glob';

import ExtractTextPlugin from 'extract-text-webpack-plugin';
import PurifyCSSPlugin from 'purifycss-webpack';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const inProduction = process.argv[process.argv.length - 1]
  .match(/[a-z]+$/g)[0] === 'production';

const basic = {
  entry: {
    app: './src/scripts/main.js',
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].[chunkhash].js',
  },
};

const module = {
  rules: [
    {
      test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/,
      loader: 'file-loader',
      options: {
        name: 'img/[name].[ext]',
      },
    },
    {
      test: /\.s[ac]ss$/,
      use: ExtractTextPlugin.extract({
        use: ['css-loader', 'sass-loader'],
      }),
    },
    {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        use: ['css-loader', 'postcss-loader'],
      }),
    },
    {
      test: /\.js$/,
      use: ['babel-loader'],
      exclude: ['/node_modules'],
    },
  ],
};

const plugins = [
  new ExtractTextPlugin('[name].[contenthash].css'),
  new CleanWebpackPlugin('build'),
  new HtmlWebpackPlugin({
    template: path.join(__dirname, 'src/index.html'),
  }),
  new PurifyCSSPlugin({
    paths: glob.sync(path.join(__dirname, 'src/index.html')),
    minimize: inProduction,
  }),
];

export default {
  ...basic, module, plugins,
};
