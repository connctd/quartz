import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';

import { Checkbox } from './index';

const stories = storiesOf('Checkbox', module);

stories.addDecorator(withKnobs);
stories.addDecorator(withInfo);
stories.addParameters({ info: { inline: false } });

stories.add('Checkbox', () => {
  const [checked, check] = useState(true);

  return (
    <Checkbox
      checked={checked}
      onChange={() => { check(!checked); action('Checked')(checked); }}
      id="terms_of_service"
    >
      I agree to the Terms of Service
    </Checkbox>
  );
});
