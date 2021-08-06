import React from 'react';
import { Meta } from '@storybook/react';

import { defaultTheme } from '../theme';

import Spinner from './index';

export default {
  component: Spinner,
  title: 'Components/Spinner',
  argTypes: {
    color: {
      control: { type: 'color' }
    },
    bgColor: {
      control: { type: 'color' }
    },
    speed: {
      control: {
        type: 'range', min: 0.1, max: 2, step: 0.1
      }
    }
  },
  decorators: [
    (Story) => (
      <div style={{ textAlign: 'center', margin: 'auto', width: 100 }}>
        <Story />
      </div>
    )
  ]
} as Meta;

export const Default = (args) => <Spinner {...args} />;
Default.args = {
  size: '30px',
  strokeSize: '4px',
  color: defaultTheme.primary,
  bgColor: defaultTheme.gray4,
  speed: 0.5
};
