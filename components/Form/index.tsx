import * as React from "react"
import styled from "styled-components"
import { defaultTheme, QuartzTheme } from "../Quartz"

export interface InputProps
    extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
    theme?: QuartzTheme
    error?: boolean
}

const StyledInput = styled.input`
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: ${props => (props.error ? 2 : 1)}px solid ${props => (props.error ? props.theme.error : props.theme.light30)};
    border-radius: 3px;
    box-sizing: content-box;
    font-size: 14px;

    :focus {
        border: 1px solid ${props => props.theme.green}
    }
`

export const Input: React.FC<InputProps> = props => (
    <StyledInput {...props} />
)

Input.defaultProps = {
    type: "text",
    theme: defaultTheme,
}
