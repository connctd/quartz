import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { actions } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';

import { Select } from './index';

const stories = storiesOf('Select', module);

stories.addDecorator(withKnobs);
stories.addDecorator(withInfo);
stories.addParameters({ info: { inline: true } });

const eventsFromNames = actions('onChange');

stories.add('Select', () => (
  <Select placeholder="Select your favourite philisopher" {...eventsFromNames}>
    <Select.Option value="plato">Plato</Select.Option>
    <Select.Option value="nietzsche">Nietzsche</Select.Option>
    <Select.Option value="schopenhauer">Schopenhauer</Select.Option>
  </Select>
));
