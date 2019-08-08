import * as React from "react"
import styled from "styled-components"
import { defaultTheme, QuartzTheme } from "../theme"

const StyledButtonText = styled.span`
    position: relative;
`

const StyledButton = styled.button`
    background: linear-gradient(180deg, ${props => props.theme.gradient[props.appearance].start} -76.56%, ${props => props.theme.gradient[props.appearance].end} 150%);
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
    color: ${props => props.theme.gradient[props.appearance].text};
    border-radius: 12px;
    border: none;
    padding: 10px 20px;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    cursor: pointer;

    :active {
        background: linear-gradient(180deg, ${props => props.theme.gradient[props.appearance].start} -30%, ${props => props.theme.gradient[props.appearance].end} 150%);
        ${StyledButtonText} {
            top: 1px;
        }
    }

    :hover:not(:active) ${StyledButtonText} {
        top: -1px;
    }
`

export const StyledAnchorButton = styled.a`
    background: linear-gradient(180deg, ${props => props.theme.gradient[props.appearance].start} -76.56%, ${props => props.theme.gradient[props.appearance].end} 150%);
    box-shadow: 0px ${props => (props.small ? "1px 3px" : "3px 10px")} rgba(0, 0, 0, 0.2);
    color: ${props => props.theme.gradient[props.appearance].text};
    border-radius: ${props => (props.small ? 5 : 12)}px;
    border: none;
    padding: ${props => (props.small ? "5px 10px" : "10px 20px")};
    font-style: normal;
    font-weight: 600;
    font-size: ${props => (props.small ? 12 : 18)}px;
    text-decoration: none;
    cursor: pointer;

    :active {
        background: linear-gradient(180deg, ${props => props.theme.gradient[props.appearance].start} -30%, ${props => props.theme.gradient[props.appearance].end} 150%);
        ${StyledButtonText} {
            top: 1px;
        }
    }

    :hover:not(:active) ${StyledButtonText} {
        top: -1px;
    }
`

export enum ButtonAppearance {
    default = "light",
    primary = "primary",
    secondary = "secondary",
}


export interface ButtonProps {
    text: string
    appearance?: ButtonAppearance
    small?: boolean
    type?: "button" | "submit" | "reset"
    onClick?: Function
    /**
     * If supplied the <button> will be replaced with an <a> to conform to correct
     *  HTML5 semantics.
     */
    href?: string
    theme?: QuartzTheme
    style?: React.CSSProperties
    className?: string
}

/**
 * Base button component with which all other helper buttons inherit
 *
 */
export const Button: React.FC<ButtonProps> = ({
    text, appearance, type, onClick, theme = defaultTheme, href, style, className, small,
}) => {
    if (href) {
        return (
            <StyledAnchorButton
              className={className}
              style={style}
              appearance={appearance}
              theme={theme}
              href={href}
              small={small}
            >
                <StyledButtonText>{text}</StyledButtonText>
            </StyledAnchorButton>
        )
    }
    return (
        <StyledButton
          className={className}
          style={style}
          appearance={appearance}
          theme={theme}
          onClick={onClick}
          type={type}
        >
            <StyledButtonText>{text}</StyledButtonText>
        </StyledButton>
    )
}


Button.defaultProps = {
    type: "button",
    appearance: ButtonAppearance.default,
    theme: defaultTheme,
}