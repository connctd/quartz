import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, number } from '@storybook/addon-knobs';

import Button from './index';

const stories = storiesOf('Button', module);

stories.addDecorator(withKnobs);
stories.addDecorator(withInfo);

stories.add('Primary', () => {
  const btnText = text('Text', 'Submit');

  return (
    <Button appearance="primary" onClick={action('onClick')}>
      {btnText}
    </Button>
  );
});

stories.add('Secondary', () => {
  const btnText = text('Text', 'Cancel');

  return (
    <Button appearance="secondary" onClick={action('onClick')}>
      {btnText}
    </Button>
  );
});

stories.add('Danger', () => {
  const btnText = text('Text', 'Delete');

  return (
    <Button appearance="danger" onClick={action('onClick')}>
      {btnText}
    </Button>
  );
});

stories.add('Block (100% width)', () => {
  const spacing = number('Spacing', 15);

  return (
    <div>
      <Button appearance="primary" onClick={action('onClick')} style={{ marginBottom: spacing }} block>
        Submit
      </Button>
      <Button appearance="secondary" onClick={action('onClick')} style={{ marginBottom: spacing }} block>
        Cancel
      </Button>
      <Button appearance="danger" onClick={action('onClick')} style={{ marginBottom: spacing }} block>
        Delete
      </Button>
    </div>
  );
});

stories.add('Anchor Link', () => {
  const btnText = text('Text', 'Anchor');
  const link = text('Link', '#link');
  const spacing = number('Spacing', 15);

  return (
    <div>
      <Button appearance="primary" style={{ marginRight: spacing }} href={link} onClick={action('onClick')}>
        {btnText}
      </Button>
      <Button appearance="secondary" style={{ marginRight: spacing }} href={link} onClick={action('onClick')}>
        {btnText}
      </Button>
      <Button appearance="danger" href={link} onClick={action('onClick')}>
        {btnText}
      </Button>
    </div>

  );
});

stories.add('Tabindex', () => {
  const spacing = number('Spacing', 15);

  return (
    <div>
      <Button style={{ marginRight: spacing }} onClick={action('onClick')} tabIndex={0}>
        One
      </Button>
      <Button style={{ marginRight: spacing }} onClick={action('onClick')} tabIndex={0}>
        Two
      </Button>
      <Button style={{ marginRight: spacing }} onClick={action('onClick')} tabIndex={0}>
        Three
      </Button>
      <Button style={{ marginRight: spacing }} onClick={action('onClick')} tabIndex={-1}>
        Five
      </Button>
      <Button onClick={action('onClick')} tabIndex={0}>
        Four
      </Button>
    </div>
  );
});
