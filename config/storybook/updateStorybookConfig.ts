import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import { getStyleLoader } from '../loaders/getStyleLoader';
import { getSvgLoaders } from '../loaders/getSvgLoaders';

import type { Configuration } from 'webpack';

export const updateStorybookConfig = async (
  config: Configuration,
): Promise<Configuration> => {
  // absolute paths
  config.resolve?.modules?.push('../../src');

  // plugins
  config.plugins?.push(new MiniCssExtractPlugin());

  // loaders

  if (config.module?.rules) {
    config.module.rules
      .filter((rule) => {
        return (
          rule instanceof Object &&
          rule.test instanceof RegExp &&
          rule.test.test('.svg')
        );
      })
      .forEach((rule) => {
        if (rule instanceof Object) {
          rule.exclude = /\.svg$/i;
        }
      });
  }

  config.module?.rules?.push(
    getStyleLoader({ isDev: true }),
    ...getSvgLoaders(),
  );

  return config;
};
