import { Loader } from './Loader';
import { getThemeDecorator } from 'shared/lib/storybook/getThemeDecorator';
import { Theme } from 'entities/theme';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  component: Loader,
  title: 'Shared/Loader',
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Default: Story = {};

export const DarkDefault: Story = {};
DarkDefault.decorators = [getThemeDecorator(Theme.DARK)];
