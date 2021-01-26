import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs';

import { Pill } from './index';

const stories = storiesOf('Pill', module);

stories.addDecorator(withKnobs);
stories.addDecorator(withInfo);
stories.addParameters({ info: { inline: true } });

stories.add('Pill', () => {
  const content = text('Pill Content', 'Example Pill');

  return <Pill>{content}</Pill>;
});
