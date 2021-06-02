import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';

import { Input } from './index';

const stories = storiesOf('Input', module);

stories.addDecorator(withKnobs);
stories.addDecorator(withInfo);

stories.add('Placeholder', () => {
  const placeholder = text('Placeholder', 'Email');

  return (
    <Input
      placeholder={placeholder}
      onChange={action('onChange')}
    />
  );
});

stories.add('Label', () => {
  const label = text('Label', 'Email');

  return (
    <Input
      label={label}
      onChange={action('onChange')}
    />
  );
});

stories.add('Description', () => {
  const label = text('Label', 'Email');
  const description = text('Description', 'Enter your private email address');

  return (
    <Input
      label={label}
      description={description}
      onChange={action('onChange')}
    />
  );
});

stories.add('Error', () => {
  const label = text('Label', 'Email');
  const error = text('Error', 'Please enter a valid email');

  return (
    <Input
      label={label}
      hasError={!!error.length}
      error={error}
      onChange={action('onChange')}
    />
  );
});

stories.add('Prefix', () => {
  const label = text('Label', 'Homepage');
  const prefix = text('Prefix', 'https://');

  return (
    <Input
      label={label}
      prefix={prefix}
      onChange={action('onChange')}
    />
  );
});

stories.add('Icon', () => (
  <Input
    icon={<img width="100%" src="/copy.svg" alt="copy" />}
    onClickIcon={action('onClickIcon')}
    onChange={action('onChange')}
  />
));

stories.add('Disabled', () => (
  <Input value="f06ccfd4-d5ba-4767-b69a-d3eec758e6d4" onChange={action('onChange')} disabled />
));

stories.add('Readonly', () => (
  <Input value="readonly" onChange={action('onChange')} readOnly />
));
