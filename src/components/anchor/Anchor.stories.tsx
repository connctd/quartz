import React from 'react';
import { Meta } from '@storybook/react';

import Anchor from './index';

export default {
  component: Anchor,
  title: 'Components/Anchor'
} as Meta;

const Template = (args) => <Anchor {...args} href="#" />;
Template.args = { primary: false, children: 'Anchor' };

export const Default = Template.bind({});
Default.args = Template.args;

export const Primary = Template.bind({});
Primary.args = { ...Template.args, primary: true };
