import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { ProgressPlugin } from 'webpack';

import type { BuildOptions } from './types/config';
import type { WebpackPluginInstance } from 'webpack';

export const buildPlugins = (
  options: BuildOptions,
): WebpackPluginInstance[] => {
  const templatePath = options.paths.html;

  return [
    new ProgressPlugin(),
    new HtmlWebpackPlugin({ template: templatePath }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
  ];
};
