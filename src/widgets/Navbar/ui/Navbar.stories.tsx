import { Navbar } from './Navbar';
import { getThemeDecorator } from 'shared/lib/storybook/getThemeDecorator';
import { Theme } from 'entities/theme';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  component: Navbar,
  title: 'Widgets/Navbar',
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Default: Story = {};

export const DarkDefault: Story = {};
DarkDefault.decorators = [getThemeDecorator(Theme.DARK)];
