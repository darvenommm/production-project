import type { RuleSetRule } from 'webpack';

export const getSvgLoaders = (): RuleSetRule[] => [
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
