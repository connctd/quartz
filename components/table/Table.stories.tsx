import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';

import { Table } from './index';

const stories = storiesOf('Table', module);

stories.addDecorator(withKnobs);
stories.addDecorator(withInfo);

stories.add('Table', () => (
  <Table>
    <Table.Header>
      <Table.HeaderCell>Header One</Table.HeaderCell>
      <Table.HeaderCell>Header Two</Table.HeaderCell>
      <Table.HeaderCell>Header Three</Table.HeaderCell>
    </Table.Header>
    <Table.Body>
      <Table.Row>
        <Table.Cell>Cell One</Table.Cell>
        <Table.Cell>Cell Two</Table.Cell>
        <Table.Cell>Cell Three</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Cell Four</Table.Cell>
        <Table.Cell>Cell Five</Table.Cell>
        <Table.Cell>Cell Six</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
));
