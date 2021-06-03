import React from 'react';
import styled from '@emotion/styled';

import { defaultTheme, Themeable } from '../theme';

import { breakpoint } from '../../utils/breakpoint';

import { Button, SidebarButtonProps } from './button';

export interface SidebarNavigationProps extends Themeable {
  hideSidebar?: () => void;
  children: React.ReactElement<SidebarButtonProps> | React.ReactElement<SidebarButtonProps>[];
}

const Navigation = styled.nav<Themeable>`
  flex-grow: 1;
  flex-shrink: 1;
  padding: 16px;
  overflow-y: auto;

  ${Button} {
    margin-bottom: 8px;

    ${breakpoint('mobileL')} {
      margin-bottom: 16px;
    }
  }

  ${Button}:last-of-type {
    margin-bottom: 0;
  }
`;

const SecondaryNavigation = styled.nav<Themeable>`
  flex-shrink: 0;
  padding: 16px;
  border-top: solid 1px rgba(0, 0, 0, 0.2);

  ${Button} {
    margin-bottom: 8px;
    padding: 8px;

    ${breakpoint('mobileL')} {
      padding: 8px 16px;
    }
  }

  ${Button}:last-of-type {
    margin-bottom: 0;
  }
`;

export const SidebarNavigation: React.FC<SidebarNavigationProps> = ({
  hideSidebar,
  children,
  theme = defaultTheme
}) => {
  const childrenWithHideSidebar = React.Children.map(children, (child: React.ReactElement<SidebarButtonProps>) => (
    React.cloneElement(child, { hideSidebar })
  ));

  return (
    <Navigation theme={theme}>
      {childrenWithHideSidebar}
    </Navigation>
  );
};

export const SidebarSecondaryNavigation: React.FC<SidebarNavigationProps> = ({
  hideSidebar,
  children,
  theme = defaultTheme
}) => {
  const childrenWithHideSidebar = React.Children.map(children, (child: React.ReactElement<SidebarButtonProps>) => (
    React.cloneElement(child, { hideSidebar })
  ));

  return (
    <SecondaryNavigation theme={theme}>
      {childrenWithHideSidebar}
    </SecondaryNavigation>
  );
};
