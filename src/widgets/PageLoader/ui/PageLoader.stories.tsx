import { PageLoader } from './PageLoader';
import { getThemeDecorator } from 'shared/lib/storybook/getThemeDecorator';
import { Theme } from 'entities/theme';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Widgets/PageLoader',
  component: PageLoader,
};

export default meta;
type Story = StoryObj<typeof PageLoader>;

export const Default: Story = {};

export const DarkDefault: Story = {};
DarkDefault.decorators = [getThemeDecorator(Theme.DARK)];
