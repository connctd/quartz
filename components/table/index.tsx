/* eslint react/no-array-index-key: 0 */
import React from 'react';
import styled from '@emotion/styled';
import { defaultTheme, Themeable } from '../theme';

interface Table extends Themeable {
  columns: number;
}

const TableBody = styled.div<Table>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  grid-row-gap: 12px;

  div {
    padding: 12px;
    border-bottom: 1px solid ${(props) => props.theme.light50};
    &:nth-of-type(${(props) => props.columns}n) {
      text-align: right;
    }
  }
`;
const TableHeader = styled.div<Table>`
  display: grid;
  background-color: ${(props) => props.theme.light30};
  border-radius: 2px;
  border: 1px solid ${(props) => props.theme.light50};
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);

  div {
    padding: 6px 12px 3px 12px;
  }
`;

const TableContainer = styled.div`
  display: block;
  width: 100%;
`;

export interface TableProps extends Themeable {
  headings: string[];
  data: Record<string, any[]>;
}

export const Table: React.FC<TableProps> = React.memo(({ headings, data, theme }) => (
  <TableContainer>
    <TableHeader theme={theme} columns={headings.length}>
      {headings.map((h) => <div key={h}>{h}</div>)}
    </TableHeader>
    <TableBody theme={theme} columns={headings.length}>
      {Object.keys(data).map((id) => data[id].map((field, col) => <div key={`${id}.${col}`}>{field}</div>))}
    </TableBody>
  </TableContainer>
));

Table.defaultProps = {
  theme: defaultTheme
};

export default Table;
