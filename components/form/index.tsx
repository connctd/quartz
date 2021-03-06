/*eslint-disable react/jsx-one-expression-per-line */
import * as React from "react"
import { keyframes } from "@emotion/core"
import styled from "@emotion/styled"
import { defaultTheme, QuartzTheme, Themeable } from "../theme"


export interface InputProps
    extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
    theme?: QuartzTheme
    hasError?: boolean
    error?: string
    label?: string
    id?: string
    className?: string
    icon?: React.ReactNode

}

const StyledInput = styled.input<InputProps>`
    padding: 12px 20px;
    box-sizing: border-box;
    width: 100%;
    border: ${props => (props.hasError ? 2 : 1)}px solid ${props => (props.hasError ? props.theme.error : props.theme.light50)};
    font-size: 14px;
    border-radius: ${props => (props.icon ? "3px 0 0 3px" : "3px")};
    ${props => (props.disabled || props.readOnly ? `background-color: ${props.theme.light30}` : "")}
    :focus {
        ${props => (props.readOnly ? "" : `border: 1px solid ${props.theme.green}`)}
    }
    :disabled {
        background-color: ${props => props.theme.light30};
        color: ${props => props.theme.dark};
    }
    :readonly {
        color: black;
    }
`

const StyledInputContainer = styled.div`
    display: inline-flex;
    width: 100%;
    margin-bottom: 8px;
`

const StyledIconContainer = styled.div<InputProps>`
    height: ${props => (props.hasError ? 45 : 43)}px;
    width: ${props => (props.hasError ? 45 : 43)}px;
    background-color: ${props => props.theme.green};
    border-radius: 0 3px 3px 0;
`
const IconSpacing = styled.div`
    padding: 8px;
`

const FieldError = styled.div<Themeable>`
    color: ${props => props.theme.error};
    margin: -10px 0 12px 0;
`

export const Input: React.FC<InputProps> = ({
    label, id, hasError, error, theme, icon, ...rest
}) => (
    <label htmlFor={id}>
        {label}
        <StyledInputContainer>
            <StyledInput id={id} hasError={hasError} icon={icon} theme={theme} {...rest} />
            {icon && (
                <StyledIconContainer theme={theme} hasError={hasError}>
                    <IconSpacing>{icon}</IconSpacing>
                </StyledIconContainer>
            )}
        </StyledInputContainer>
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
    disabled?: boolean
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
// TODO: .attrs({ type: "checkbox" }) => https://github.com/emotion-js/emotion/issues/821
const InvisibleCheckbox = styled.input`
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

const StyledCheckbox = styled.div<InputProps>`
    display: inline-block;
    position: relative;
    width: 16px;
    height: 16px;
    background: ${props => (props.disabled ? props.theme.light30 : props.theme.light30)};
    border: 1px solid ${props => props.theme.light50};
    box-sizing: border-box;
    border-radius: 3px;
    transition: all 150ms;
    margin-right: 10px;
    cursor: pointer;
`

const CheckboxContainer = styled.label<{disabled: boolean, theme: QuartzTheme, }>`
    display: grid;
    grid-template-columns: 22px auto;
    grid-column-gap: 5px;
    padding: 10px 0;

    ${props => (props.disabled ? `color: ${props.theme.dark}` : "")}

    &:focus-within {
        ${StyledCheckbox} {
            border: 1px solid ${props => props.theme.green};
            box-shadow: 0px 0px 3px 0px ${props => props.theme.green};
        }
    }
`

const tickedAnimation = keyframes`
    from {
        stroke-dashoffset: -20;
    }
    to {
        stroke-dashoffset: 50;
    }
`

const Tick = styled.svg<Themeable>`
    position: absolute;
    top: -6px;
    .checkboxTick {
        &--checked {
            stroke: ${props => props.theme.secondary};
            animation: ${tickedAnimation} 1 0.4s ease-out;
            stroke-dasharray: 100;
            stroke-dashoffset: 50;
        }
        &--disabled {
            stroke: ${props => props.theme.dark};
        }
        stroke: none;
    }
`

export const Checkbox: React.FC<CheckboxProps> = ({
    id, children, checked, onChange, disabled = false, theme = defaultTheme, className,
}) => (
    <CheckboxContainer className={className} disabled={disabled} htmlFor={id}>
        <StyledCheckbox
            theme={theme}
            disabled={disabled}
            onClick={(e) => { if (!disabled) onChange(e) }}
        >
            {checked && (
                <Tick width="18" height="20" viewBox="0 0 18 20" fill="none">
                    <path
                        className={`checkboxTick${checked ? "--checked" : ""} ${disabled ? "checkboxTick--disabled" : ""}`}
                        d="M16.3872 1.77417L7.33506 18.3226L1.67749 10.9677"
                        stroke={theme.secondary}
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </Tick>
            )}
        </StyledCheckbox>
        <InvisibleCheckbox type="checkbox" checked={checked} disabled={disabled} onChange={onChange} id={id} />
        {children}
    </CheckboxContainer>
)

Checkbox.defaultProps = {
    theme: defaultTheme,
}


const StyledPill = styled.span<Themeable>`
    border: 1px solid ${props => props.theme.light50};
    display: inline-block;
    border-radius: 5px;
    background: ${props => props.theme.light30};
    padding: 2px 9px;
    margin: 0px 0px 10px 10px;
    color: ${props => props.theme.dark};
`

export interface PillProps {
    theme? : QuartzTheme
    children? : React.ReactNode

}

export const Pill: React.FC<PillProps> = ({
    theme = defaultTheme,
    children,
}) => (
    <StyledPill theme={theme}>{children}</StyledPill>
)

Pill.defaultProps = {
    theme: defaultTheme,
}


const StyledTextArea = styled.textarea<TextAreaProps>`
    padding: 12px 20px;
    margin: 6px 0 12px 0;
    display: inline-block;
    border: ${props => (props.hasError ? 2 : 1)}px solid ${props => (props.hasError ? props.theme.error : props.theme.light50)};
    border-radius: 3px;
    box-sizing: border-box;
    font-size: 14px;
    width: 100%;
    resize: none;
    overflow: auto;
    height: ${props => (props.height ? props.height : "120px")};

    :disabled, :read-only {
        background-color: ${props => props.theme.light30};
        color: ${props => props.theme.dark};
    }

    :focus {
        border: 1px solid ${props => props.theme.green}

    }
`

interface TextAreaProps extends Themeable {
    height?: number
    onChange?: (event) => void
    value?: string
    hasError?: boolean
    error?: string
    disabled?: boolean
}

export const TextArea: React.FC<TextAreaProps> = ({ error, ...rest }) => (
    <div>
        <StyledTextArea {...rest} />
        <FieldError>
            {error}
        </FieldError>
    </div>
)

TextArea.defaultProps = {
    theme: defaultTheme,
}
