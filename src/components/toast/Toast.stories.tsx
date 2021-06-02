import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import {
  withKnobs, text, select, boolean
} from '@storybook/addon-knobs';

import SpaceInvadersIcon from 'mdi-react/SpaceInvadersIcon';

import { Toast } from './index';

const stories = storiesOf('Toast', module);

stories.addDecorator(withKnobs);
stories.addDecorator(withInfo);

stories.add('Default', () => {
  const closable = boolean('Closable', true);
  const noIcon = boolean('No Icon', false);
  const title = text('Title', 'Toast Notification!');
  const description = text('Description', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet.');
  const width = text('Width', '400px');
  const variant = select('Variant', {
    Primary: 'primary',
    Success: 'success',
    Danger: 'danger',
    Warning: 'warning',
    Info: 'info'
  }, 'primary');
  const actionCount = select('Actions', {
    None: 0,
    Confirm: 1,
    'Cancel & Confirm': 2
  }, 2);

  const actions = [
    { label: 'Cancel', secondary: true, onClick: () => { action('Cancel'); } },
    { label: 'Confirm', onClick: () => { action('Confirm'); } }
  ].slice(2 - actionCount, 2);

  return (
    <Toast
      closable={closable}
      noIcon={noIcon}
      variant={variant}
      width={width}
      title={title}
      description={description}
      actions={actions}
    />
  );
});

stories.add('Custom Icon & Width', () => {
  const closable = boolean('Closable', true);
  const noIcon = boolean('No Icon', false);
  const title = text('Title', 'Toast Notification!');
  const description = text('Description', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet.');
  const width = text('Width', '600px');
  const variant = select('Variant', {
    Primary: 'primary',
    Success: 'success',
    Danger: 'danger',
    Warning: 'warning',
    Info: 'info'
  }, 'primary');
  const actionCount = select('Actions', {
    None: 0,
    Confirm: 1,
    'Cancel & Confirm': 2
  }, 2);

  const actions = [
    { label: 'Cancel', secondary: true, onClick: () => { action('Cancel'); } },
    { label: 'Confirm', onClick: () => { action('Confirm'); } }
  ].slice(2 - actionCount, 2);

  return (
    <Toast
      closable={closable}
      noIcon={noIcon}
      icon={SpaceInvadersIcon}
      variant={variant}
      width={width}
      title={title}
      description={description}
      actions={actions}
    />
  );
});
