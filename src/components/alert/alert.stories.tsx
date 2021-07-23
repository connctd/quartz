import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import Alert from './index';

const stories = storiesOf('Alert', module);
stories.addDecorator(withInfo);
stories.addDecorator(withKnobs);

stories.add('Default (Warning)', () => <Alert><span>Hallo Welt!</span></Alert>);

stories.add('Success', () => (
  <Alert appearance="success"><span>Hallo Welt!</span></Alert>
));

stories.add('Error', () => (
  <Alert appearance="error"><span>Hallo Welt!</span></Alert>
));

stories.add('Dissmissable', () => (
  <Alert dissmissable><span>Diese Meldung kann geschlossen werden.</span></Alert>
));
