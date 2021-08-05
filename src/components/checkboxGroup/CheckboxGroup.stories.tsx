import React, { useState } from 'react';
import { Meta } from '@storybook/react';

import CheckboxGroup from './index';
import Checkbox from '../checkbox';

export default {
  component: CheckboxGroup,
  title: 'Components/CheckboxGroup'
} as Meta;

const Template = (args) => {
  const [checkbox1Checked, toggleCheckbox1] = useState(false);
  const [checkbox2Checked, toggleCheckbox2] = useState(false);
  const [checkbox3Checked, toggleCheckbox3] = useState(false);
  const [checkbox4Checked, toggleCheckbox4] = useState(false);
  const [checkbox5Checked, toggleCheckbox5] = useState(false);
  const [checkbox6Checked, toggleCheckbox6] = useState(false);
  const [checkbox7Checked, toggleCheckbox7] = useState(false);

  return (
    <CheckboxGroup {...args}>
      <Checkbox
        id="nietzsche"
        checked={checkbox1Checked}
        onChange={() => { toggleCheckbox1(!checkbox1Checked); }}
      >
        Friedrich Nietzsche
      </Checkbox>
      <Checkbox
        id="confucius"
        checked={checkbox2Checked}
        onChange={() => { toggleCheckbox2(!checkbox2Checked); }}
      >
        Confucius
      </Checkbox>
      <Checkbox
        id="socrates"
        checked={checkbox3Checked}
        onChange={() => { toggleCheckbox3(!checkbox3Checked); }}
      >
        Socrates
      </Checkbox>
      <Checkbox
        id="plato"
        checked={checkbox4Checked}
        onChange={() => { toggleCheckbox4(!checkbox4Checked); }}
      >
        Plato
      </Checkbox>
      <Checkbox
        id="kant"
        checked={checkbox5Checked}
        onChange={() => { toggleCheckbox5(!checkbox5Checked); }}
      >
        Immanuel Kant
      </Checkbox>
      <Checkbox
        id="foucault"
        checked={checkbox6Checked}
        onChange={() => { toggleCheckbox6(!checkbox6Checked); }}
      >
        Michel Foucault
      </Checkbox>
      <Checkbox
        id="kierkegaard"
        checked={checkbox7Checked}
        onChange={() => { toggleCheckbox7(!checkbox7Checked); }}
      >
        Søren Kierkegaard
      </Checkbox>
    </CheckboxGroup>
  );
};
Template.args = { label: '', description: '' };

export const Label = Template.bind({});
Label.args = { ...Template.args, label: 'Favourite Philosophers' };

export const Description = Template.bind({});
Description.args = {
  ...Template.args,
  label: 'Favourite Philosophers',
  description: 'Choose your all-time favourite philosophers'
};
