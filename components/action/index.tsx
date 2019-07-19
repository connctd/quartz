import * as React from "react"
import styled from "styled-components"
import { defaultTheme, QuartzTheme } from "../theme"

export interface ActionProps {
    label: string
    theme?: QuartzTheme
    onClick: (e: React.MouseEvent) => void
}

const PlusButton = styled.div`
    width: 30px;
    height: 30px;
    background: ${props => props.theme.secondary};
    border-radius: 50%;
    color: white;
    margin-left: 10px;
    text-align: center;
    font-size: 24px;
    position: relative;
    :after {
        position: absolute;
        content: "+";
        top: -2px;
        lefT: 9px;
    }
`

const ActionContainer = styled.a`
    display: flex;
    align-items: center;
    font-size: 16px;
    cursor: pointer;
    user-select: none;
`


export const Action: React.FC<ActionProps> = ({ label, theme = defaultTheme, onClick }) => (
    <ActionContainer onClick={onClick}>
        <span>{label}</span>
        <PlusButton theme={theme} />
    </ActionContainer>
)


Action.defaultProps = {
    theme: defaultTheme,
}
