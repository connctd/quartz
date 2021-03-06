import * as React from "react"
import { keyframes } from "@emotion/core"
import styled from "@emotion/styled"
import { defaultTheme, Themeable } from "../theme"

const loadingAnimation = keyframes`
    from {
        stroke-dashoffset: 1200;
    }
    to {
        stroke-dashoffset: 0;
    }
`

const StyledNN = styled.svg<SpiNNerProps>`
    stroke: ${props => props.theme.primary};
    fill: none;
    display: block;
    .path {
        stroke-dasharray: 1200;
        animation: ${loadingAnimation} infinite ${props => props.speed}s cubic-bezier(0.47, 0, 0.745, 0.715) 0s both;
    }
`

interface SpiNNerProps extends Themeable {
    width?: number
    speed?: number
}

export const SpiNNer: React.FC<SpiNNerProps> = ({
    width = 100, theme, speed, className,
}) => (
    <StyledNN className={className} viewBox="0 0 291 194" height={width / 1.5} width={width} theme={theme} speed={speed}>
        <path className="path" d="M3 193.003V4.5C3 3.671 3.671 3 4.5 3H19.83C20.348 3 20.829 3.26699 21.103 3.70599L136.483 188.669H145.576V4.5C145.576 3.671 146.247 3 147.076 3H162.418C162.936 3 163.417 3.26699 163.69 3.70599L279.072 188.669H288.164V4.5" strokeWidth="5" strokeLinejoin="round" />
    </StyledNN>
)

SpiNNer.defaultProps = {
    theme: defaultTheme,
    width: 100,
    speed: 2,
}
