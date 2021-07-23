import React from 'react';
import styled from '@emotion/styled';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import {
  withKnobs, number, text
} from '@storybook/addon-knobs';

import { defaultTheme } from '../theme';

import Spinner from './index';

const stories = storiesOf('Spinner', module);

stories.addDecorator(withInfo);
stories.addDecorator(withKnobs);

const Centered = styled.div`
  text-align: center;
  margin: auto;
  width: 100px;
`;

stories.add('Default', () => {
  const size = text('Size', '30px');
  const color = text('Color', defaultTheme.primary);
  const bgColor = text('Background Color', defaultTheme.gray4);

  const speed = number('Animation speed', 0.5, {
    range: true,
    min: 0.1,
    max: 2,
    step: 0.1
  });

  return (
    <Centered>
      <Spinner
        size={size}
        color={color}
        bgColor={bgColor}
        speed={speed}
      />
    </Centered>
  );
});
