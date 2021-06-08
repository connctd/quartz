import React, { useState } from 'react';
import styled from '@emotion/styled';

import ChevronDownIcon from 'mdi-react/ChevronDownIcon';

import { Themeable, defaultTheme } from '../theme';
import { SidebarApp } from './index';
import { Spinner } from '../spinner';

export interface SidebarAppSelectorProps extends Themeable {
  loading?: boolean;
  apps: SidebarApp[];
  currentApp?: SidebarApp;
  linkComponent?: any;
  createAppProps: any;
  allAppsProps: any;
  hideSidebar?: () => void;
}

const AppSelectorContainer = styled.div`
  position: relative;
`;

const AppSelectorArrow = styled.div<Themeable & { open: boolean }>`
  height: 20px;
  color: ${({ theme }) => theme.white};
  opacity: 0.7;
  transform: ${({ open }) => (open ? 'rotateZ(180deg)' : 'rotateZ(0deg)')};
  transition: opacity 0.1s ease-in-out, transform 0.2s ease-in-out;
`;

const AppSelector = styled.button<Themeable>`
  appearance: none;
  display: flex;
  flex-shrink: 0;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  width: 100%;
  background-color: ${({ theme }) => (theme.purple)};
  color: ${({ theme }) => (theme.white)};
  border: none;
  border-top: solid 1px rgba(0, 0, 0, 0.2);
  border-bottom: solid 1px rgba(0, 0, 0, 0.2);
  outline: none;
  cursor: pointer;
  overflow-y: auto;
  transition: background-color 0.1s ease-in-out;

  &:hover, &:focus {
    background-color: rgba(0, 0, 0, 0.2);

    ${AppSelectorArrow} {
      opacity: 1;
    }
  }

  &:active {
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

const AppSelectorWording = styled.div`
  flex-grow: 1;
  text-align: left;
`;

const AppSelectorLabel = styled.div`
  font-size: 10px;
  opacity: 0.7;
`;

const AppSelectorCurrent = styled.div`
  font-size: 14px;
`;

const AppSelectorMenu = styled.div<Themeable & { open: boolean }>`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  max-height: ${({ open }) => (open ? '175px' : '0')};
  background-color: ${({ theme }) => theme.purpleDark};
  overflow: hidden;
  transition: max-height 0.25s ease-out;
`;

const AppSelectorApps = styled.div<{ open: boolean }>`
  display: flex;
  flex-shrink: 1;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 16px;
  padding-top: ${({ open }) => (open ? '16px' : '0')};
  padding-bottom: ${({ open }) => (open ? '16px' : '0')};
  overflow-y: scroll;
  transition: padding 0.25s ease-out;
`;

const AppSelectorAppsEmptyState = styled.div<Themeable>`
  color: ${({ theme }) => theme.white};
  font-size: 12px;
  opacity: 0.7;
`;

const AppSelectorApp = styled.button<Themeable>`
  appearance: none;
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  padding-left: 0;
  width: 100%;
  background-color: transparent;
  color: ${({ theme }) => theme.white};
  text-align: left;
  border: none;
  outline: none;
  cursor: pointer;
  transition: padding 0.1s ease-in-out;

  &:before {
    display: block;
    content: '';
    margin-right: 8px;
    width: 8px;
    height: 8px;
    background-color: ${({ theme }) => theme.success};
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.1s ease-in-out;
  }

  &:last-of-type {
    margin-bottom: 0;
  }

  &:hover, &:focus {
    padding-left: 8px;

    &:before {
      opacity: 1;
    }
  }
`;

const AppSelectorFooter = styled.div`
  display: flex;
  flex-shrink: 0;
  justify-content: space-between;
  padding: 16px;
  border-top: solid 1px rgba(0, 0, 0, 0.2);
`;

const AppSeletorCreateApp = styled.a<Themeable>`
  display: flex;
  align-items: center;
  padding: 0;
  background-color: transparent;
  color: rgba(255, 255, 255, 0.7);
  font-size: 12px;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  transition: color 0.1s ease-in-out;

  &:before {
    content: '+';
    display: inline-block;
    margin-right: 8px;
    width: 18px;
    height: 18px;
    background-color: ${({ theme }) => theme.success};
    color: #fff;
    font-size: 18px;
    text-align: center;
    line-height: 22px;
    border-radius: 50%;
    transition: transform 0.2s ease-in-out;
  }

  &:hover, &:focus {
    color: rgba(255, 255, 255, 1);

    &:before {
      transform: rotateZ(90deg);
    }
  }
`;

const AppSelectorAllApps = styled.a`
  background-color: transparent;
  color: rgba(255, 255, 255, 0.7);
  font-size: 12px;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  transition: color 0.1s ease-in-out;

  &:hover, &:focus {
    color: rgba(255, 255, 255, 1);
  }
`;

const AppSelectorEmptyState = styled.div<Themeable>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 64px 32px;
  height: 296px;
  background-color: rgba(0, 0, 0, 0.4);
  color: ${({ theme }) => theme.white};
  text-align: center;
  backdrop-filter: blur(10px);
`;

