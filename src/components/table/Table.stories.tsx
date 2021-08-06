import React from 'react';
import { Meta } from '@storybook/react';

import Table from './index';

export default {
  component: Table,
  title: 'Components/Table'
} as Meta;

export const Default = () => (
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
);
