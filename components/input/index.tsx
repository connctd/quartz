import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { defaultTheme, QuartzTheme, Themeable } from '../theme';
import {
  FormElementContainer, FormElementLabel, FormElementDescription, FormElementError
} from '../formelement';

export interface InputProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  id?: string;
  label?: string;
  description?: React.ReactNode;
  prefix?: string;
  hasError?: boolean;
  error?: string;
  icon?: React.ReactNode;
  onClickIcon?: () => void;
  theme?: QuartzTheme;
}

const StyledInput = styled.input<InputProps>`
  padding: 12px 16px 11px;
  width: 100%;
  height: 45px;
  font-size: 14px;
  outline: none;
  border: 1px solid ${({ hasError, theme }) => (hasError ? theme.danger : theme.gray3)};
  border-radius: ${({ prefix, icon }) => {
    if (prefix) {
      return '0 3px 3px 0';
    }

    if (icon) {
      return '3px 0 0 3px';
    }

    return '3px';
  }};

  ${({ disabled, readOnly, theme }) => (disabled || readOnly ? `background-color: ${theme.gray5}` : '')}

  :focus {
    ${({ readOnly, theme }) => (readOnly ? '' : `border-color: ${theme.gray2}`)}
  }

  :disabled {
    background-color: ${({ theme }) => theme.gray5};
    color: ${({ theme }) => theme.gray1};
  }
`;

const StyledInputContainer = styled.div`
  display: inline-flex;
  width: 100%;
`;

const FieldPrefix = styled.div<Themeable>`
  padding: 0 16px;
  margin-right: -1px;
  height: 45px;
  background-color: ${({ theme }) => theme.gray5};
  color: ${({ theme }) => theme.gray1};
  font-size: 14px;
  line-height: 45px;
  border-radius: 3px 0 0 3px;
  border: solid 1px ${({ theme }) => theme.gray3};
`;

const IconButton = styled.button<Themeable & { onClick?: () => void }>`
  appearance: none;
  padding: 8px;
  margin-left: -1px;
  height: 45px;
  width: 45px;
  background-color: ${({ theme }) => theme.green};
  border: solid 1px ${({ theme }) => theme.greenDark};
  border-radius: 0 3px 3px 0;
  outline: none;

  ${({ onClick }) => {
    if (onClick) {
      return css`
        cursor: pointer;

        :hover {
          opacity: 0.9;
        }

        :active {
          opacity: 1;
          padding: 10px;
        }
      `;
    }

    return '';
  }}
`;

export const Input: React.FC<InputProps> = ({
  label,
  id,
  required = false,
  description,
  prefix,
  hasError,
  error,
  theme = defaultTheme,
  icon,
  onClickIcon,
  ...rest
}) => {
  let errorElement;
  let descriptionElement;
  let prefixElement;
  let iconElement;

  if (hasError) {
    errorElement = (
      <FormElementError theme={theme}>
        {error}
      </FormElementError>
    );
  }

  if (description) {
    descriptionElement = (
      <FormElementDescription theme={theme}>
        {description}
      </FormElementDescription>
    );
  }

  if (prefix) {
    prefixElement = (
      <FieldPrefix theme={theme}>
        {prefix}
      </FieldPrefix>
    );
  }

  if (icon) {
    iconElement = (
      <IconButton
        theme={theme}
        onClick={onClickIcon}
      >
        {icon}
      </IconButton>
    );
  }

  const inputElements = (
    <>
      <StyledInputContainer>
        {prefixElement}
        <StyledInput
          id={id}
          hasError={hasError}
          prefix={prefix}
          icon={icon}
          theme={theme}
          {...rest}
        />
        {iconElement}
      </StyledInputContainer>
      {errorElement}
      {descriptionElement}
    </>
  );

  if (label) {
    return (
      <FormElementContainer>
        <FormElementLabel
          htmlFor={id}
          hasError={hasError}
          required={required}
          theme={theme}
        >
          {label}
        </FormElementLabel>
        <div>
          {inputElements}
        </div>
      </FormElementContainer>
    );
  }

  return inputElements;
};
