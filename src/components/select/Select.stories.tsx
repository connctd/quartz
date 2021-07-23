import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';

import Select from './index';

const stories = storiesOf('Select', module);

stories.addDecorator(withKnobs);
stories.addDecorator(withInfo);

stories.add('Placeholder', () => {
  const [value, setValue] = useState('');
  const placeholder = text('Placeholder', 'Select your favourite philisopher');

  return (
    <Select
      placeholder={placeholder}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
        action('onChange')(e);
      }}
    >
      <Select.Option value="plato">Plato</Select.Option>
      <Select.Option value="nietzsche">Nietzsche</Select.Option>
      <Select.Option value="schopenhauer">Schopenhauer</Select.Option>
    </Select>
  );
});

stories.add('Label', () => {
  const [value, setValue] = useState('');
  const label = text('Label', 'Favourite philisopher');

  return (
    <Select
      label={label}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
        action('onChange')(e);
      }}
    >
      <Select.Option value="plato">Plato</Select.Option>
      <Select.Option value="nietzsche">Nietzsche</Select.Option>
      <Select.Option value="schopenhauer">Schopenhauer</Select.Option>
    </Select>
  );
});

stories.add('Description', () => {
  const [value, setValue] = useState('');
  const label = text('Label', 'Favourite philisopher');
  const description = text('Description', 'Please select your all-time favourite philisopher');

  return (
    <Select
      label={label}
      value={value}
      description={description}
      onChange={(e) => {
        setValue(e.target.value);
        action('onChange')(e);
      }}
    >
      <Select.Option value="plato">Plato</Select.Option>
      <Select.Option value="nietzsche">Nietzsche</Select.Option>
      <Select.Option value="schopenhauer">Schopenhauer</Select.Option>
    </Select>
  );
});

stories.add('Error', () => {
  const [value, setValue] = useState('');
  const label = text('Label', 'Favourite philisopher');
  const error = text('Error', 'Field is required');

  return (
    <Select
      label={label}
      value={value}
      hasError={!!error.length}
      error={error}
      onChange={(e) => {
        setValue(e.target.value);
        action('onChange')(e);
      }}
    >
      <Select.Option value="plato">Plato</Select.Option>
      <Select.Option value="nietzsche">Nietzsche</Select.Option>
      <Select.Option value="schopenhauer">Schopenhauer</Select.Option>
    </Select>
  );
});

stories.add('Disabled', () => {
  const [value, setValue] = useState('');
  const label = text('Label', 'Favourite philisopher');

  return (
    <Select
      label={label}
      value={value}
      disabled
      onChange={(e) => {
        setValue(e.target.value);
        action('onChange')(e);
      }}
    >
      <Select.Option value="plato">Plato</Select.Option>
      <Select.Option value="nietzsche">Nietzsche</Select.Option>
      <Select.Option value="schopenhauer">Schopenhauer</Select.Option>
    </Select>
  );
});
