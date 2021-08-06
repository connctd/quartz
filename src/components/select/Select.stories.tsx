import React, { useState } from 'react';
import { Meta } from '@storybook/react';

import Select from './index';

export default {
  component: Select,
  title: 'Components/Select',
  argTypes: {
    onChange: {
      action: 'onChange',
      table: { disable: true }
    }
  }
} as Meta;

const Template = (args) => {
  const [value, setValue] = useState('');

  return (
    <Select
      {...args}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
        args.onChange(e);
      }}
    >
      <Select.Option value="plato">Plato</Select.Option>
      <Select.Option value="nietzsche">Nietzsche</Select.Option>
      <Select.Option value="schopenhauer">Schopenhauer</Select.Option>
    </Select>
  );
};
Template.args = {
  placeholder: '',
  label: '',
  description: '',
  hasError: false,
  error: '',
  disabled: false
};

export const Placeholder = Template.bind({});
Placeholder.args = { ...Template.args, placeholder: 'Select your favourite philisopher' };

export const Label = Template.bind({});
Label.args = { ...Template.args, label: 'Favourite philisopher' };

export const Description = Template.bind({});
Description.args = {
  ...Template.args,
  label: 'Favourite philisopher',
  description: 'Please select your all-time favourite philisopher'
};

export const Error = Template.bind({});
Error.args = {
  ...Template.args,
  label: 'Favourite philisopher',
  hasError: true,
  error: 'Field is required'
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Template.args,
  label: 'Favourite philisopher',
  disabled: true
};
