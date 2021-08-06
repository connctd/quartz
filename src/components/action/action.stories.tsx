import React from 'react';
import { Meta } from '@storybook/react';

import Action from './index';

export default {
  component: Action,
  title: 'Components/Action',
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['add', 'delete']
    },
    onClick: {
      action: 'onClick',
      table: { disable: true }
    }
  }
} as Meta;

const Template = (args) => <Action {...args} />;

export const Add = Template.bind({});
Add.args = { type: 'add', label: 'Create App' };

export const Delete = Template.bind({});
Delete.args = { type: 'delete', label: 'Delete App' };
