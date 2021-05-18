import React from 'react';
import styled from '@emotion/styled';

import { Themeable, defaultTheme } from '../theme';

import { breakpoint } from '../../utils/breakpoint';

export interface SidebarHeadProps extends Themeable {
  bordered?: boolean;
  children: React.ReactNode;
}

const Head = styled.div<Themeable & { bordered: boolean }>`
  display: none;
  padding: 32px 48px;

  ${({ bordered }) => (bordered ? 'border-bottom: solid 1px rgba(0, 0, 0, 0.2);' : '')}

  ${breakpoint('laptop')} {
    display: flex;
  }
`;

export const SidebarHead: React.FC<SidebarHeadProps> = ({
  bordered = false,
  children,
  theme = defaultTheme
}) => (
  <Head
    bordered={bordered}
    theme={theme}
  >
    {children}
  </Head>
);
