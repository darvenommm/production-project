/* eslint-disable @typescript-eslint/indent */
import { getThemeDecorator } from '../../src/shared/lib/storybook/getThemeDecorator';
import { getStyleDecorator } from '../../src/shared/lib/storybook/getStyleDecorator';
import { getRouterDecorator } from 'shared/lib/storybook/getRouterDecorator';

export const getDecorators = (): Array<
  (Story: () => JSX.Element) => JSX.Element
> => {
  // bottom to top direction
  return [getThemeDecorator(), getRouterDecorator, getStyleDecorator];
};
