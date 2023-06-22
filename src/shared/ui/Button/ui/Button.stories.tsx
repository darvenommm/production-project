import { Button, ThemeButton } from './Button';
import { getThemeDecorator } from 'shared/lib/storybook/getThemeDecorator';
import { Theme } from 'entities/theme';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  component: Button,
  title: 'Shared/Button',
  args: {
    children: 'Button',
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {};

export const Beautiful: Story = {
  args: {
    theme: ThemeButton.BEAUTIFUL,
  },
};

export const DarkDefault: Story = {};
DarkDefault.decorators = [getThemeDecorator(Theme.DARK)];

export const DarkBeautiful: Story = {
  args: {
    theme: ThemeButton.BEAUTIFUL,
  },
};
DarkBeautiful.decorators = [getThemeDecorator(Theme.DARK)];
