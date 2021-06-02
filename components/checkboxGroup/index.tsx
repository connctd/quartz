import React from 'react';
import styled from '@emotion/styled';

import { Themeable, defaultTheme } from '../theme';
import {
  FormFieldContainer, FormFieldLabel, FormFieldDescription
} from '../formfield';
import { CheckboxProps } from '../checkbox';

interface CheckboxGroupProps extends Themeable {
  label: string;
  description?: React.ReactNode;
  children: React.ReactElement<CheckboxProps> | React.ReactElement<CheckboxProps>[];
}

const CheckboxGroupElements = styled.div<{ hasDescription: boolean }>`
  padding-top: ${({ hasDescription }) => (hasDescription ? '4px' : '0')};
`;

const CheckboxContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 16px;

  @media screen and (max-width: 600px) {
    display: block;
  }
`;

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  theme = defaultTheme,
  label,
  description,
  children
}) => {
  let descriptionElement;

  if (description) {
    descriptionElement = (
      <FormFieldDescription theme={theme}>
        {description}
      </FormFieldDescription>
    );
  }

  return (
    <FormFieldContainer>
      <FormFieldLabel theme={theme}>
        {label}
      </FormFieldLabel>
      <CheckboxGroupElements hasDescription={!!description}>
        {descriptionElement}
        <CheckboxContainer>
          {children}
        </CheckboxContainer>
      </CheckboxGroupElements>
    </FormFieldContainer>
  );
};
