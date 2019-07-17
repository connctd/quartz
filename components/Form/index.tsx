import * as React from "react"
import styled from "styled-components"
import { defaultTheme, QuartzTheme } from "../Quartz"

export interface InputProps
    extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
    theme?: QuartzTheme
}

const StyledInput = styled.input`
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid ${props => props.theme.light30};
    border-radius: 3px;
    box-sizing: border-box;
    font-size: 14px;

    :focus {
        border-color: ${props => props.theme.green}
    }
`

export const Input: React.FC<InputProps> = (props) => {

    return (
        <StyledInput {...props} />
    )
}

Input.defaultProps = {
    type: "text",
    theme: defaultTheme,
}
