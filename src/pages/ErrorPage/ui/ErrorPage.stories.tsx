import { ErrorPage } from './ErrorPage';
import { getThemeDecorator } from 'shared/lib/storybook/getThemeDecorator';
import { Theme } from 'entities/theme';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Pages/ErrorPage',
  component: ErrorPage,
};

export default meta;
type Story = StoryObj<typeof ErrorPage>;

export const Default: Story = {};

export const DarkDefault: Story = {};
DarkDefault.decorators = [getThemeDecorator(Theme.DARK)];
