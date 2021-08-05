import React, { useState } from 'react';
import { Meta } from '@storybook/react';

import Checkbox from './index';

export default {
  component: Checkbox,
  title: 'Components/Checkbox',
  argTypes: {
    onChange: {
      action: 'onChange',
      table: { disable: true }
    }
  }
} as Meta;

const Template = (args) => {
  const [checked, check] = useState(false);

  return (
    <Checkbox
      {...args}
      chacked={checked}
      onChange={(event) => { check(!checked); args.onChange(event); }}
    />
  );
};
Template.args = {
  id: 'terms_of_service',
  children: '',
  label: '',
  description: '',
  disabled: false
};

export const ChildLabel = Template.bind({});
ChildLabel.args = { ...Template.args, children: 'I agree to the Terms of Service' };

export const Label = Template.bind({});
Label.args = { ...Template.args, label: 'Terms of Service' };

export const Description = Template.bind({});
Description.args = {
  ...Template.args,
  label: 'Terms of Service',
  description: 'By checking this box you agree to the terms of service'
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Template.args,
  label: 'Terms of Service',
  disabled: true
};
