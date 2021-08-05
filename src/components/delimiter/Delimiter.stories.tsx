import React from 'react';
import { Meta } from '@storybook/react';

import Delimiter from './index';

export default {
  component: Delimiter,
  title: 'Components/Delimiter'
} as Meta;

export const Default = (args) => <Delimiter {...args} />;

export const Text = (args) => <Delimiter {...args} />;
Text.args = { text: 'Delimiter' };
