import React from 'react';
import { Meta } from '@storybook/react';

import Pill from './index';

export default {
  component: Pill,
  title: 'Components/Pill'
} as Meta;

export const Default = (args) => <Pill {...args} />;
Default.args = { children: 'Pill' };
