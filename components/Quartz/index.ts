

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

/**
 * Quartz theme properties used throughout the design system.
 * Defined here so that they can be overwritten by a user of the design system.
 */
export interface QuartzTheme {
    primary: string
    secondary: string
    tertiary: string
    light30: string
    light50: string
    light: string
    dark: string
    green: string
    error: string
    gradient: Gradients
}


export const defaultTheme: QuartzTheme = {
    primary: "#D4550A",
    secondary: "#19A287",
    tertiary: "",
    light30: "#F3F3F3",
    light50: "#D8D8D8",
    light: "white",
    dark: "",
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
            text: "black",
        },
        dark: {
            start: "",
            end: "",
            text: "",
        },
    },
}
