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
  width: 16px;
  height: 16px;
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
  grid-template-columns: 22px auto;
  grid-column-gap: 5px;
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
  top: -6px;

  .checkboxTick {
    &--checked {
      stroke: ${(props) => props.theme.secondary};
      animation: ${tickedAnimation} 1 0.4s ease-out;
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
  id, children, checked, onChange, disabled = false, theme = defaultTheme, className
}) => (
  <CheckboxContainer className={className} disabled={disabled} htmlFor={id}>
    <StyledCheckbox
      theme={theme}
      disabled={disabled}
      onClick={(e) => { if (!disabled) onChange(e); }}
    >
      {checked && (
        <Tick width="18" height="20" viewBox="0 0 18 20" fill="none">
          <path
            className={`checkboxTick${checked ? '--checked' : ''} ${disabled ? 'checkboxTick--disabled' : ''}`}
            d="M16.3872 1.77417L7.33506 18.3226L1.67749 10.9677"
            stroke={theme.secondary}
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Tick>
      )}
    </StyledCheckbox>
    <InvisibleCheckbox type="checkbox" checked={checked} disabled={disabled} onChange={onChange} id={id} />
    {children}
  </CheckboxContainer>
);

Checkbox.defaultProps = {
  theme: defaultTheme
};
