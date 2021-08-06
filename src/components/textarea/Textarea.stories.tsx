import React from 'react';
import { Meta } from '@storybook/react';

import Textarea from './index';

export default {
  component: Textarea,
  title: 'Components/Textarea',
  argTypes: {
    onChange: {
      action: 'onChange',
      table: { disable: true }
    }
  }
} as Meta;

const Template = (args) => <Textarea id="Readme" {...args} />;
Template.args = {
  placeholder: '',
  label: '',
  description: '',
  hasError: false,
  error: '',
  disabled: false
};

export const Placeholder = Template.bind({});
Placeholder.args = { ...Template.args, placeholder: 'Readme' };

export const Label = Template.bind({});
Label.args = { ...Template.args, label: 'Readme' };

export const Description = Template.bind({});
Description.args = {
  ...Template.args,
  label: 'Readme',
  description: 'Instructions for you package'
};

export const Error = Template.bind({});
Error.args = {
  ...Template.args,
  label: 'Readme',
  hasError: true,
  error: 'Please provide a comprehensive readme'
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Template.args,
  label: 'Readme',
  disabled: true
};
