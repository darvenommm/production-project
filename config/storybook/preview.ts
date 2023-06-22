import { getDecorators } from './getDecorators';

import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  // disabled because storybook doesn't get the type for decorator functions
  // eslint-disable-next-line
  // @ts-ignore
  decorators: getDecorators(),
};

export default preview;
