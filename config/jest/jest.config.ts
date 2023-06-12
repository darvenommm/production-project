// https://jestjs.io/en/docs/configuration

import { resolve } from 'path';

import type { Config } from 'jest';

const config: Config = {
  clearMocks: true,
  testEnvironment: 'jsdom',
  bail: true,
  moduleFileExtensions: ['tsx', 'ts', 'js', 'jsx', 'json', 'node'],
  rootDir: resolve(),
};

export default config;
