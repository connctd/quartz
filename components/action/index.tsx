import * as React from "react"
import styled from "@emotion/styled"
import { defaultTheme, Themeable } from "../theme"

export interface ActionProps extends Themeable {
    label: string
    onClick: (e: React.MouseEvent) => void
}

const PlusButton = styled.div<Themeable>`
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
        left: 9px;
    }
`

const ActionContainer = styled.a`
    display: flex;
    align-items: center;
    font-size: 16px;
    cursor: pointer;
    user-select: none;
`


export const Action: React.FC<ActionProps> = ({
    label, theme = defaultTheme, onClick, className,
}) => (
    <ActionContainer className={className} onClick={onClick}>
        <span>{label}</span>
        <PlusButton theme={theme} />
    </ActionContainer>
)


Action.defaultProps = {
    theme: defaultTheme,
}
