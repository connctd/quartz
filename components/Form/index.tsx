import * as React from "react"
import styled, { keyframes } from "styled-components"
import { defaultTheme, QuartzTheme } from "../theme"



export interface InputProps
    extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
    theme?: QuartzTheme
    error?: boolean
    icon? : string
}

const StyledInput = styled.input`
    padding: 12px 20px;
    display: inline-block;
    border: ${props => (props.error ? 2 : 1)}px solid ${props => (props.error ? props.theme.error : props.theme.light50)};
    border-radius: 3px;
    box-sizing: border-box;
    font-size: 14px;
    width: 100%;

    :focus {
        border: 1px solid ${props => props.theme.green}
    }
`

const StyledInputContainer = styled.div`
    display: flex;
    width: 100%;
    margin: 0 0 12px 0;
`

const StyledIconContainer = styled.div`
    background: ${props => props.theme.blue}
    background-image: url('${props => props.icon}');
    width: 50px;
    background-repeat:no-repeat;
    background-size:contain;
    background-position: center; 
`



export const Input: React.FC<InputProps> = props => (
    <StyledInputContainer>
        <StyledInput {...props} />
        {props.icon ? <StyledIconContainer{...props} > </StyledIconContainer> : ""}
    </StyledInputContainer>
)

Input.defaultProps = {
    type: "text",
    theme: defaultTheme,
}

export interface CheckboxProps {
    id: string
    children: React.ReactNode
    checked: boolean
    onChange: Function
    theme?: QuartzTheme
}

// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
const InvisibleCheckbox = styled.input.attrs({ type: "checkbox" })`
        border: 0;
        clip: rect(0 0 0 0);
        clippath: inset(50%);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        white-space: nowrap;
        width: 1px;
`

const StyledCheckbox = styled.div`
    display: inline-block;
    position: relative;
    width: 16px;
    height: 16px;
    background: ${props => props.theme.light30};
    border: 1px solid ${props => props.theme.light50};
    box-sizing: border-box;
    border-radius: 3px;
    transition: all 150ms;
    margin-right: 10px;
    cursor: pointer;
`

const CheckboxContainer = styled.label`
    display: flex;
    align-items: center;
`

const tickedAnimation = keyframes`
    from {
        stroke-dashoffset: -50;
    }
    to {
        stroke-dashoffset: 50;
    }
`

const Tick = styled.svg`
    position: absolute;
    top: -6px;
    .checkboxTick {
        &--checked {
            stroke: ${props => props.theme.secondary};
            animation: ${tickedAnimation} 1 0.4s ease-in;
            stroke-dasharray: 100;
            stroke-dashoffset: 50;
        }
        stroke: none;
    }
`

export const Checkbox: React.FC<CheckboxProps> = ({
    id, children, checked, onChange, theme = defaultTheme,
}) => (
    <CheckboxContainer htmlFor={id}>
            <StyledCheckbox theme={theme} onClick={() => { onChange() }}>
                {checked && (
                    <Tick width="18" height="20" viewBox="0 0 18 20" fill="none">
                        <path className={`checkboxTick${checked ? "--checked" : ""}`} d="M16.3872 1.77417L7.33506 18.3226L1.67749 10.9677" stroke={theme.secondary} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    </Tick>
                )}
            </StyledCheckbox>
            <InvisibleCheckbox checked={checked} id={id} />
            {children}
    </CheckboxContainer>
)

Checkbox.defaultProps = {
    theme: defaultTheme,
}
