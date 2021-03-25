import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';

import { Tooltip } from './index';

const stories = storiesOf('Tooltip', module);

stories.addDecorator(withKnobs);
stories.addDecorator(withInfo);
stories.addParameters({ info: { inline: false } });

stories.add('Tooltip', () => (
  <Tooltip content="I'm a Tooltip ...">
    Hover me!
  </Tooltip>
));
