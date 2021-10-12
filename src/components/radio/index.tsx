import React from 'react';
import styled from '@emotion/styled';

import { Themeable, defaultTheme, QuartzTheme } from '../theme';
import { InputProps } from '../input';
import {
  FormFieldContainer, FormFieldLabel, FormFieldDescription
} from '../formfield';

export interface RadioProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  id: string;
  label?: string;
  children?: React.ReactNode;
  checked?: boolean;
  description?: React.ReactNode;
  disabled?: boolean;
  theme?: QuartzTheme;
}

const InvisibleRadio = styled.input`
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

const StyledRadio = styled.div<InputProps>`
  display: inline-block;
  position: relative;
  margin-top: 7.5px;
  width: 30px;
  height: 30px;
  background: ${({ theme }) => (theme.gray5)};
  border: 1px solid ${({ theme }) => theme.gray3};
  border-radius: 50%;
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

const RadioContainer = styled.div<Themeable>`
  height: 38px;

  &:focus-within {
    ${StyledRadio} {
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

const Dot = styled.svg<Themeable & { disabled?: boolean }>`
  position: absolute;
  top: 4px;
  left: 4px;
  width: 20px;
  height: 20px;
  background-color: ${({ theme }) => theme.green};
  border-radius: 50%;
  ${({ disabled }) => (disabled ? 'opacity: 0.5;' : '')}
`;

const Radio: React.FC<RadioProps> = ({
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
  let dotElement;
  let childLabelElement;
  let descriptionElement;

  if (checked) {
    dotElement = (
      <Dot disabled={disabled} theme={theme} />
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
      <FormFieldDescription theme={theme}>
        {description}
      </FormFieldDescription>
    );
  }

  const invisibleRadioElement = (
    <InvisibleRadio
      type="radio"
      checked={checked}
      disabled={disabled}
      onChange={onChange}
      id={id}
      {...rest}
    />
  );

  const radioElements = (
    <div>
      <RadioContainer theme={theme}>
        {invisibleRadioElement}
        <StyledRadio
          disabled={disabled}
          onClick={(e) => { if (!disabled && onChange) onChange(e); }}
          theme={theme}
        >
          {dotElement}
        </StyledRadio>
        {childLabelElement}
      </RadioContainer>
      {descriptionElement}
    </div>
  );

  if (label) {
    return (
      <FormFieldContainer
        className={className}
        theme={theme}
      >
        <FormFieldLabel
          htmlFor={id}
          theme={theme}
        >
          {label}
        </FormFieldLabel>
        {radioElements}
      </FormFieldContainer>
    );
  }

  return radioElements;
};

export default Radio;
