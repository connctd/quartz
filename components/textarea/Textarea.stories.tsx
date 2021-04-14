import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';

import { Textarea } from './index';

const stories = storiesOf('Textarea', module);

stories.addDecorator(withKnobs);
stories.addDecorator(withInfo);

stories.add('Placeholder', () => {
  const placeholder = text('Placeholder', 'Readme');

  return (
    <Textarea
      id="Readme"
      placeholder={placeholder}
      onChange={action('onChange')}
    >
      I agree to the Terms of Service
    </Textarea>
  );
});

stories.add('Label', () => {
  const label = text('Label', 'Readme');

  return (
    <Textarea
      id="Readme"
      label={label}
      onChange={action('onChange')}
    >
      I agree to the Terms of Service
    </Textarea>
  );
});

stories.add('Description', () => {
  const label = text('Label', 'Readme');
  const description = text('Description', 'Instructions for you package');

  return (
    <Textarea
      id="Readme"
      label={label}
      description={description}
      onChange={action('onChange')}
    >
      I agree to the Terms of Service
    </Textarea>
  );
});

stories.add('Error', () => {
  const label = text('Label', 'Readme');
  const error = text('Error', 'Please provide a compehensive readme');

  return (
    <Textarea
      id="Readme"
      label={label}
      hasError={!!error.length}
      error={error}
      onChange={action('onChange')}
    >
      I agree to the Terms of Service
    </Textarea>
  );
});

stories.add('Disabled', () => {
  const label = text('Label', 'Readme');

  return (
    <Textarea
      id="Readme"
      label={label}
      disabled
      onChange={action('onChange')}
    >
      I agree to the Terms of Service
    </Textarea>
  );
});
