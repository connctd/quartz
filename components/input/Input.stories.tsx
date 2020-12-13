import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import { Input } from './index';

const stories = storiesOf('Input', module);

stories.addDecorator(withKnobs);
stories.addDecorator(withInfo);
stories.addParameters({ info: { inline: true } });

stories.add('Input', () => {
  const placeholder: string = text('Placeholder', 'Email');

  return <Input placeholder={placeholder} onChange={action('onChange')} />;
});

stories.add('Input with label', () => {
  const placeholder: string = text('Label', 'Email');

  return <Input label={placeholder} onChange={action('onChange')} />;
});

stories.add('Input Error', () => {
  const placeholder: string = text('Placeholder', 'Email');
  const errored: boolean = boolean('Error', true);

  return <Input hasError={errored} placeholder={placeholder} onChange={action('onChange')} />;
});

stories.add('Input with Icon', () => {
  const placeholder: string = text('Placeholder', 'Email');

  return (
    <div>
      <Input placeholder={placeholder} onChange={action('onChange')} icon={<img width="100%" src="/copy.svg" alt="copy" />} />
      <Input placeholder={placeholder} hasError onChange={action('onChange')} icon={<img width="100%" src="/copy.svg" alt="copy" />} />
    </div>
  );
});

stories.add('Input disabled', () => (
  <div>
    <Input value="f06ccfd4-d5ba-4767-b69a-d3eec758e6d4" onChange={action('onChange')} disabled />
    <Input value="readonly" onChange={action('onChange')} readOnly />
  </div>
));
