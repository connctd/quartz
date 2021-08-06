import React from 'react';
import { Meta } from '@storybook/react';

import Paper from './index';

export default {
  component: Paper,
  title: 'Components/Paper'
} as Meta;

const Template = (args) => <Paper {...args} />;
Template.args = {
  warning: false,
  danger: false,
  children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum facere sapiente saepe mollitia molestiae.'
};

export const Default = Template.bind({});
Default.args = Template.args;

export const Warning = Template.bind({});
Warning.args = { ...Template.args, warning: true };

export const Danger = Template.bind({});
Danger.args = { ...Template.args, danger: true };
