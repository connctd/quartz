import React, { useState } from "react"
import styled from "styled-components"
import { darken } from "polished"
import { defaultTheme, Themeable } from "../theme"

const AlertContainer = styled.div`

        padding: 10px;
        background-color: ${props => props.theme.alert[props.appearance]};
        border: 2px solid ${props => props.theme.alert[props.appearance] && darken(0.2, props.theme.alert[props.appearance])};
        margin-bottom: 15px;
        border-radius: 12px;
        transition: all 0.2s linear;
`

const AlertContent = styled.div`
    padding: 10px 0px 10px 0px;

    color: ${props => props.theme.alert[props.appearance] && darken(0.2, props.theme.alert[props.appearance])};
`

const DissmissIndicator = styled.span`
    margin-left: 15px;
    color: ${props => props.theme.alert[props.appearance] && darken(0.2, props.theme.alert[props.appearance])};
    font-weight: bold;
    float: right;
    font-size: 22px;
    line-height: 20px;
    cursor: pointer;
    transition: 0.3s;
`

export enum AlertAppearance {
    success = "success",
    error = "error",
    warning = "warning"
}

export interface AlertProps extends Themeable {
    children: React.ReactNode
    appearance? : AlertAppearance
    dissmissable? : boolean
}

export const Alert: React.FC<AlertProps> = ({
    theme = defaultTheme,
    children,
    appearance,
    dissmissable,

}) => {
    const [dismissed, setDismissed] = useState(false)
    const [hidden, setHidden] = useState(false)

    if (!hidden) {
        return (
            <AlertContainer
                style={{ opacity: dismissed ? 0 : 1 }}
                appearance={appearance}
                theme={theme}
            >
                {dissmissable
                && (
                    <DissmissIndicator
                        appearance={appearance}
                        theme={theme}
                        onClick={() => {
                            setDismissed(true)
                            setTimeout(() => setHidden(true), 200)
                        }
                        }
                    >
                        &times;
                    </DissmissIndicator>
                )}
                <AlertContent
                    appearance={appearance}
                    theme={theme}
                >
                    {children}
                </AlertContent>
            </AlertContainer>
        )
    }
    return (null)
}

Alert.defaultProps = {
    appearance: AlertAppearance.warning,
    theme: defaultTheme,
    dissmissable: false,
}
