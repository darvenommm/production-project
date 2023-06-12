import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import type { RuleSetRule } from 'webpack';
import type { BuildOptions } from './types/config';

export const buildLoaders = (options: BuildOptions): RuleSetRule[] => {
  const { isDev } = options;

  const svgLoaders = [
    {
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      resourceQuery: { not: [/url/] },
      use: ['@svgr/webpack'],
    },
    {
      test: /\.svg$/i,
      type: 'asset',
      resourceQuery: /url/,
    },
  ];

  const sassLoader: RuleSetRule = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: /\.module\.\w+$/i,
            localIdentName: isDev
              ? '[path][name]__[local]--[hash:base64:5]'
              : '[hash:base64:8]',
          },
          sourceMap: isDev,
        },
      },
      'sass-loader',
    ],
  };

  const typescriptLoader: RuleSetRule = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  return [sassLoader, typescriptLoader, ...svgLoaders];
};
