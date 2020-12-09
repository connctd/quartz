import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { Alert, AlertAppearance } from './index';

const stories = storiesOf('Alert', module);
stories.addDecorator(withInfo);
stories.addDecorator(withKnobs);
stories.addParameters({ info: { inline: true } });

stories.add('Default (Warning)', () => <Alert><span>Hallo Welt!</span></Alert>);

stories.add('Success', () => <Alert appearance={AlertAppearance.success}><span>Hallo Welt!</span></Alert>);

stories.add('Error', () => <Alert appearance={AlertAppearance.error}><span>Hallo Welt!</span></Alert>);

stories.add('Dissmissable', () => <Alert dissmissable><span>Diese Meldung kann geschlossen werden.</span></Alert>);
