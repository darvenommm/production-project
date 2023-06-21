// https://jestjs.io/en/docs/configuration

import { resolve } from 'node:path';

import type { Config } from 'jest';

const config: Config = {
  rootDir: resolve(),
  roots: ['<rootDir>/src'],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.s?[ac]?ss$': 'identity-obj-proxy',
    '\\.svg$': '<rootDir>/__mocks__/svgrMock.tsx',
    '^app/(.*)$': '<rootDir>/src/app/$1',
    '^pages/(.*)$': '<rootDir>/src/pages/$1',
    '^widgets/(.*)$': '<rootDir>/src/widgets/$1',
    '^features/(.*)$': '<rootDir>/src/features/$1',
    '^entities/(.*)$': '<rootDir>/src/entities/$1',
    '^shared/(.*)$': '<rootDir>/src/shared/$1',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  setupFilesAfterEnv: ['<rootDir>/config/jest/setupTests.ts'],
};

export default config;
