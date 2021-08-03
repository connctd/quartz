import React from 'react';
import styled from '@emotion/styled';

import { defaultTheme, QuartzTheme, Themeable } from '../theme';

interface TableProps
  extends React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement> {
  children: React.ReactElement<TableHeaderProps | TableBodyProps>[];
  theme?: QuartzTheme;
}

interface TableHeaderProps
  extends React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement> {
  children: React.ReactElement<TableHeaderCellProps>[];
  theme?: QuartzTheme;
}

interface TableHeaderCellProps
  extends React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement> {
  children: React.ReactNode;
  theme?: QuartzTheme;
}

interface TableBodyProps
  extends React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement> {
  children: React.ReactElement<TableRowProps> | React.ReactElement<TableRowProps>[];
  theme?: QuartzTheme;
}

interface TableRowProps extends
  React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement> {
  children: React.ReactElement<TableCellProps>[];
  theme?: QuartzTheme;
}

interface TableCellProps
  extends React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement> {
  children: React.ReactNode;
  theme?: QuartzTheme;
}

interface TableSubComponents {
  Header: React.FunctionComponent<TableHeaderProps>;
  HeaderCell: React.FunctionComponent<TableHeaderCellProps>;
  Body: React.FunctionComponent<TableBodyProps>;
  Row: React.FunctionComponent<TableRowProps>;
  Cell: React.FunctionComponent<TableCellProps>;
}

const StyledTable = styled.table(`
  table-layout: fixed;
  width: 100%;
`);

const StyledTableHeader = styled.thead(`
  background-color: #f2f2f2;
  border-radius: 2px;
`);

const StyledTableHeaderCell = styled.th(`
  padding: 16px;
  text-align: left;
  font-weight: 400;
  border-top: solid 1px #bdbdbd;
  border-bottom: solid 1px #bdbdbd;

  :first-of-type {
    border-left: solid 1px #bdbdbd;
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
  }

  :last-of-type {
    border-right: solid 1px #bdbdbd;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
  }
`);

const StyledTableBody = styled.tbody();

const StyledTableRow = styled.tr();

const StyledTableCell = styled.td<Themeable>(`
  padding: 16px;
  border-bottom: solid 1px #c7c7c7;
`);

const assignThemeToChildren = (theme?: QuartzTheme) => (
  (child: React.ReactElement) => React.cloneElement(child, { theme })
);

const Table: React.FC<TableProps> & TableSubComponents = ({ children, theme, ...rest }) => (
  <StyledTable cellSpacing={0} {...rest}>
    {React.Children.toArray(children).map(assignThemeToChildren(theme))}
  </StyledTable>
);

Table.Header = ({ children, theme, ...rest }) => (
  <StyledTableHeader theme={theme} {...rest}>
    <tr>
      {React.Children.toArray(children).map(assignThemeToChildren(theme))}
    </tr>
  </StyledTableHeader>
);

Table.HeaderCell = ({ children, theme, ...rest }) => (
  <StyledTableHeaderCell theme={theme} {...rest}>
    {children}
  </StyledTableHeaderCell>
);

Table.Body = ({ children, theme, ...rest }) => (
  <StyledTableBody {...rest}>
    {React.Children.toArray(children).map(assignThemeToChildren(theme))}
  </StyledTableBody>
);

Table.Row = ({ children, theme, ...rest }) => (
  <StyledTableRow {...rest}>
    {React.Children.toArray(children).map(assignThemeToChildren(theme))}
  </StyledTableRow>
);

Table.Cell = ({ children, ...rest }) => (
  <StyledTableCell {...rest}>
    {children}
  </StyledTableCell>
);

Table.defaultProps = {
  theme: defaultTheme
};

export default Table;
