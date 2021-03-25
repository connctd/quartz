import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, number } from '@storybook/addon-knobs';
import { Button, ButtonAppearance } from './index';

const stories = storiesOf('Button', module);
stories.addDecorator(withKnobs);
stories.addDecorator(withInfo);
stories.addParameters({ info: { inline: false } });

stories.add('Button', () => {
  const btnText = text('Text', 'Action');
  return <Button onClick={action('onClick')} text={btnText} />;
});

stories.add('Primary', () => {
  const btnText = text('Text', 'Hello World');
  return <Button appearance={ButtonAppearance.primary} onClick={action('onClick')} text={btnText} />;
});

stories.add('Secondary', () => {
  const btnText = text('Text', 'Cancel');
  return <Button appearance={ButtonAppearance.secondary} onClick={action('onClick')} text={btnText} />;
});

stories.add('Anchor Link', () => {
  const btnText = text('Text', 'Cancel');
  const link = text('Link', '#link');
  const spacing = number('Spacing', 15);
  return (
    <div>
      <div style={{ height: 30 }}>
        <Button style={{ marginRight: spacing }} href={link} onClick={action('onClick')} text={btnText} />
        <Button appearance={ButtonAppearance.primary} style={{ marginRight: spacing }} href={link} onClick={action('onClick')} text={btnText} />
        <Button appearance={ButtonAppearance.secondary} href={link} onClick={action('onClick')} text={btnText} />
      </div>
      <div>
        <h2>Small:</h2>
        <Button small style={{ marginRight: spacing }} href={link} onClick={action('onClick')} text={btnText} />
        <Button small appearance={ButtonAppearance.primary} style={{ marginRight: spacing }} href={link} onClick={action('onClick')} text={btnText} />
        <Button small appearance={ButtonAppearance.secondary} href={link} onClick={action('onClick')} text={btnText} />
      </div>
    </div>

  );
});

stories.add('Tabindex', () => (
  <div>
    <Button onClick={action('onClick')} tabIndex={0} text="One" />
    <Button onClick={action('onClick')} tabIndex={0} text="Two" />
    <Button onClick={action('onClick')} tabIndex={0} text="Three" />
    <Button onClick={action('onClick')} tabIndex={-1} text="Five" />
    <Button onClick={action('onClick')} tabIndex={0} text="Four" />
  </div>
));
