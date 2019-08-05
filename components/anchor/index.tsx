import React from "react"
import styled from "styled-components"
import { Themeable, defaultTheme } from "../theme"

interface AnchorProps extends Themeable {
    href: string
    children: React.ReactNode
    primary?: boolean,
    target?: string
}

export const StyledAnchor = styled.a`
    color: ${props => (props.primary ? props.theme.primary : props.theme.dark)};
`

export const Anchor: React.FC<AnchorProps> = ({ children, ...rest }) => (
    <StyledAnchor {...rest}>{children}</StyledAnchor>
)

Anchor.defaultProps = {
    theme: defaultTheme,
}

export default Anchor
