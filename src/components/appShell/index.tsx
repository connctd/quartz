import React from 'react';
import styled from '@emotion/styled';

import { defaultTheme, Themeable } from '../theme';
import { SidebarProps } from '../sidebar';

import { breakpoint } from '../../utils/breakpoint';

interface AppShellProps extends Themeable {
  children: React.ReactElement<AppShellNavigationProps | AppShellContentProps>[];
}

interface AppShellSubComponents {
  Navigation: React.FunctionComponent<AppShellNavigationProps>;
  Content: React.FunctionComponent<AppShellContentProps>;
}

interface AppShellNavigationProps extends Themeable {
  children: React.ReactElement<SidebarProps>;
}

interface AppShellContentProps extends Themeable {
  children: React.ReactNode;
}

const StyledAppShell = styled.div`
  display: flex;
`;

const StyledNavigationArea = styled.div`
  position: fixed;
  height: 60px;
  width: 100vw;
  z-index: 1000;

  ${breakpoint('laptop')} {
    width: 240px;
    height: 100%;
  }
`;

const StyledContentArea = styled.div<Themeable>`
  position: relative;
  top: 60px;
  width: 100vw;
  padding: 0 16px;
  overflow-y: auto;
  z-index: 1;

  ${breakpoint('laptop')} {
    top: 0;
    left: 240px;
    padding: 0 32px;
    width: calc(100% - 240px);
  }
`;

const AppShell: React.FC<AppShellProps> & AppShellSubComponents = ({ children }) => {
  const navigationChild = children.find(({ type }) => type === AppShell.Navigation);
  const contentChild = children.find(({ type }) => type === AppShell.Content);

  return (
    <StyledAppShell>
      {navigationChild}
      {contentChild}
    </StyledAppShell>
  );
};

AppShell.Navigation = ({ children, theme = defaultTheme }) => (
  <StyledNavigationArea theme={theme}>
    {children}
  </StyledNavigationArea>
);

AppShell.Content = ({ children, theme = defaultTheme }) => (
  <StyledContentArea theme={theme}>
    {children}
  </StyledContentArea>
);

export default AppShell;
