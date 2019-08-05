import * as React from "react"
import styled from "styled-components"
import { Themeable } from "../theme"

export interface PaperProps extends Themeable {
    children: React.ReactNode
    narrow?: boolean
}

const StyledPaper = styled.div`
    width: auto;
    background: #FFFFFF;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
    padding: ${props => (props.narrow ? "15px 24px" : "20px 70px")};
`

export const Paper: React.FC<PaperProps> = ({ children, ...rest }) => (
    <StyledPaper {...rest}>
        {children}
    </StyledPaper>
  )


export default Paper
