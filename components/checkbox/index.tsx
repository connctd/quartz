import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

import { QuartzTheme, Themeable, defaultTheme } from '../theme';
import { InputProps } from '../input';

export interface CheckboxProps extends Themeable {
  id: string;
  children?: React.ReactNode;
  checked?: boolean;
  disabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
// TODO: .attrs({ type: "checkbox" }) => https://github.com/emotion-js/emotion/issues/821
const InvisibleCheckbox = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div<InputProps>`
  display: inline-block;
  position: relative;
  width: 30px;
  height: 30px;
  background: ${(props) => (props.disabled ? props.theme.light30 : props.theme.light30)};
  border: 1px solid ${(props) => props.theme.light50};
  box-sizing: border-box;
  border-radius: 3px;
  transition: all 150ms;
  margin-right: 10px;
  cursor: pointer;
`;

const CheckboxContainer = styled.label<{ disabled: boolean, theme: QuartzTheme }>`
  display: grid;
  grid-template-columns: 30px auto;
  grid-column-gap: 8px;
  align-items: center;
  width: 100%;
  margin-bottom: 16px;
  padding: 10px 0;

  ${(props) => (props.disabled ? `color: ${props.theme.dark}` : '')}

  &:focus-within {
    ${StyledCheckbox} {
      border: 1px solid ${(props) => props.theme.green};
      box-shadow: 0px 0px 3px 0px ${(props) => props.theme.green};
    }
  }
`;

const tickedAnimation = keyframes`
  from {
    stroke-dashoffset: -20;
  }
  to {
    stroke-dashoffset: 50;
  }
`;

const Tick = styled.svg<Themeable>`
  position: absolute;
  top: -5px;
  left: -5px;

  .checkboxTick {
    &--checked {
      stroke: ${(props) => props.theme.secondary};
      animation: ${tickedAnimation} 0.6s;
      stroke-dasharray: 100;
      stroke-dashoffset: 50;
    }
    &--disabled {
      stroke: ${(props) => props.theme.dark};
    }
    stroke: none;
  }
`;

export const Checkbox: React.FC<CheckboxProps> = ({
  id,
  children,
  checked,
  onChange,
  disabled = false,
  theme = defaultTheme,
  className,
  ...rest
}) => (
  <CheckboxContainer
    className={className}
    disabled={disabled}
    htmlFor={id}
    theme={theme}
    {...rest}
  >
    <StyledCheckbox
      theme={theme}
      disabled={disabled}
      onClick={(e) => { if (!disabled) onChange(e); }}
    >
      {checked && (
        <Tick width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path
            className={`checkboxTick${checked ? '--checked' : ''} ${disabled ? 'checkboxTick--disabled' : ''}`}
            d="M 35 2 L 20 25 L 12 15"
            stroke={theme.secondary}
            strokeWidth="3"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Tick>
      )}
    </StyledCheckbox>
    <InvisibleCheckbox
      type="checkbox"
      checked={checked}
      disabled={disabled}
      onChange={onChange}
      id={id}
    />
    {children}
  </CheckboxContainer>
);
