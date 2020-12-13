import React from 'react';
import styled from '@emotion/styled';

import { Themeable, defaultTheme } from '../theme';
import { LabelContainer, FieldError } from '../input';

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
  border: 1px solid ${(props) => (props.hasError ? props.theme.error : props.theme.light50)};
  border-radius: 3px;
  box-sizing: border-box;
  font-size: 14px;
  width: 100%;
  resize: ${(props) => (props.resize ? 'vertical' : 'none')};
  overflow: auto;
  height: ${(props) => (props.height ? props.height : '120px')};

  :disabled, :read-only {
    background-color: ${(props) => props.theme.light30};
    color: ${(props) => props.theme.dark};
  }

  :focus {
    border: 1px solid ${(props) => props.theme.green}
  }
`;

export const TextArea: React.FC<TextAreaProps> = ({
  theme, hasError, error, ...rest
}) => (
  <LabelContainer>
    <StyledTextArea theme={theme} hasError={hasError} {...rest} />
    { hasError && (
      <FieldError theme={theme}>
        {error}
      </FieldError>
    )}
  </LabelContainer>
);

TextArea.defaultProps = {
  theme: defaultTheme
};
