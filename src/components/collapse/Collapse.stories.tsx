import React from 'react';
import { Meta } from '@storybook/react';

import Collapse from './index';

export default {
  component: Collapse,
  title: 'Components/Collapse'
} as Meta;

export const Default = (args) => <Collapse {...args} />;
Default.args = {
  heading: 'Details',
  children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum facere sapiente saepe mollitia molestiae.'
};
