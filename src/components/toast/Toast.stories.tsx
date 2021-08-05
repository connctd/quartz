import React from 'react';
import { Meta } from '@storybook/react';

import SpaceInvadersIcon from 'mdi-react/SpaceInvadersIcon';

import Toast from './index';

export default {
  component: Toast,
  title: 'Components/Toast',
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'success', 'danger', 'warning', 'info']
    },
    actionCount: {
      control: { type: 'radio' },
      options: [0, 1, 2]
    },
    onClose: {
      action: 'onClose',
      table: { disable: true }
    },
    onAction: {
      action: 'onAction',
      table: { disable: true }
    }
  }
} as Meta;

export const Default = (args) => {
  const actions = [
    { label: 'Cancel', secondary: true, onClick: () => { args.onAction('Cancel'); } },
    { label: 'Confirm', onClick: () => { args.onAction('Confirm'); } }
  ].slice(2 - args.actionCount, 2);

  return (
    <Toast {...args} actions={actions} />
  );
};
Default.args = {
  closable: true,
  noIcon: false,
  title: 'Toast Notification!',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet.',
  width: '400px',
  variant: 'primary',
  actionCount: 2
};

export const CustomIconAndWidth = Default.bind({});
CustomIconAndWidth.args = {
  ...Default.args,
  icon: SpaceInvadersIcon,
  width: '600px'
};
