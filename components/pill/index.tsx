import React from 'react';
import styled from '@emotion/styled';
import { defaultTheme, Themeable } from '../theme';

export interface PillProps extends Themeable {
  children?: React.ReactNode;
}

const StyledPill = styled.span<Themeable>`
  border: 1px solid ${(props) => props.theme.light50};
  display: inline-block;
  border-radius: 5px;
  background: ${(props) => props.theme.light30};
  padding: 2px 9px;
  margin: 0px 0px 10px 10px;
  color: ${(props) => props.theme.dark};
`;

export const Pill: React.FC<PillProps> = ({ theme = defaultTheme, children }) => (
  <StyledPill theme={theme}>{children}</StyledPill>
);

Pill.defaultProps = {
  theme: defaultTheme
};
