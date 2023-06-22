import { getStyleLoader } from '../loaders/getStyleLoader';
import { getSvgLoaders } from '../loaders/getSvgLoaders';

import type { RuleSetRule } from 'webpack';
import type { BuildOptions } from './types/config';

export const buildLoaders = (options: BuildOptions): RuleSetRule[] => {
  const { isDev } = options;

  const typescriptLoader: RuleSetRule = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  return [getStyleLoader({ isDev }), typescriptLoader, ...getSvgLoaders()];
};
