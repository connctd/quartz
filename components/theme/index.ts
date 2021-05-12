import { css } from '@emotion/core';

interface Gradient {
  start: string;
  end: string;
  text: string;
}

interface Alert {
  background: string;
  border: string;
  text: string;
}

/**
 * Quartz theme properties used throughout the design system.
 * Defined here so that they can be overwritten by a user of the design system.
 */
export interface QuartzTheme {
  primary: string;
  secondary: string;
  danger: string;
  success: string;
  warning: string;
  info: string;

  gradient: {
    primary: Gradient;
    secondary: Gradient;
    danger: Gradient;
  };

  alert: {
    success: Alert;
    error: Alert;
    warning: Alert;
  };

  black: string;
  white: string;

  gray1: string;
  gray2: string;
  gray3: string;
  gray4: string;
  gray5: string;

  purple: string;
  purpleLight: string;
  purpleDark: string;
  purpleVibrant: string;

  red: string;
  redLight: string;
  redDark: string;

  orange: string;
  orangeLight: string;
  orangeDark: string;

  green: string;
  greenLight: string;
  greenDark: string;

  yellow: string;
  blue: string;
  magenta: string;
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

const colors = {
  black: '#000000',
  white: '#FFFFFF',

  gray1: '#4F4F4F',
  gray2: '#828282',
  gray3: '#BDBDBD',
  gray4: '#E0E0E0',
  gray5: '#F2F2F2',

  purple: '#302C70',
  purpleLight: '#DCDAF1',
  purpleDark: '#201E50',
  purpleVibrant: '#524CB9',

  red: '#E64C3C',
  redLight: '#F2A097',
  redDark: '#6A0000',

  orange: '#DA7132',
  orangeLight: '#FBE0B4',
  orangeDark: '#7E4F00',

  green: '#169882',
  greenLight: '#E4FBF7',
  greenDark: '#15502C',

  yellow: '#EADA56',
  blue: '#478DC0',
  magenta: '#531E6B'
};

export const defaultTheme: QuartzTheme = {
  primary: colors.purple,
  secondary: colors.gray4,
  danger: colors.red,
  success: colors.green,
  warning: colors.yellow,
  info: colors.blue,

  gradient: {
    primary: {
      start: colors.purpleVibrant,
      end: colors.purple,
      text: colors.white
    },
    secondary: {
      start: colors.gray5,
      end: colors.gray3,
      text: colors.gray1
    },
    danger: {
      start: colors.redLight,
      end: colors.red,
      text: colors.white
    }
  },

  alert: {
    success: {
      background: colors.greenLight,
      border: colors.green,
      text: colors.greenDark
    },
    error: {
      background: colors.redLight,
      border: colors.red,
      text: colors.redDark
    },
    warning: {
      background: colors.orangeLight,
      border: colors.orange,
      text: colors.orangeDark
    }
  },

  ...colors
};

export const GlobalStyle = css`
  @import url('https://fonts.googleapis.com/css?family=Hind:400,500,600,700&display=swap');

  body,html {
    margin: 0 auto;
    padding: 0;
    height: 100%;
    font-family: 'Hind', Helvetica Neue, Helvetica, Segoe UI, Arial, freesans, sans-serif;
    font-size: 14px;
  }

  #root { /* Margin collapse fix  */
    padding: 1px 0 0 0;
    margin: -1px auto 0 auto;
    height: 100%;
  }

  input, select, textarea, button { font-family: 'Hind', Helvetica Neue, Helvetica, Segoe UI, Arial, freesans, sans-serif; }

  a {
    color: inherit; /* blue colors for links too */
    text-decoration: inherit; /* no underline */
  }

  * {
    box-sizing: border-box;
  }
`;
