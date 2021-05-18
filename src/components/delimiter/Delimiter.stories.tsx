import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs';

import { Delimiter } from './index';

const stories = storiesOf('Delimiter', module);

stories.addDecorator(withKnobs);
stories.addDecorator(withInfo);

stories.add('Delimiter', () => {
  const textContent = text('Delimiter Text', 'Delimiter');

  return <Delimiter text={textContent} />;
});
