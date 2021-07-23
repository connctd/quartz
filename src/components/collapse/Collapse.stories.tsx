import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Collapse from './index';

const stories = storiesOf('Collapse', module);
stories.addDecorator(withInfo);

stories.add('Default', () => (
  <Collapse heading="Details">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum facere sapiente saepe mollitia molestiae,
    pariatur perspiciatis eveniet aliquid fugit non, possimus voluptate consequatur est in ipsam aperiam! Eos, nam fugiat.
  </Collapse>
));
