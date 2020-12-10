import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Paper from './index';

const stories = storiesOf('Paper', module);
stories.addDecorator(withInfo);
stories.addParameters({ info: { inline: true } });

stories.add('Default', () => (
  <Paper>
    <h1>Lorem ipsum dolor sit amet</h1>
    <p>
      Nam nec purus id sapien sodales lobortis. Phasellus maximus lacus quis
      molestie pulvinar. Curabitur dictum nunc non justo tristique laoreet.
      Vivamus ullamcorper, nulla a viverra sagittis, velit dolor varius odio,
      vel tincidunt tellus augue eu eros. Sed mattis odio nec risus maximus, vel
      tincidunt metus consectetur. Pellentesque viverra et tortor ut luctus.
      Donec imperdiet libero nec lacinia congue. In vitae volutpat metus,
      sit amet fermentum urna. Sed viverra id metus a scelerisque.
    </p>
  </Paper>
));
