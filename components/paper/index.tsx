import * as React from "react"
import styled from "styled-components"

export interface PaperProps {
    children: React.ReactNode
}

const StyledPaper = styled.div`
    width: auto;
    background: #FFFFFF;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
    padding: 20px 70px;
`

export const Paper: React.FC<PaperProps> = ({ children }) => (
    <StyledPaper>
        {children}
    </StyledPaper>
  )


export default Paper
