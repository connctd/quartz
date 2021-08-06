import React from 'react';
import { Meta } from '@storybook/react';

import Dialog from './index';

export default {
  component: Dialog,
  title: 'Components/Dialog'
} as Meta;

export const Default = (args) => <Dialog {...args} />;
Default.args = {
  heading: 'Details',
  children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum facere sapiente saepe mollitia molestiae.'
};
