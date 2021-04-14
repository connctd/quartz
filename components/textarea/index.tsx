import React from 'react';
import styled from '@emotion/styled';

import { Themeable, defaultTheme } from '../theme';
import { FormFieldError } from '../formfield';

interface TextAreaProps extends Themeable {
  height?: number;
  value?: string;
  hasError?: boolean;
  error?: string;
  disabled?: boolean;
  resize?: boolean;
  onChange?: (event) => void;
}

const StyledTextArea = styled.textarea<TextAreaProps>`
  margin-bottom: -9px;
  padding: 12px 20px;
  display: inline-block;
  border: 1px solid ${(props) => (props.hasError ? props.theme.danger : props.theme.gray3)};
  border-radius: 3px;
  box-sizing: border-box;
  font-size: 14px;
  width: 100%;
  resize: ${(props) => (props.resize ? 'vertical' : 'none')};
  overflow: auto;
  height: ${(props) => (props.height ? props.height : '120px')};

  :disabled, :read-only {
    background-color: ${(props) => props.theme.gray5};
    color: ${(props) => props.theme.black};
  }

  :focus {
    border: 1px solid ${(props) => props.theme.success}
  }
`;

export const TextArea: React.FC<TextAreaProps> = ({
  theme = defaultTheme,
  hasError,
  error,
  ...rest
}) => (
  <>
    <StyledTextArea theme={theme} hasError={hasError} {...rest} />
    { hasError && (
      <FormFieldError theme={theme}>
        {error}
      </FormFieldError>
    )}
  </>
);
