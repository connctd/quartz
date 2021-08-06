import React from 'react';
import { Meta } from '@storybook/react';

import Tooltip from './index';

export default {
  component: Tooltip,
  title: 'Components/Tooltip',
  argTypes: {
    position: {
      control: { type: 'radio' },
      options: ['top', 'bottom', 'left', 'right']
    }
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: 300
        }}
      >
        <Story />
      </div>
    )
  ]
} as Meta;

const Template = (args) => <Tooltip {...args} />;
Template.args = { position: 'right', content: 'I am a Tooltip ...', children: 'Hover me!' };

export const Top = Template.bind({});
Top.args = { ...Template.args, position: 'top' };

export const Bottom = Template.bind({});
Bottom.args = { ...Template.args, position: 'bottom' };

export const Right = Template.bind({});
Right.args = { ...Template.args, position: 'right' };

export const Left = Template.bind({});
Left.args = { ...Template.args, position: 'left' };
