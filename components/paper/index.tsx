import * as React from 'react';
import styled from '@emotion/styled';
import { Themeable } from '../theme';

export interface PaperProps extends Themeable {
  children: React.ReactNode;
  narrow?: boolean;
  light?: boolean;
}

const StyledPaper = styled.div<PaperProps>`
  position: relative;
  z-index: 1;
  width: auto;
  background: #FFFFFF;
  box-shadow: ${(props) => (props.light ? '0px 5px 15px rgba(0, 0, 0, 0.1)' : '0px 0px 8px rgba(0, 0, 0, 0.25)')};
  padding: ${(props) => (props.narrow ? '15px 24px' : '20px 40px')};
`;

export const Paper: React.FC<PaperProps> = ({ children, ...rest }) => (
  <StyledPaper {...rest}>
    {children}
  </StyledPaper>
);

export default Paper;
