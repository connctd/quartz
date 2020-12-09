import { css } from '@emotion/core';

interface Gradient {
  start: string;
  end: string;
  text: string;
}

interface Gradients {
  primary: Gradient;
  secondary: Gradient;
  light: Gradient;
  dark: Gradient;
  danger: Gradient;
}

interface Alerts {
  success: AlertColors;
  error: AlertColors;
  warning: AlertColors;
}

interface AlertColors {
  cross: string;
  text: string;
  background: string;
}

/**
 * Quartz theme properties used throughout the design system.
 * Defined here so that they can be overwritten by a user of the design system.
 */
export interface QuartzTheme {
  primary: string;
  secondary: string;
  tertiary: string;
  blue: string;
  light30: string;
  light50: string;
  light: string;
  dark: string;
  dark70: string;
  green: string;
  error: string;
  gradient: Gradients;
  alert: Alerts;
}

/**
 * Props required for a component that can be themed.
 * ClassName is required to be passed down to a styled component so that it can be
 * styled by a parent.
 */
export interface Themeable {
  theme?: QuartzTheme;
  className?: string;
  style?: React.CSSProperties;
}

export const defaultTheme: QuartzTheme = {
  primary: '#D4550A', // red?
  secondary: '#19A287', // green

  tertiary: '#201E50', // dark purple?
  blue: '#302C70',
  light30: '#F3F3F3',
  light50: '#D8D8D8',
  light: 'white',
  dark: '#4A4A4A',
  dark70: '#6B6B6B',
  green: '#19A287',
  error: '#D0021B',
  gradient: {
    primary: {
      start: '#FFE9E7',
      end: '#FF1800',
      text: 'white'
    },
    secondary: {
      start: '#6D68C1',
      end: '#302C70',
      text: 'white'
    },
    light: {
      start: '#FFFFFF',
      end: '#D8D8D8',
      text: '#6B6B6B'
    },
    dark: {
      start: '',
      end: '',
      text: ''
    },
    danger: {
      start: '#FF6656',
      end: '#D41400',
      text: 'white'
    }
  },
  alert: {
    success: {
      cross: '#19A287',
      text: '#086654',
      background: '#C5E8E1'
    },
    error: {
      cross: '#F45B5B',
      text: '#6A0000',
      background: '#FBBDBD'
    },
    warning: {
      cross: '#F5A623',
      text: '#7E4F00',
      background: '#FCE1B4'
    }
  }
};

export const GlobalStyle = css`
  @import url('https://fonts.googleapis.com/css?family=Hind:400,600,700&display=swap');

  body,html {
    margin: 0 auto;
    padding: 0;
    height: 100%;
    font-family: 'Hind', Helvetica Neue, Helvetica, Segoe UI, Arial, freesans, sans-serif;
  }

  #root { /* Margin collapse fix  */
    padding: 1px 0 0 0;
    margin: -1px auto 0 auto;
    height: 100%;
  }

  input, select, textarea, button { font-family: 'Hind', Helvetica Neue, Helvetica, Segoe UI, Arial, freesans, sans-serif; outline: none; }

  :focus { /* https://stackoverflow.com/questions/935559/remove-safari-chrome-textinput-textarea-glow */
    outline-color: transparent;
    outline-style: none;
  }

  a {
    color: inherit; /* blue colors for links too */
    text-decoration: inherit; /* no underline */
  }


  * {
    box-sizing: border-box;
  }
`;
