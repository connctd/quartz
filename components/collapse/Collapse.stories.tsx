import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Collapse } from './index';

const stories = storiesOf('Collapse', module);
stories.addDecorator(withInfo);
stories.addParameters({ info: { inline: true } });

stories.add('Default', () => {
  const [expanded, setExpanded] = useState(false);

  const toggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Collapse heading="Details" expanded={expanded} toggle={toggle}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum facere sapiente saepe mollitia molestiae,
      pariatur perspiciatis eveniet aliquid fugit non, possimus voluptate consequatur est in ipsam aperiam! Eos, nam fugiat.
    </Collapse>
  );
});
