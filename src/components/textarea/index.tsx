import React from 'react';
import styled from '@emotion/styled';

import { QuartzTheme, defaultTheme } from '../theme';
import {
  FormFieldContainer, FormFieldLabel, FormFieldDescription, FormFieldError
} from '../formfield';

interface TextareaProps
  extends React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  height?: number;
  id?: string;
  value?: string;
  placeholder?: string;
  label?: string;
  description?: React.ReactNode;
  required?: boolean;
  disabled?: boolean;
  hasError?: boolean;
  error?: string;
  resize?: boolean;
  theme?: QuartzTheme;
}

const StyledTextarea = styled.textarea<TextareaProps>`
  display: inline-block;
  margin-bottom: -9px;
  padding: 12px 16px;
  width: 100%;
  height: ${({ height }) => (height || '120px')};
  font-size: 14px;
  border: 1px solid ${({ hasError, theme }) => (hasError ? theme.danger : theme.gray3)};
  border-radius: 3px;
  outline: none;
  overflow: auto;
  resize: ${({ resize }) => (resize ? 'vertical' : 'none')};

  :disabled {
    cursor: not-allowed;
  }

  :focus {
    border: 1px solid ${({ theme }) => theme.gray2}
  }
`;

const LabelDescriptionContainer = styled.div`
  text-align: right;

  @media screen and (max-width: 600px) {
    margin-top: 12px;
    text-align: left;

    ${FormFieldDescription} {
      margin-bottom: 8px;
    }
  }
`;

const Textarea: React.FC<TextareaProps> = ({
  theme = defaultTheme,
  height,
  id,
  value,
  placeholder,
  label,
  description,
  required,
  disabled,
  hasError,
  error,
  resize,
  onChange,
  ...rest
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

  if (hasError && error && error.length) {
    errorElement = (
      <FormFieldError theme={theme}>
        {error}
      </FormFieldError>
    );
  }

  const textAreaElements = (
    <div>
      <StyledTextarea
        theme={theme}
        height={height}
        id={id}
        value={value}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        hasError={hasError}
        resize={resize}
        onChange={onChange}
        {...rest}
      />
      {errorElement}
    </div>
  );

  if (label) {
    return (
      <FormFieldContainer>
        <LabelDescriptionContainer>
          <FormFieldLabel
            htmlFor={id}
            hasError={hasError}
            required={required}
            theme={theme}
          >
            {label}
          </FormFieldLabel>
          {descriptionElement}
        </LabelDescriptionContainer>
        {textAreaElements}
      </FormFieldContainer>
    );
  }

  return textAreaElements;
};

export default Textarea;
