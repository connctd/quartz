import React from "react"
import styled from "styled-components"
import { defaultTheme, Themeable } from "../theme"


const TableBody = styled.div`
    display: grid;
    grid-template-columns: repeat(${props => props.columns}, 1fr);
    grid-row-gap: 12px;

    div {
        padding: 12px;
        border-bottom: 1px solid ${props => props.theme.light50};
        &:nth-child(${props => props.columns}n) {
            text-align: right;
        }
    }
`

const TableHeader = styled.div`
    display: grid;
    background-color: ${props => props.theme.light30};
    border-radius: 2px;
    border: 1px solid ${props => props.theme.light50};
    grid-template-columns: repeat(${props => props.columns}, 1fr);
    div {
        padding: 6px 12px 3px 12px;
    }
`

const TableContainer = styled.div`
    display: block;
    width: 100%;
`

export interface TableProps extends Themeable {
    headings: string[]
    data: any[] // eslint-disable-line @typescript-eslint/no-explicit-any
}

export const Table: React.FC<TableProps> = React.memo(({ headings, data, theme }) => {
    const flatData = data.reduce((acc, d) => acc.concat(d), [])
    return (
        <TableContainer>
            <TableHeader theme={theme} columns={headings.length}>
                {headings.map(h => <div key={h}>{h}</div>)}
            </TableHeader>
            <TableBody theme={theme} columns={headings.length}>
                {flatData.map(d => <div key={Math.random()}>{d}</div>)}
            </TableBody>
        </TableContainer>
    )
})

Table.defaultProps = {
    theme: defaultTheme,
}

export default Table
