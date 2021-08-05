import React from 'react';
import { Meta } from '@storybook/react';

import Alert from './index';

export default {
  component: Alert,
  title: 'Components/Alert',
  argTypes: {
    appearance: {
      control: { type: 'radio' },
      options: ['warning', 'success', 'error']
    }
  }
} as Meta;

const Template = (args) => <Alert {...args} />;
Template.args = { appearance: 'warning', dissmissable: true, children: 'Hello World!' };

export const Warning = Template.bind({});
Warning.args = { ...Template.args, appearance: 'warning' };

export const Success = Template.bind({});
Success.args = { ...Template.args, appearance: 'success' };

export const Error = Template.bind({});
Error.args = { ...Template.args, appearance: 'error' };

export const Dissmissable = Template.bind({});
Dissmissable.args = { ...Template.args, dissmissable: true };
