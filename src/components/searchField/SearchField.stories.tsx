import React, { useState } from 'react';
import { Meta } from '@storybook/react';

import MagnifyIcon from 'mdi-react/MagnifyIcon';

import SearchField from './index';

export default {
  component: SearchField,
  title: 'Components/SearchField',
  argTypes: {
    icon: {
      table: { disable: true }
    },
    onChangeValue: {
      action: 'onChangeValue',
      table: { disable: true }
    },
    onClickIcon: {
      action: 'onClickIcon',
      table: { disable: true }
    }
  }
} as Meta;

export const Default = (args) => {
  const [value, setValue] = useState('');

  return (
    <>
      <div style={{ marginBottom: 16, color: 'gray', fontSize: 10 }}>
        Options: Nietzsche, Schopenhauer, Plato, Socrates, Confucius
      </div>
      <SearchField
        value={value}
        onChangeValue={setValue}
        {...args}
      />
    </>
  );
};
Default.args = {
  placeholder: 'Search for your favourite philosopher',
  options: ['Nietzsche', 'Schopenhauer', 'Plato', 'Socrates', 'Confucius'],
  initExpanded: false,
  autoFocus: false,
  prefix: '',
  maxHeight: 180
};

export const InitExpanded = Default.bind({});
InitExpanded.args = {
  ...Default.args,
  initExpanded: true
};

export const Autofocus = Default.bind({});
Autofocus.args = {
  ...Default.args,
  autoFocus: true
};

export const Prefix = Default.bind({});
Prefix.args = {
  ...Default.args,
  placeholder: '',
  prefix: 'Fav Philosopher:'
};

export const Icon = Default.bind({});
Icon.args = {
  ...Default.args,
  icon: MagnifyIcon,
  onClickIcon: () => null
};
