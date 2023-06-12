import type { ResolveOptions } from 'webpack';
import type { BuildOptions } from './types/config';

export const buildResolvers = (options: BuildOptions): ResolveOptions => {
  const {
    paths: { src },
  } = options;

  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [src, 'node_modules'],
    mainFiles: ['index'],
    alias: {},
  };
};