const AppSelectorLoadingState = styled.div<Themeable>`
  position: absolute;
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  height: 296px;
  background-color: rgba(0, 0, 0, 0.4);
  text-align: center;
  backdrop-filter: blur(10px);
`;

const AppSelectorLoading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 32px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 12px;
  border-radius: 50%;
`;

const AppSelectorEmptyStateHeading = styled.div`
  margin-bottom: 16px;
  font-size: 16px;
`;

const AppSelectorEmptyStateDescription = styled.div`
  margin-bottom: 32px;
  font-size: 12px;
`;

const AppSelectorEmptyStateCreateApp = styled.a<Themeable>`
  display: inline-flex;
  align-items: center;
  margin: 0 auto;
  padding: 8px 16px;
  background-color: rgba(255, 255, 255, 0.1);
  color: ${({ theme }) => theme.white};
  font-size: 14px;
  text-decoration: none;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  transition: background-color 0.1s ease-in-out;

  &:after {
    content: '+';
    display: inline-block;
    margin-left: 16px;
    width: 24px;
    height: 24px;
    background-color: ${({ theme }) => theme.success};
    color: #fff;
    font-size: 24px;
    text-align: center;
    line-height: 29px;
    border-radius: 50%;
    transition: transform 0.2s ease-in-out;
  }

  &:hover, &:focus {
    background-color: rgba(255, 255, 255, 0.15);

    &:after {
      transform: rotateZ(90deg);
    }
  }
`;

export const SidebarAppSelector: React.FC<SidebarAppSelectorProps> = ({
  loading,
  apps,
  currentApp,
  linkComponent = 'a',
  createAppProps,
  allAppsProps,
  hideSidebar,
  theme = defaultTheme
}) => {
  const [open, setOpen] = useState(false);

  const appsWithoutCurrent = apps.filter((app) => app.name !== currentApp?.name);
  const tabIndex = open ? 0 : -1;

  const toggleAppSelector = () => setOpen(!open);

  const closeAppSelector = () => {
    setOpen(false);

    hideSidebar?.();
  };

  const appLinks = appsWithoutCurrent.map((app) => {
    const handleClick = () => {
      setOpen(false);

      setTimeout(() => {
        app.onClick?.();
      }, 200);

      setTimeout(() => {
        hideSidebar?.();
      }, 400);
    };

    return (
      <AppSelectorApp
        onClick={handleClick}
        key={app.name}
        tabIndex={tabIndex}
        theme={theme}
      >
        {app.name}
      </AppSelectorApp>
    );
  });

  let emptyState;

  if (loading) {
    emptyState = (
      <AppSelectorLoadingState theme={theme}>
        <AppSelectorLoading>
          <Spinner
            color={theme.purpleVibrant}
            bgColor="rgba(0, 0, 0, 0.5)"
            size="50px"
            strokeSize="7px"
          />
          <div style={{ marginTop: 16 }}>
            Loading Data ...
          </div>
        </AppSelectorLoading>
      </AppSelectorLoadingState>
    );
  } else if (apps.length === 0) {
    emptyState = (
      <AppSelectorEmptyState theme={theme}>
        <AppSelectorEmptyStateHeading>
          You have no apps yet
        </AppSelectorEmptyStateHeading>
        <AppSelectorEmptyStateDescription>
          To use connctd,
          <br />
          you first need to create an app
        </AppSelectorEmptyStateDescription>
        <AppSelectorEmptyStateCreateApp
          onMouseUp={closeAppSelector}
          theme={theme}
          as={linkComponent}
          {...createAppProps}
        >
          Create App
        </AppSelectorEmptyStateCreateApp>
      </AppSelectorEmptyState>
    );
  }

  let onlyOneAppDescription;

  if (apps.length === 1) {
    onlyOneAppDescription = (
      <AppSelectorAppsEmptyState theme={theme}>
        You just have one app: <b>{currentApp?.name}</b>
      </AppSelectorAppsEmptyState>
    );
  }

  return (
    <AppSelectorContainer>
      <AppSelector
        theme={theme}
        onClick={toggleAppSelector}
      >
        <AppSelectorWording>
          <AppSelectorLabel>
            Current App:
          </AppSelectorLabel>
          <AppSelectorCurrent>
            {currentApp?.name || 'None'}
          </AppSelectorCurrent>
        </AppSelectorWording>
        <AppSelectorArrow open={open} theme={theme}>
          <ChevronDownIcon size="20px" />
        </AppSelectorArrow>
      </AppSelector>
      <AppSelectorMenu open={open} theme={theme}>
        <AppSelectorApps open={open}>
          {appLinks}
          {onlyOneAppDescription}
        </AppSelectorApps>
        <AppSelectorFooter>
          <AppSeletorCreateApp
            onMouseUp={closeAppSelector}
            tabIndex={tabIndex}
            theme={theme}
            as={linkComponent}
            {...createAppProps}
          >
            Create App
          </AppSeletorCreateApp>
          <AppSelectorAllApps
            onMouseUp={closeAppSelector}
            tabIndex={tabIndex}
            as={linkComponent}
            {...allAppsProps}
          >
            All Apps
          </AppSelectorAllApps>
        </AppSelectorFooter>
      </AppSelectorMenu>
      {emptyState}
    </AppSelectorContainer>
  );
};
