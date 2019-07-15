import * as React from "react"
import styled from "styled-components"


interface DefaultThemes {
    [key: string]: ButtonTheme
}

export interface ButtonTheme {
    gradient: string[]
    color: string
}

export const defaultThemes: DefaultThemes = {
    orange: {
        color: "white",
        gradient: ["#FFE9E7", "#FF1800"],
    },
    purple: {
        color: "white",
        gradient: ["#6D68C1", "#302C70"],
    },
    grey: {
        color: "#6B6B6B",
        gradient: ["#FFFFFF", "#D8D8D8"],
    },
}


const StyledButtonText = styled.span`
    position: relative;
`

const StyledButton = styled.button`
    background: linear-gradient(180deg, ${props => props.theme.gradient[0]} -76.56%, ${props => props.theme.gradient[1]} 150%);
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
    color: ${props => props.theme.color};
    border-radius: 12px;
    border: none;
    padding: 10px 20px;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    cursor: pointer;

    :active {
        background: linear-gradient(180deg, ${props => props.theme.gradient[0]} -30%, ${props => props.theme.gradient[1]} 150%);
        ${StyledButtonText} {
            top: 1px;
        }
    }

    :hover:not(:active) ${StyledButtonText} {
        top: -1px;
    }
`

const StyledAnchorButton = styled.a`
    background: linear-gradient(180deg, ${props => props.theme.gradient[0]} -76.56%, ${props => props.theme.gradient[1]} 150%);
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
    color: ${props => props.theme.color};
    border-radius: 12px;
    border: none;
    padding: 10px 20px;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    text-decoration: none;
    cursor: pointer;

    :active {
        background: linear-gradient(180deg, ${props => props.theme.gradient[0]} -30%, ${props => props.theme.gradient[1]} 150%);
        ${StyledButtonText} {
            top: 1px;
        }
    }

    :hover:not(:active) ${StyledButtonText} {
        top: -1px;
    }
`


interface ButtonProps {
    text: string
    type?: "button" | "submit" | "reset"
    onClick?: Function
    /**
     * If supplied the <button> will be replaced with an <a> to conform to correct
     *  HTML5 semantics.
     */
    href?: string
    theme?: ButtonTheme
    style?: React.CSSProperties
}

/**
 * Base button component with which all other helper buttons inherit
 *
 */
export const Button: React.FC<ButtonProps> = ({
    text, type, onClick, theme, href, style,
}) => {
    if (href) {
        return (
            <StyledAnchorButton style={style} theme={theme} href={href}>
                <StyledButtonText>{text}</StyledButtonText>
            </StyledAnchorButton>
        )
    }
    return (
        <StyledButton style={style} theme={theme} onClick={onClick} type={type}>
            <StyledButtonText>{text}</StyledButtonText>
        </StyledButton>
    )
}


Button.defaultProps = {
    type: "button",
    theme: defaultThemes.grey,
}

export const ButtonPrimary: React.FC<ButtonProps> = props => (
    <Button {...props} />
)

ButtonPrimary.defaultProps = {
    theme: defaultThemes.orange,
}

export const ButtonSecondary: React.FC<ButtonProps> = props => (
    <Button {...props} />
)

ButtonSecondary.defaultProps = {
    theme: defaultThemes.purple,
}
