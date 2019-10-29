import React from "react"
import styled from "@emotion/styled"
import { Themeable, defaultTheme } from "../theme"

interface AnchorProps extends Themeable {
    href: string
    children: React.ReactNode
    primary?: boolean
    target?: string
}

export const StyledAnchor = styled.a<AnchorProps>`
    color: ${props => (props.primary ? props.theme.primary : props.theme.dark)};
    text-decoration: underline;
`

export const Anchor: React.FC<AnchorProps> = ({ children, ...rest }) => (
    <StyledAnchor {...rest}>{children}</StyledAnchor>
)

Anchor.defaultProps = {
    theme: defaultTheme,
}

export default Anchor
