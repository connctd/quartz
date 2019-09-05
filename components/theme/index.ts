interface Gradient {
    start: string
    end: string
    text: string
}

interface Gradients {
    primary: Gradient
    secondary: Gradient
    light: Gradient
    dark: Gradient
}

interface Alerts {
    success: AlertColors
    error: AlertColors
    warning: AlertColors
}

interface AlertColors {
    cross: string
    text: string
    background: string
}

/**
 * Quartz theme properties used throughout the design system.
 * Defined here so that they can be overwritten by a user of the design system.
 */
export interface QuartzTheme {
    primary: string
    secondary: string
    tertiary: string
    blue: string
    light30: string
    light50: string
    light: string
    dark: string
    dark70: string
    green: string
    error: string
    gradient: Gradients
    alert: Alerts
}

/**
 * Props required for a component that can be themed.
 * ClassName is required to be passed down to a styled component so that it can be
 * styled by a parent.
 */
export interface Themeable {
    theme?: QuartzTheme
    className?: string
    style?: React.CSSProperties
}

export const defaultTheme: QuartzTheme = {
    primary: "#D4550A", // red?
    secondary: "#19A287", // green

    tertiary: "#201E50", // dark purple?
    blue: "#302C70",
    light30: "#F3F3F3",
    light50: "#D8D8D8",
    light: "white",
    dark: "#4A4A4A",
    dark70: "#6B6B6B",
    green: "#19A287",
    error: "#D0021B",
    gradient: {
        primary: {
            start: "#FFE9E7",
            end: "#FF1800",
            text: "white",
        },
        secondary: {
            start: "#6D68C1",
            end: "#302C70",
            text: "white",
        },
        light: {
            start: "#FFFFFF",
            end: "#D8D8D8",
            text: "#6B6B6B",
        },
        dark: {
            start: "",
            end: "",
            text: "",
        },
    },
    alert: {
        success: {
            cross: "#19A287",
            text: "#086654",
            background: "#C5E8E1"
        },
        error: {
            cross: "#F5A623",
            text: "#7E4F00",
            background: "#FCE1B4"
        },
        warning: {
            cross: "#F45B5B",
            text: "#6A0000",
            background: "#FBBDBD"
        }
    },
}

export { default as GlobalStyle } from "./GlobalStyles";