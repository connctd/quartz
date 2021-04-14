/* eslint-disable max-len */
import React from 'react';
import styled from '@emotion/styled';

import { defaultTheme, Themeable } from '../theme';
import { FormElementError } from '../formelement';

interface SelectProps extends React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
  placeholder?: string;
  hasError?: boolean;
  error?: string;
  children: React.ReactElement<OptionProps>[];
}

interface OptionProps extends React.DetailedHTMLProps<React.OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement> {
  children: string;
}

interface SelectSubcomponents {
  Option: React.FunctionComponent<OptionProps>;
}

const SelectContainer = styled.div`
  margin-bottom: 16px;
  width: 100%;
`;

const StyledSelect = styled.select<Themeable & Pick<SelectProps, 'hasError'>>`
  appearance: none;
  display: inline-block;
  padding: 0 61px 0 16px;
  width: 100%;
  height: 45px;
  background-image:
    url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2319A287%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
    linear-gradient(to right, ${({ theme }) => theme.gray4} 0%, ${({ theme }) => theme.gray4} 2%, #f3f3f3 3%, #f3f3f3 100%)
  ;
  background-repeat: no-repeat;
  background-position: right 18px top 50%, right 0 top 0;
  background-size: 9px auto, 45px 45px;
  border: solid 1px ${({ hasError, theme }) => (hasError ? theme.danger : theme.gray4)};
  border-radius: 3px;
  cursor: pointer;

  :focus {
    border-color: ${({ theme }) => theme.success}
  }
`;

export const Select: React.FC<SelectProps & Themeable> & SelectSubcomponents = ({
  placeholder = '',
  children,
  value = '',
  hasError,
  error,
  onChange,
  theme = defaultTheme,
  ...rest
}) => (
  <SelectContainer>
    <StyledSelect
      value={value}
      hasError={hasError}
      onChange={onChange}
      theme={theme}
      {...rest}
    >
      <Select.Option value="" disabled hidden>{placeholder}</Select.Option>
      {children}
    </StyledSelect>
    {hasError && (
      <FormElementError theme={theme}>
        {error}
      </FormElementError>
    )}
  </SelectContainer>
);

Select.Option = ({ value, children, ...rest }) => (
  <option value={value} {...rest}>
    {children}
  </option>
);
