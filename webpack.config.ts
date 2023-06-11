import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { resolve } from 'path';

import type {
  BuildMode,
  BuildPaths,
  BuildEnv,
} from './config/build/types/config';

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: resolve('src', 'index.tsx'),
    build: resolve('dist'),
    html: resolve('public', 'index.html'),
  };

  const port = env.port ?? 3000;
  const mode: BuildMode = env.mode ?? 'development';
  const isDev = mode === 'development';

  const config = buildWebpackConfig({ mode, paths, isDev, port });

  return config;
};
