/*eslint-disable react/jsx-one-expression-per-line */
import * as React from "react"
import styled, { keyframes } from "styled-components"
import { defaultTheme, QuartzTheme, Themeable } from "../theme"


export interface InputProps
    extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
    theme?: QuartzTheme
    hasError?: boolean
    error?: string
    label?: string
    id?: string
    className?: string
}

const StyledInput = styled.input`
    padding: 12px 20px;
    margin: 6px 0 12px 0;
    display: inline-block;
    border: ${props => (props.hasError ? 2 : 1)}px solid ${props => (props.hasError ? props.theme.error : props.theme.light50)};
    border-radius: 3px;
    box-sizing: border-box;
    font-size: 14px;
    width: 100%;

    :focus {
        border: 1px solid ${props => props.theme.green}
    }
`

const FieldError = styled.div`
    color: ${props => props.theme.error};
    margin: -10px 0 12px 0;
`

export const Input: React.FC<InputProps> = ({
 label, id, error, ...rest
}) => (
    <label htmlFor={id}>
        {label}
        <StyledInput id={id} name={id} {...rest} />
        <FieldError>
            {error}
        </FieldError>
    </label>
)

Input.defaultProps = {
    type: "text",
    theme: defaultTheme,
}

export interface CheckboxProps extends Themeable {
    id: string
    children?: React.ReactNode
    checked?: boolean
    onChange: ((event: React.ChangeEvent<HTMLInputElement>) => void)
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
    display: grid;
    grid-template-columns: 22px auto;
    grid-column-gap: 5px;
    padding: 10px 0;

    &:focus-within {
        ${StyledCheckbox} {
            border: 1px solid ${props => props.theme.green};
        }
    }
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
    id, children, checked, onChange, theme = defaultTheme, className,
}) => (
    <CheckboxContainer className={className} htmlFor={id}>
            <StyledCheckbox theme={theme} onClick={(e) => { onChange(e) }}>
                {checked && (
                    <Tick width="18" height="20" viewBox="0 0 18 20" fill="none">
                        <path className={`checkboxTick${checked ? "--checked" : ""}`} d="M16.3872 1.77417L7.33506 18.3226L1.67749 10.9677" stroke={theme.secondary} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    </Tick>
                )}
            </StyledCheckbox>
            <InvisibleCheckbox checked={checked} onChange={onChange} id={id} />
            {children}
    </CheckboxContainer>
)

Checkbox.defaultProps = {
    theme: defaultTheme,
}


const StyledTextArea = styled.textarea`
    padding: 12px 20px;
    margin: 6px 0 12px 0;
    display: inline-block;
    border: ${props => (props.error ? 2 : 1)}px solid ${props => (props.error ? props.theme.error : props.theme.light50)};
    border-radius: 3px;
    box-sizing: border-box;
    font-size: 14px;
    width: 100%;
    resize: none;
    overflow: auto;
    height: ${props => (props.height ? props.height : "120px")};

    :focus {
        border: 1px solid ${props => props.theme.green}
    }
`

interface TextAreaProps extends Themeable {
    height?: number
    onChange?: ((event: React.ChangeEvent<HTMLInputElement>) => void)
    value?: string
}

export const TextArea: React.FC<TextAreaProps> = props => (
    <StyledTextArea {...props} />
)

TextArea.defaultProps = {
    theme: defaultTheme,
}
