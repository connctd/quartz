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

  purple1: string;
  purple2: string;
  purple3: string;

  red1: string;
  red2: string;
  red3: string;

  orange1: string;
  orange2: string;
  orange3: string;

  green1: string;
  green2: string;
  green3: string;

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

  purple1: '#302C70',
  purple2: '#DCDAF1',
  purple3: '#524CB9',

  red1: '#E64C3C',
  red2: '#F2A097',
  red3: '#6A0000',

  orange1: '#DA7132',
  orange2: '#FBE0B4',
  orange3: '#7E4F00',

  green1: '#169882',
  green2: '#E4FBF7',
  green3: '#15502C',

  yellow: '#EADA56',
  blue: '#478DC0',
  magenta: '#531E6B'
};

export const defaultTheme: QuartzTheme = {
  primary: colors.purple1,
  secondary: colors.gray4,
  danger: colors.red1,
  success: colors.green1,
  warning: colors.yellow,
  info: colors.blue,

  gradient: {
    primary: {
      start: colors.purple3,
      end: colors.purple1,
      text: colors.white
    },
    secondary: {
      start: colors.gray5,
      end: colors.gray3,
      text: colors.gray1
    },
    danger: {
      start: colors.red2,
      end: colors.red1,
      text: colors.white
    }
  },

  alert: {
    success: {
      background: colors.green2,
      border: colors.green1,
      text: colors.green3
    },
    error: {
      background: colors.red2,
      border: colors.red1,
      text: colors.red3
    },
    warning: {
      background: colors.orange2,
      border: colors.orange1,
      text: colors.orange3
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
