import React from "react"
import styled from "@emotion/styled"
import isPropValid from "@emotion/is-prop-valid"
import { Themeable, defaultTheme } from "../theme"

interface AnchorProps extends Themeable {
    href?: string
    children?: React.ReactNode
    primary?: boolean
    target?: string
    component?: any //eslint-disable-line
    extraProps?: any //eslint-disable-line
}

const StyledAnchor = styled("a", {
    shouldForwardProp: prop => isPropValid(prop) && prop !== "primary",
})<AnchorProps>`
color: ${props => (props.primary ? props.theme.primary : props.theme.dark)};
text-decoration: underline;
`

export const Anchor: React.FC<AnchorProps> = React.memo(({
    children, primary, theme, component = "a", extraProps,
}) => (
    <StyledAnchor
        as={component}
        primary={primary}
        theme={theme}
        {...extraProps}
    >
        {children}
    </StyledAnchor>
))

Anchor.defaultProps = {
    theme: defaultTheme,
}

export default Anchor
