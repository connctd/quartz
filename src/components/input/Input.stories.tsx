import React, { useState } from 'react';
import { Meta } from '@storybook/react';

import ContentCopyIcon from 'mdi-react/ContentCopyIcon';

import Input from './index';

export default {
  component: Input,
  title: 'Components/Input',
  argTypes: {
    onChange: {
      action: 'onChange',
      table: { disable: true }
    },
    onClickIcon: {
      action: 'onClickIcon',
      table: { disable: true }
    }
  }
} as Meta;

const Template = (args) => {
  const [value, setValue] = useState(args.value);

  return (
    <Input
      {...args}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
        args.onChange(e);
      }}
    />
  );
};
Template.args = {
  value: '',
  placeholder: '',
  label: '',
  description: '',
  hasError: false,
  error: '',
  disabled: false,
  readOnly: false,
  prefix: '',
  icon: undefined
};

export const Placeholder = Template.bind({});
Placeholder.args = { ...Template.args, placeholder: 'Email' };

export const Label = Template.bind({});
Label.args = { ...Template.args, label: 'Email' };

export const Description = Template.bind({});
Description.args = {
  ...Template.args,
  label: 'Email',
  description: 'Enter your private email address'
};

export const Error = Template.bind({});
Error.args = {
  ...Template.args,
  label: 'Email',
  hasError: true,
  error: 'Please enter a valid email'
};

export const Prefix = Template.bind({});
Prefix.args = {
  ...Template.args,
  label: 'Email',
  prefix: 'https://'
};

export const Icon = Template.bind({});
Icon.args = {
  ...Template.args,
  label: 'Email',
  icon: ContentCopyIcon
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Template.args,
  value: 'f06ccfd4-d5ba-4767-b69a-d3eec758e6d4',
  disabled: true
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  ...Template.args,
  value: 'readonly',
  readOnly: true
};
