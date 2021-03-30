import * as React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

import { defaultTheme, QuartzTheme, Themeable } from '../theme';

const StyledButtonText = styled.span`
  position: relative;
`;

interface StyledButtonProps extends Themeable {
  theme: QuartzTheme;
  appearance: ButtonAppearance;
  disabled?: boolean;
  small?: boolean;
  href?: string;
  children?: React.ReactNode;
  text?: string;
  tabIndex?: number;
}

const StyledButton = styled.button<StyledButtonProps>`
  background: linear-gradient(
    180deg,
    ${(props) => props.theme.gradient[props.appearance].start} -76.56%,
    ${(props) => props.theme.gradient[props.appearance].end} 150%
  );
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
  color: ${(props) => props.theme.gradient[props.appearance].text};
  border-radius: 12px;
  border: none;
  padding: 10px 20px;
  text-align: center;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;

  ${(props) => (props.disabled ? css(`
    opacity: 0.7;
    cursor: not-allowed;
  `) : css(`
    :active {
      background: linear-gradient(
        180deg,
        ${props.theme.gradient[props.appearance].start} -30%,
        ${props.theme.gradient[props.appearance].end} 150%
      );

      ${StyledButtonText} {
        top: 1px;
      }
    }

    :hover:not(:active) ${StyledButtonText} {
      top: -1px;
    }
  `))};
`;

export const StyledAnchorButton = styled.a<StyledButtonProps>`
  display: inline-block;
  background: linear-gradient(
    180deg,
    ${(props) => props.theme.gradient[props.appearance].start} -76.56%,
    ${(props) => props.theme.gradient[props.appearance].end} 150%
  );
  box-shadow: 0px ${(props) => (props.small ? '1px 3px' : '3px 10px')} rgba(0, 0, 0, 0.2);
  color: ${(props) => props.theme.gradient[props.appearance].text};
  border-radius: ${(props) => (props.small ? 5 : 12)}px;
  border: none;
  padding: ${(props) => (props.small ? '5px 10px' : '10px 20px')};
  font-style: normal;
  font-weight: 600;
  font-size: ${(props) => (props.small ? 12 : 18)}px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;

  :active {
    background: linear-gradient(
      180deg,
      ${(props) => props.theme.gradient[props.appearance].start} -30%,
      ${(props) => props.theme.gradient[props.appearance].end} 150%
    );

    ${StyledButtonText} {
        top: 1px;
    }
  }

  :hover:not(:active) ${StyledButtonText} {
    top: -1px;
  }
`;

export enum ButtonAppearance {
  primary = 'primary',
  secondary = 'secondary',
  danger = 'danger'
}

export interface ButtonProps {
  text: any;
  appearance?: ButtonAppearance;
  small?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (event) => void;
  /**
     * If supplied the <button> will be replaced with an <a> to conform to correct
     *  HTML5 semantics.
     */
  href?: string;
  theme?: QuartzTheme;
  style?: React.CSSProperties;
  disabled?: boolean;
  className?: string;
  tabIndex?: number;
  component?: any;
  extraProps?: any;
}

/**
 * Base button component with which all other helper buttons inherit
 *
 */
export const Button: React.FC<ButtonProps> = ({
  text,
  appearance = ButtonAppearance.primary,
  type,
  onClick,
  theme = defaultTheme,
  href,
  style,
  className,
  small,
  disabled,
  tabIndex,
  component = 'button',
  extraProps
}) => {
  if (href) {
    return (
      <StyledAnchorButton
        className={className}
        style={style}
        appearance={appearance}
        theme={theme}
        href={href}
        text={text}
        small={small}
        tabIndex={tabIndex}
      >
        <StyledButtonText>{text}</StyledButtonText>
      </StyledAnchorButton>
    );
  }

  return (
    <StyledButton
      className={className}
      style={style}
      appearance={appearance}
      theme={theme}
      onClick={onClick}
      type={type}
      disabled={disabled}
      tabIndex={tabIndex}
      as={component}
      {...extraProps}
    >
      <StyledButtonText>{text}</StyledButtonText>
    </StyledButton>
  );
};

Button.defaultProps = {
  type: 'button',
  appearance: ButtonAppearance.primary,
  theme: defaultTheme
};
