import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';

import { CheckboxGroup } from './index';
import { Checkbox } from '../checkbox';

const stories = storiesOf('CheckboxGroup', module);

stories.addDecorator(withKnobs);
stories.addDecorator(withInfo);

stories.add('Label', () => {
  const label = text('Label', 'Favourite Philosophers');

  const [checkbox1Checked, toggleCheckbox1] = useState(false);
  const [checkbox2Checked, toggleCheckbox2] = useState(false);
  const [checkbox3Checked, toggleCheckbox3] = useState(false);
  const [checkbox4Checked, toggleCheckbox4] = useState(false);
  const [checkbox5Checked, toggleCheckbox5] = useState(false);
  const [checkbox6Checked, toggleCheckbox6] = useState(false);
  const [checkbox7Checked, toggleCheckbox7] = useState(false);

  return (
    <CheckboxGroup label={label}>
      <Checkbox
        id="nietzsche"
        checked={checkbox1Checked}
        onChange={() => {
          toggleCheckbox1(!checkbox1Checked);
          action('Checkbox1')(checkbox1Checked);
        }}
      >
        Friedrich Nietzsche
      </Checkbox>
      <Checkbox
        id="confucius"
        checked={checkbox2Checked}
        onChange={() => {
          toggleCheckbox2(!checkbox2Checked);
          action('Checkbox2')(checkbox2Checked);
        }}
      >
        Confucius
      </Checkbox>
      <Checkbox
        id="socrates"
        checked={checkbox3Checked}
        onChange={() => {
          toggleCheckbox3(!checkbox3Checked);
          action('Checkbox3')(checkbox3Checked);
        }}
      >
        Socrates
      </Checkbox>
      <Checkbox
        id="plato"
        checked={checkbox4Checked}
        onChange={() => {
          toggleCheckbox4(!checkbox4Checked);
          action('Checkbox4')(checkbox4Checked);
        }}
      >
        Plato
      </Checkbox>
      <Checkbox
        id="kant"
        checked={checkbox5Checked}
        onChange={() => {
          toggleCheckbox5(!checkbox5Checked);
          action('Checkbox5')(checkbox5Checked);
        }}
      >
        Immanuel Kant
      </Checkbox>
      <Checkbox
        id="foucault"
        checked={checkbox6Checked}
        onChange={() => {
          toggleCheckbox6(!checkbox6Checked);
          action('Checkbox6')(checkbox6Checked);
        }}
      >
        Michel Foucault
      </Checkbox>
      <Checkbox
        id="kierkegaard"
        checked={checkbox7Checked}
        onChange={() => {
          toggleCheckbox7(!checkbox7Checked);
          action('Checkbox7')(checkbox7Checked);
        }}
      >
        Søren Kierkegaard
      </Checkbox>
    </CheckboxGroup>
  );
});

stories.add('Description', () => {
  const label = text('Label', 'Favourite Philosophers');
  const description = text('Description', 'Choose your all-time favourite philosophers');

  const [checkbox1Checked, toggleCheckbox1] = useState(false);
  const [checkbox2Checked, toggleCheckbox2] = useState(false);
  const [checkbox3Checked, toggleCheckbox3] = useState(false);
  const [checkbox4Checked, toggleCheckbox4] = useState(false);
  const [checkbox5Checked, toggleCheckbox5] = useState(false);
  const [checkbox6Checked, toggleCheckbox6] = useState(false);
  const [checkbox7Checked, toggleCheckbox7] = useState(false);

  return (
    <CheckboxGroup
      label={label}
      description={description}
    >
      <Checkbox
        id="nietzsche"
        checked={checkbox1Checked}
        onChange={() => {
          toggleCheckbox1(!checkbox1Checked);
          action('Checkbox1')(checkbox1Checked);
        }}
      >
        Friedrich Nietzsche
      </Checkbox>
      <Checkbox
        id="confucius"
        checked={checkbox2Checked}
        onChange={() => {
          toggleCheckbox2(!checkbox2Checked);
          action('Checkbox2')(checkbox2Checked);
        }}
      >
        Confucius
      </Checkbox>
      <Checkbox
        id="socrates"
        checked={checkbox3Checked}
        onChange={() => {
          toggleCheckbox3(!checkbox3Checked);
          action('Checkbox3')(checkbox3Checked);
        }}
      >
        Socrates
      </Checkbox>
      <Checkbox
        id="plato"
        checked={checkbox4Checked}
        onChange={() => {
          toggleCheckbox4(!checkbox4Checked);
          action('Checkbox4')(checkbox4Checked);
        }}
      >
        Plato
      </Checkbox>
      <Checkbox
        id="kant"
        checked={checkbox5Checked}
        onChange={() => {
          toggleCheckbox5(!checkbox5Checked);
          action('Checkbox5')(checkbox5Checked);
        }}
      >
        Immanuel Kant
      </Checkbox>
      <Checkbox
        id="foucault"
        checked={checkbox6Checked}
        onChange={() => {
          toggleCheckbox6(!checkbox6Checked);
          action('Checkbox6')(checkbox6Checked);
        }}
      >
        Michel Foucault
      </Checkbox>
      <Checkbox
        id="kierkegaard"
        checked={checkbox7Checked}
        onChange={() => {
          toggleCheckbox7(!checkbox7Checked);
          action('Checkbox7')(checkbox7Checked);
        }}
      >
        Søren Kierkegaard
      </Checkbox>
    </CheckboxGroup>
  );
});
