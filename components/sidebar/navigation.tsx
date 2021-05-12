import React from 'react';
import styled from '@emotion/styled';

import { Button, SidebarButtonProps } from './button';

export interface SidebarNavigationProps {
  children: React.ReactElement<SidebarButtonProps> | React.ReactElement<SidebarButtonProps>[];
}

const Navigation = styled.nav`
  flex-grow: 1;
  flex-shrink: 1;
  padding: 16px;
  overflow-y: auto;

  ${Button} {
    margin-bottom: 16px;
  }

  ${Button}:last-of-type {
    margin-bottom: 0;
  }
`;

const SecondaryNavigation = styled.nav`
  flex-shrink: 0;
  padding: 16px;
  border-top: solid 1px rgba(0, 0, 0, 0.2);

  ${Button} {
    margin-bottom: 8px;
    padding: 8px 16px;
  }

  ${Button}:last-of-type {
    margin-bottom: 0;
  }
`;

export const SidebarNavigation: React.FC<SidebarNavigationProps> = ({ children }) => (
  <Navigation>
    {children}
  </Navigation>
);

export const SidebarSecondaryNavigation: React.FC<SidebarNavigationProps> = ({ children }) => (
  <SecondaryNavigation>
    {children}
  </SecondaryNavigation>
);
