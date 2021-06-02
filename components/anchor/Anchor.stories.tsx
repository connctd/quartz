import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, number } from '@storybook/addon-knobs';
import { Anchor } from './index';

const stories = storiesOf('Anchors', module);
stories.addDecorator(withKnobs);
stories.addDecorator(withInfo);

stories.add('Anchor Link', () => {
  const anchorText = text('Text', 'Sign Up');
  const spacing = number('Spacing', 15);
  return (
    <div>
      <Anchor style={{ marginRight: spacing }} href="#">{anchorText}</Anchor>
      <Anchor primary style={{ marginRight: spacing }} href="#">{anchorText}</Anchor>
    </div>
  );
});
