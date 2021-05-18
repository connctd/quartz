import React, { useState } from 'react';
import styled from '@emotion/styled';

import MenuIcon from 'mdi-react/MenuIcon';
import CloseIcon from 'mdi-react/CloseIcon';

import { Themeable, defaultTheme } from '../theme';

import { breakpoint } from '../../utils/breakpoint';

import { SidebarHead, SidebarHeadProps } from './head';
import { SidebarAppSelector, SidebarAppSelectorProps } from './appSelector';
import { SidebarButton, SidebarButtonProps } from './button';
import { SidebarNavigation, SidebarSecondaryNavigation, SidebarNavigationProps } from './navigation';
import { SidebarAccount, SidebarAccountProps } from './account';
import { SidebarSection, SidebarSectionProps } from './section';
import { SidebarLink, SidebarLinkProps } from './link';
import { SidebarFooter, SidebarFooterProps } from './footer';

type SubComponentProps =
  SidebarHeadProps
  | SidebarAppSelectorProps
  | SidebarNavigationProps
  | SidebarAccountProps
  | SidebarSectionProps
  | SidebarFooterProps;

export interface SidebarProps extends Themeable {
  children: React.ReactElement<SubComponentProps>[];
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

const MobileBar = styled.div<Themeable>`
  display: fixed;
  top: 0;
  left: 0;
  padding: 20px;
  width: 100vw;
  height: 60px;
  background-color: ${({ theme }) => (theme.purple)};

  ${breakpoint('laptop')} {
    display: none;
  }
`;

const MobileBarBurger = styled.button<Themeable>`
  appearance: none;
  display: flex;
  align-items: center;
  position: fixed;
  top: 9px;
  left: 9px;
  padding: 8px 16px;
  background-color: rgba(0, 0, 0, 0.2);
  color: ${({ theme }) => (theme.white)};
  font-size: 22px;
  border: 0;
  border-radius: 4px;
  outline: 0;
`;

const MobileBarLogo = styled.div`
  display: flex;
  margin: 0 auto;
`;

const MobileBackdrop = styled.div<Themeable & { showing: boolean }>`
  position: fixed;
  top: 0;
  left: ${({ showing }) => (showing ? '0' : '-100vw')};
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(3px);
  transition: left 0.2s ease-in-out;

  ${breakpoint('laptop')} {
    display: none;
  }
`;

const MobileClose = styled.button<Themeable>`
  appearance: none;
  display: flex;
  align-items: center;
  position: absolute;
  left: 240px;
  padding: 8px;
  background-color: transparent;
  color: ${({ theme }) => (theme.white)};
  font-size: 30px;
  border: 0;
  outline: 0;
`;

const SidebarContainer = styled.div<Themeable & { showing: boolean }>`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: ${({ showing }) => (showing ? '0' : '-240px')};
  width: 240px;
  height: 100%;
  background-color: ${({ theme }) => (theme.purple)};
  transition: left 0.2s ease-in-out;

  ${breakpoint('laptop')} {
    left: 0;
    z-index: none;
  }
`;

export const Sidebar: React.FC<SidebarProps> & SidebarSubComponents = ({
  children, theme = defaultTheme
}) => {
  const [showing, setShowing] = useState(false);

  const headChild = children.find(({ type }) => type === Sidebar.Head) as React.ReactElement<SidebarHeadProps>;
  const logoElement = headChild?.props.children;

  const showSidebar = () => setShowing(true);
  const hideSidebar = () => setShowing(false);

  const childrenWithHideSidebar = React.Children.map(children, (child) => (
    React.cloneElement(child, { hideSidebar })
  ));

  return (
    <>
      <MobileBar theme={theme}>
        <MobileBarBurger onClick={showSidebar} theme={theme}>
          <MenuIcon size="22px" />
        </MobileBarBurger>
        <MobileBarLogo>
          {logoElement}
        </MobileBarLogo>
      </MobileBar>
      <MobileBackdrop
        showing={showing}
        onClick={hideSidebar}
        theme={theme}
      >
        <MobileClose onClick={hideSidebar} theme={theme}>
          <CloseIcon size="30px" />
        </MobileClose>
      </MobileBackdrop>
      <SidebarContainer showing={showing} theme={theme}>
        {childrenWithHideSidebar}
      </SidebarContainer>
    </>
  );
};

Sidebar.Head = SidebarHead;
Sidebar.AppSelector = SidebarAppSelector;
Sidebar.Navigation = SidebarNavigation;
Sidebar.SecondaryNavigation = SidebarSecondaryNavigation;
Sidebar.Button = SidebarButton;
Sidebar.Account = SidebarAccount;
Sidebar.Section = SidebarSection;
Sidebar.Link = SidebarLink;
Sidebar.Footer = SidebarFooter;
