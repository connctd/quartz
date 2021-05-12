import React from 'react';
import styled from '@emotion/styled';

import { Themeable, defaultTheme } from '../theme';

import { SidebarLinkProps } from './link';

export interface SidebarFooterProps extends Themeable {
  children: React.ReactElement<SidebarLinkProps>[];
  copyright: string;
}

const Footer = styled.div`
  flex-shrink: 0;
  padding: 16px;
  font-size: 10px;
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FooterCopyright = styled.div<Themeable>`
  margin-top: 8px;
  color: ${({ theme }) => theme.white};
  font-size: 9px;
  opacity: 0.4;
`;

export const SidebarFooter: React.FC<SidebarFooterProps> = ({
  copyright,
  children,
  theme = defaultTheme
}) => (
  <Footer>
    <FooterLinks>
      {children}
    </FooterLinks>
    <FooterCopyright theme={theme}>
      {copyright}
    </FooterCopyright>
  </Footer>
);
