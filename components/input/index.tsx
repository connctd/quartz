/* eslint-disable react/jsx-one-expression-per-line */
import * as React from 'react';
import styled from '@emotion/styled';
import { defaultTheme, QuartzTheme, Themeable } from '../theme';

export interface InputProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  theme?: QuartzTheme;
  hasError?: boolean;
  error?: string;
  label?: string;
  id?: string;
  description?: string;
  prefix?: string;
  className?: string;
  icon?: React.ReactNode;
  onClickIcon?: () => void;
}

export const LabelContainer = styled.label<React.LabelHTMLAttributes<HTMLLabelElement>>`
  display: inline-block;
  margin-bottom: 16px;
  width: 100%;
`;

const StyledInput = styled.input<InputProps>`
  padding: 0 16px;
  box-sizing: border-box;
  width: 100%;
  height: 45px;
  border: 1px solid ${(props) => (props.hasError ? props.theme.error : props.theme.light50)};
  font-size: 14px;
  border-radius: ${(props) => {
    if (props.prefix) {
      return '0 3px 3px 0';
    }

    if (props.icon) {
      return '3px 0 0 3px';
    }

    return '3px';
  }};

  ${(props) => (props.disabled || props.readOnly ? `background-color: ${props.theme.light30}` : '')}
  :focus {
    ${(props) => (props.readOnly ? '' : `border: 1px solid ${props.theme.green}`)}
  }
  :disabled {
    background-color: ${(props) => props.theme.light30};
    color: ${(props) => props.theme.dark};
  }
  :readonly {
    color: black;
  }
`;

const StyledInputContainer = styled.div`
  display: inline-flex;
  width: 100%;
`;

const StyledPrefixContainer = styled.div<Themeable>`
  padding: 0 16px;
  margin-right: -1px;
  height: 45px;
  background-color: ${(props) => props.theme.light50};
  color: ${(props) => props.theme.dark};
  line-height: 49px;
  border-radius: 3px 0 0 3px;
`;

const StyledIconContainer = styled.div<InputProps>`
  height: 45px;
  width: 45px;
  background-color: ${(props) => props.theme.green};
  border-radius: 0 3px 3px 0;

  ${({ onClick }) => (onClick ? 'cursor: pointer;' : '')}
`;

const IconSpacing = styled.div`
  padding: 8px;
`;

export const FieldDescription = styled.div<Themeable>`
  color: ${(props) => props.theme.dark};
  margin-top: 8px;
`;

export const FieldError = styled.div<Themeable>`
  color: ${(props) => props.theme.error};
  margin-top: 8px;
`;

export const Input: React.FC<InputProps> = ({
  label, id, description, prefix, hasError, error, theme, icon, onClickIcon, ...rest
}) => (
  <LabelContainer htmlFor={id}>
    {label}
    <StyledInputContainer>
      {prefix && (
        <StyledPrefixContainer theme={theme}>
          {prefix}
        </StyledPrefixContainer>
      )}
      <StyledInput
        id={id}
        hasError={hasError}
        prefix={prefix}
        icon={icon}
        theme={theme}
        {...rest}
      />
      {icon && (
        <StyledIconContainer
          theme={theme}
          hasError={hasError}
          onClick={onClickIcon}
        >
          <IconSpacing>{icon}</IconSpacing>
        </StyledIconContainer>
      )}
    </StyledInputContainer>
    { hasError && (
      <FieldError theme={theme}>
        {error}
      </FieldError>
    )}
    { description && (
      <FieldDescription theme={theme}>
        {description}
      </FieldDescription>
    )}
  </LabelContainer>
);

Input.defaultProps = {
  type: 'text',
  theme: defaultTheme
};
