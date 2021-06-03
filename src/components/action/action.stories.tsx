import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { Action } from './index';

const stories = storiesOf('Action', module);

stories.addDecorator(withInfo);
stories.addDecorator(withKnobs);

stories.add('Default', () => {
  const label = text('Label', 'Create an App');
  const type = select('Type', ['add', 'delete'], 'add');

  return (
    <Action
      type={type}
      onClick={action('Clicked')}
      label={label}
    />
  );
});
