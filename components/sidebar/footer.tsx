import React from 'react';
import styled from '@emotion/styled';

import { Themeable, defaultTheme } from '../theme';

import { breakpoint } from '../../utils/breakpoint';

import { SidebarLinkProps } from './link';

export interface SidebarFooterProps extends Themeable {
  copyright: string;
  bordered?: boolean;
  children: React.ReactElement<SidebarLinkProps>[];
}

const Footer = styled.div<Themeable & { bordered: boolean }>`
  flex-shrink: 0;
  padding: 8px 16px;
  font-size: 10px;

  ${({ bordered }) => (bordered ? 'border-top: solid 1px rgba(0, 0, 0, 0.2);' : '')}

  ${breakpoint('mobileM')} {
    padding: 16px;
  }
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
  bordered = false,
  theme = defaultTheme
}) => (
  <Footer bordered={bordered} theme={theme}>
    <FooterLinks>
      {children}
    </FooterLinks>
    <FooterCopyright theme={theme}>
      {copyright}
    </FooterCopyright>
  </Footer>
);
