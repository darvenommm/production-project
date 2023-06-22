import { AppLink, AppLinkTheme } from './AppLink';
import { getThemeDecorator } from 'shared/lib/storybook/getThemeDecorator';
import { Theme } from 'entities/theme';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Shared/AppLink',
  component: AppLink,
  args: {
    to: '/',
    children: 'AppLink',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Inverted: Story = {
  args: {
    theme: AppLinkTheme.INVERTED,
  },
};

export const DarkDefault: Story = {};
DarkDefault.decorators = [getThemeDecorator(Theme.DARK)];

export const InvertedDark: Story = {
  args: {
    theme: AppLinkTheme.INVERTED,
  },
};
InvertedDark.decorators = [getThemeDecorator(Theme.DARK)];
