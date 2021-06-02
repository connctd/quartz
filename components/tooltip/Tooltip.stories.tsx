import React from 'react';
import styled from '@emotion/styled';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs';

import { Tooltip } from './index';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 300px;
`;

const stories = storiesOf('Tooltip', module);

stories.addDecorator(withKnobs);
stories.addDecorator(withInfo);

stories.add('Top', () => {
  const content = text('Content', 'I am a Tooltip ...');
  const position = 'top';

  return (
    <Container>
      <Tooltip
        position={position}
        content={content}
      >
        Hover me!
      </Tooltip>
    </Container>
  );
});

stories.add('Right', () => {
  const content = text('Content', 'I am a Tooltip ...');
  const position = 'right';

  return (
    <Container>
      <Tooltip
        position={position}
        content={content}
      >
        Hover me!
      </Tooltip>
    </Container>
  );
});

stories.add('Bottom', () => {
  const content = text('Content', 'I am a Tooltip ...');
  const position = 'bottom';

  return (
    <Container>
      <Tooltip
        position={position}
        content={content}
      >
        Hover me!
      </Tooltip>
    </Container>
  );
});

stories.add('Left', () => {
  const content = text('Content', 'I am a Tooltip ...');
  const position = 'left';

  return (
    <Container>
      <Tooltip
        position={position}
        content={content}
      >
        Hover me!
      </Tooltip>
    </Container>
  );
});
