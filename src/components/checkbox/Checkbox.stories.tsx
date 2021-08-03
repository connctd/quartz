import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';

import Checkbox from './index';

const stories = storiesOf('Checkbox', module);

stories.addDecorator(withKnobs);
stories.addDecorator(withInfo);

stories.add('Child Label', () => {
  const [checked, check] = useState(false);

  return (
    <Checkbox
      id="terms_of_service"
      checked={checked}
      onChange={() => { check(!checked); action('Checked')(checked); }}
    >
      I agree to the Terms of Service
    </Checkbox>
  );
});

stories.add('Label', () => {
  const [checked, check] = useState(false);
  const label = text('Label', 'Terms of Service');

  return (
    <Checkbox
      id="terms_of_service"
      label={label}
      checked={checked}
      onChange={() => { check(!checked); action('Checked')(checked); }}
    />
  );
});

stories.add('Description', () => {
  const [checked, check] = useState(false);
  const label = text('Label', 'Terms of Service');
  const description = text('Description', 'By checking this box you agree to the terms of service');

  return (
    <Checkbox
      id="terms_of_service"
      label={label}
      checked={checked}
      description={description}
      onChange={() => { check(!checked); action('Checked')(checked); }}
    />
  );
});

stories.add('Disabled', () => {
  const label = text('Label', 'Terms of Service');

  return (
    <Checkbox
      id="terms_of_service"
      label={label}
      checked
      disabled
      onChange={() => null}
    />
  );
});
