import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

import { Themeable, defaultTheme, QuartzTheme } from '../theme';
import { InputProps } from '../input';
import {
  FormElementContainer, FormElementLabel, FormElementDescription
} from '../formelement';

export interface CheckboxProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  id: string;
  label?: string;
  children?: React.ReactNode;
  checked?: boolean;
  description?: string;
  disabled?: boolean;
  theme?: QuartzTheme;
}

const InvisibleCheckbox = styled.input`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  position: absolute;
  margin: -1px;
  padding: 0;
  width: 1px;
  height: 1px;
  border: 0;
  overflow: hidden;
  white-space: nowrap;
`;

const StyledCheckbox = styled.div<InputProps>`
  display: inline-block;
  position: relative;
  margin-top: 7.5px;
  width: 30px;
  height: 30px;
  background: ${({ theme }) => (theme.gray5)};
  border: 1px solid ${({ theme }) => theme.gray3};
  border-radius: 3px;
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

const CheckboxContainer = styled.div<Themeable>`
  height: 38px;

  &:focus-within {
    ${StyledCheckbox} {
      border: 1px solid ${({ theme }) => theme.gray2};
    }
  }
`;

const ChildLabel = styled.label`
  display: inline-block;
  margin-top: 12px;
  margin-left: 8px;
  vertical-align: top;
  font-size: 14px;
`;

const tickedAnimation = keyframes`
  from {
    stroke-dashoffset: -20;
  }
  to {
    stroke-dashoffset: 50;
  }
`;

const Tick = styled.svg<Themeable & { disabled?: boolean }>`
  position: absolute;
  top: -5px;
  left: -5px;

  path {
    stroke: ${({ theme }) => theme.success};
    animation: ${tickedAnimation} 0.6s;
    stroke-dasharray: 100;
    stroke-dashoffset: 50;

    ${({ disabled, theme }) => (disabled ? `stroke: ${theme.gray1};` : '')}
  }
`;

export const Checkbox: React.FC<CheckboxProps> = ({
  theme = defaultTheme,
  id,
  label,
  checked,
  children,
  description,
  onChange,
  disabled = false,
  className,
  ...rest
}) => {
  let tickElement;
  let childLabelElement;
  let descriptionElement;

  if (checked) {
    tickElement = (
      <Tick
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        disabled={disabled}
        theme={theme}
      >
        <path
          d="M 35 2 L 20 25 L 12 15"
          stroke={theme.success}
          strokeWidth="3"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Tick>
    );
  }

  if (children) {
    childLabelElement = (
      <ChildLabel htmlFor={id}>
        {children}
      </ChildLabel>
    );
  }

  if (description) {
    descriptionElement = (
      <FormElementDescription theme={theme}>
        {description}
      </FormElementDescription>
    );
  }

  const invisibleCheckboxElement = (
    <InvisibleCheckbox
      type="checkbox"
      checked={checked}
      disabled={disabled}
      onChange={onChange}
      id={id}
      {...rest}
    />
  );

  const checkboxElements = (
    <>
      <CheckboxContainer theme={theme}>
        {invisibleCheckboxElement}
        <StyledCheckbox
          disabled={disabled}
          onClick={(e) => { if (!disabled && onChange) onChange(e); }}
          theme={theme}
        >
          {tickElement}
        </StyledCheckbox>
        {childLabelElement}
      </CheckboxContainer>
      {descriptionElement}
    </>
  );

  if (label) {
    return (
      <FormElementContainer
        className={className}
        theme={theme}
      >
        <FormElementLabel
          htmlFor={id}
          theme={theme}
        >
          {label}
        </FormElementLabel>
        <div>
          {checkboxElements}
        </div>
      </FormElementContainer>
    );
  }

  return checkboxElements;
};
