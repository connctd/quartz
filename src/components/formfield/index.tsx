import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { defaultTheme, Themeable } from '../theme';

interface FormFieldProps extends Themeable {
  label: string;
  description?: React.ReactNode;
  hasError?: boolean;
  error?: string;
  required?: boolean;
}

export interface LabelProps extends Themeable {
  hasError?: boolean;
  required?: boolean;
}

export const FormFieldLabel = styled.label<LabelProps>`
  margin-top: 12px;
  font-weight: 400;
  text-align: right;

  ${({ hasError, theme }) => (hasError ? css`
    color: ${theme.danger};
  ` : '')}

  ${({ required, theme }) => (required ? css`
    &:after {
      content: " *";
      color: ${theme.danger};
      font-weight: 600;
    }
  ` : '')}
`;

export const FormFieldContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2.5fr;
  grid-column-gap: 8px;
  margin-bottom: 16px;
  font-size: 14px;

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;

    ${FormFieldLabel} {
      text-align: left;
    }
  }
`;

export const FormFieldDescription = styled.div<Themeable>`
  color: ${({ theme }) => theme.gray2};
  margin-top: 8px;
`;

export const FormFieldError = styled.div<Themeable>`
  color: ${({ theme }) => theme.danger};
  margin-top: 8px;
`;

const FormFieldChildContainer = styled.div`
  display: flex;
  align-items: center;
  min-height: 45px;
`;

const FormField: React.FC<FormFieldProps> = ({
  theme = defaultTheme,
  label,
  description,
  hasError,
  error,
  required,
  children
}) => {
  let descriptionElement;
  let errorElement;

  if (description) {
    descriptionElement = (
      <FormFieldDescription theme={theme}>
        {description}
      </FormFieldDescription>
    );
  }

  if (hasError) {
    errorElement = (
      <FormFieldError theme={theme}>
        {error}
      </FormFieldError>
    );
  }

  return (
    <FormFieldContainer>
      <FormFieldLabel
        hasError={hasError}
        required={required}
        theme={theme}
      >
        {label}
      </FormFieldLabel>
      <div>
        <FormFieldChildContainer>
          {children}
        </FormFieldChildContainer>
        {errorElement}
        {descriptionElement}
      </div>
    </FormFieldContainer>
  );
};

export default FormField;
