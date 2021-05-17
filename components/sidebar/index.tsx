import React from 'react';
import styled from '@emotion/styled';

import { Themeable, defaultTheme } from '../theme';

import { SidebarHead, SidebarHeadProps } from './head';
import { SidebarAppSelector, SidebarAppSelectorProps } from './appSelector';
import { SidebarButton, SidebarButtonProps } from './button';
import { SidebarNavigation, SidebarSecondaryNavigation, SidebarNavigationProps } from './navigation';
import { SidebarAccount, SidebarAccountProps } from './account';
import { SidebarSection, SidebarSectionProps } from './section';
import { SidebarLink, SidebarLinkProps } from './link';
import { SidebarFooter, SidebarFooterProps } from './footer';

type SubComponents =
  SidebarHeadProps
  | SidebarAppSelectorProps
  | SidebarNavigationProps
  | SidebarAccountProps
  | SidebarSectionProps
  | SidebarFooterProps;

interface SidebarProps extends Themeable {
  children: React.ReactElement<SubComponents>[];
}

interface SidebarSubComponents {
  Head: React.FunctionComponent<SidebarHeadProps>;
  AppSelector: React.FunctionComponent<SidebarAppSelectorProps>;
  Navigation: React.FunctionComponent<SidebarNavigationProps>;
  SecondaryNavigation: React.FunctionComponent<SidebarNavigationProps>;
  Button: React.FunctionComponent<SidebarButtonProps>;
  Account: React.FunctionComponent<SidebarAccountProps>;
  Section: React.FunctionComponent<SidebarSectionProps>;
  Footer: React.FunctionComponent<SidebarFooterProps>;
  Link: React.FunctionComponent<SidebarLinkProps>;
}

const Container = styled.div<Themeable>`
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 240px;
  height: 100vh;
  background-color: ${({ theme }) => (theme.purple)};
`;

export const Sidebar: React.FC<SidebarProps> & SidebarSubComponents = ({
  children, theme = defaultTheme
}) => (
  <Container theme={theme}>
    {children}
  </Container>
);

Sidebar.Head = SidebarHead;
Sidebar.AppSelector = SidebarAppSelector;
Sidebar.Navigation = SidebarNavigation;
Sidebar.SecondaryNavigation = SidebarSecondaryNavigation;
Sidebar.Button = SidebarButton;
Sidebar.Account = SidebarAccount;
Sidebar.Section = SidebarSection;
Sidebar.Link = SidebarLink;
Sidebar.Footer = SidebarFooter;
