import * as React from 'react';
import styled from '@emotion/styled';

import { defaultTheme, Themeable } from '../theme';

export interface PaperProps extends Themeable {
  children: React.ReactNode;
  warning?: boolean;
  danger?: boolean;
}

const StyledPaper = styled.div<PaperProps>`
  position: relative;
  z-index: 1;
  padding: 32px;
  width: auto;
  background: #fff;
  border: solid 1px #bdbdbd;
  border-radius: 8px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);

  ${({ warning }) => (warning ? 'border: dashed 8px #eada56' : '')}
  ${({ danger, theme }) => (danger ? `border: dashed 8px ${theme.danger}` : '')}
`;

export const Paper: React.FC<PaperProps> = ({
  theme = defaultTheme,
  warning,
  danger,
  children,
  ...rest
}) => (
  <StyledPaper
    theme={theme}
    warning={warning}
    danger={danger}
    {...rest}
  >
    {children}
  </StyledPaper>
);

export default Paper;
