import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {
  ProgressPlugin,
  DefinePlugin,
  HotModuleReplacementPlugin,
} from 'webpack';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import type { BuildOptions } from './types/config';
import type { WebpackPluginInstance } from 'webpack';

export const buildPlugins = (
  options: BuildOptions,
): WebpackPluginInstance[] => {
  const { isDev } = options;
  const templatePath = options.paths.html;

  return [
    new ProgressPlugin(),
    new HtmlWebpackPlugin({ template: templatePath }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    }),
    new HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
    }),
  ];
};
