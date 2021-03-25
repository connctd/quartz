import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Logo from './index';

const stories = storiesOf('Logo', module);
stories.addDecorator(withInfo);


stories.add('Logo', () => (
  <div style={{ display: 'grid', gridGap: 10 }}>
    <Logo width={200} />
    <Logo dots width={200} />
  </div>
));
