import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import styled from '@emotion/styled';
import { withKnobs, number } from '@storybook/addon-knobs';
import { SpiNNer } from './index';

const stories = storiesOf('Spinner', module);
stories.addDecorator(withInfo);
stories.addDecorator(withKnobs);


const Centered = styled.div`
    text-align: center;
    margin: auto;
    width: 100px;
`;

stories.add('SpiNNer', () => {
  const speed = number('Animation speed', 2, {
    range: true,
    min: 0.5,
    max: 5,
    step: 0.5
  });
  return (
    <Centered>
      <SpiNNer speed={speed} />
    </Centered>
  );
});
