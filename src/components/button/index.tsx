import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

import { defaultTheme, QuartzTheme, Themeable } from '../theme';

export type ButtonAppearance = 'primary' | 'secondary' | 'danger';

interface StyledButtonProps extends Themeable {
  theme: QuartzTheme;
  appearance: ButtonAppearance;
  disabled?: boolean;
  block?: boolean;
  as?: any;
}

export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  theme?: QuartzTheme;
  appearance?: ButtonAppearance;
  href?: string;
  component?: any;
  block?: boolean;
  extraProps?: any;
}

const StyledButton = styled.button<StyledButtonProps>`
  padding: 8px 32px;
  width: ${({ block }) => (block ? '100%' : 'auto')};
  background: linear-gradient(
    to bottom,
    ${({ theme, appearance }) => theme.gradient[appearance].start} 0%,
    ${({ theme, appearance }) => theme.gradient[appearance].end} 100%
  );
  color: ${(props) => props.theme.gradient[props.appearance].text};
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  border-radius: 4px;
  border: none;
  cursor: pointer;

  ${({ disabled, theme, appearance }) => {
    if (disabled) {
      return css`
        opacity: 0.7;
        cursor: not-allowed;
      `;
    }

    return css`
      :hover {
        background: linear-gradient(
          180deg,
          ${theme.gradient[appearance].start} 0%,
          ${theme.gradient[appearance].end} 130%
        );
      }

      :active {
        background: linear-gradient(
          180deg,
          ${theme.gradient[appearance].start} -30%,
          ${theme.gradient[appearance].end} 100%
        );
      }
    `;
  }}
`;

export const StyledAnchorButton = styled.a<StyledButtonProps>`
  display: inline-block;
  padding: 8px 32px;
  background: linear-gradient(
    to bottom,
    ${({ theme, appearance }) => theme.gradient[appearance].start} 0%,
    ${({ theme, appearance }) => theme.gradient[appearance].end} 100%
  );
  color: ${(props) => props.theme.gradient[props.appearance].text};
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  font-style: normal;
  text-decoration: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  ${({ disabled, theme, appearance }) => {
    if (disabled) {
      return css`
        opacity: 0.7;
        cursor: not-allowed;
      `;
    }

    return css`
      :hover {
        background: linear-gradient(
          180deg,
          ${theme.gradient[appearance].start} 0%,
          ${theme.gradient[appearance].end} 130%
        );
      }

      :active {
        background: linear-gradient(
          180deg,
          ${theme.gradient[appearance].start} -30%,
          ${theme.gradient[appearance].end} 100%
        );
      }
    `;
  }}
`;

export const Button: React.FC<ButtonProps> = ({
  theme = defaultTheme,
  appearance = 'primary',
  type = 'button',
  component = 'button',
  children,
  onClick,
  href,
  disabled,
  block,
  style,
  className,
  tabIndex,
  extraProps,
  ...rest
}) => {
  if (href) {
    return (
      <StyledAnchorButton
        theme={theme}
        appearance={appearance}
        href={href}
        block={block}
        className={className}
        style={style}
        tabIndex={tabIndex}
        {...extraProps}
      >
        {children}
      </StyledAnchorButton>
    );
  }

  return (
    <StyledButton
      theme={theme}
      appearance={appearance}
      type={type}
      onClick={onClick}
      disabled={disabled}
      block={block}
      className={className}
      style={style}
      tabIndex={tabIndex}
      as={component}
      {...extraProps}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};
