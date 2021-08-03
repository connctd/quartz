import React from 'react';
import styled from '@emotion/styled';

import { defaultTheme, Themeable } from '../theme';

export interface PillProps extends Themeable {
  children?: React.ReactNode;
}

const StyledPill = styled.span<Themeable>`
  border: 1px solid #302C70;
  display: inline-block;
  border-radius: 5px;
  background: #dcdaf1;
  padding: 2px 9px;
  color: #302C70;
`;

const Pill: React.FC<PillProps> = ({ theme = defaultTheme, children, ...rest }) => (
  <StyledPill theme={theme} {...rest}>
    {children}
  </StyledPill>
);

Pill.defaultProps = {
  theme: defaultTheme
};

export default Pill;
