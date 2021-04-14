import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { Themeable } from '../theme';

export interface LabelProps extends Themeable {
  hasError?: boolean;
  required?: boolean;
}

export const FormElementLabel = styled.label<LabelProps>`
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

export const FormElementContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2.5fr;
  grid-column-gap: 8px;
  margin-bottom: 16px;
  font-size: 14px;

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;

    ${FormElementLabel} {
      text-align: left;
    }
  }
`;

export const FormElementDescription = styled.div<Themeable>`
  color: ${({ theme }) => theme.gray2};
  margin-top: 8px;
`;

export const FormElementError = styled.div<Themeable>`
  color: ${({ theme }) => theme.danger};
  margin-top: 8px;
`;
