import React from 'react';
import styled from '@emotion/styled';

import ChevronRightIcon from 'mdi-react/ChevronRightIcon';

import { Themeable, defaultTheme } from '../theme';

export interface SidebarAccountProps extends Themeable {
  username: string;
  imageSrc: string;
  linkText: string;
  href?: string;
  hideSidebar?: () => void;
  component?: any;
  extraProps?: any;
}

const AccountArrow = styled.div<Themeable>`
  height: 20px;
  color: ${({ theme }) => theme.white};
  opacity: 0.7;
  transition: opacity 0.1s ease-in-out;
`;

const Account = styled.a<Themeable>`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  padding: 16px;
  color: ${({ theme }) => theme.white};
  text-decoration: none;
  border-top: solid 1px rgba(0, 0, 0, 0.2);
  border-bottom: solid 1px rgba(0, 0, 0, 0.2);
  outline: none;
  cursor: pointer;
  transition: background-color 0.1s ease-in-out;

  &:hover, &:focus {
    background-color: rgba(0, 0, 0, 0.2);

    ${AccountArrow} {
      opacity: 1;
    }
  }

  &:active {
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

const AccountImage = styled.img`
  margin-right: 8px;
  width: 34px;
  height: 34px;
  border-radius: 50%;
`;

const AccountWording = styled.div`
  flex-grow: 1;
`;

const AccountUsername = styled.div<Themeable>`
  font-size: 12px;
`;

const AccountLink = styled.div`
  font-size: 10px;
  opacity: 0.7;
`;

export const SidebarAccount: React.FC<SidebarAccountProps> = ({
  username,
  imageSrc,
  linkText = 'Account',
  href,
  hideSidebar,
  component = 'a',
  extraProps,
  style,
  theme = defaultTheme
}) => (
  <Account
    href={href}
    onMouseDown={hideSidebar}
    style={style}
    theme={theme}
    as={component}
    {...extraProps}
  >
    <AccountImage src={imageSrc} />
    <AccountWording>
      <AccountUsername theme={theme}>
        {username}
      </AccountUsername>
      <AccountLink theme={theme}>
        {linkText}
      </AccountLink>
    </AccountWording>
    <AccountArrow theme={theme}>
      <ChevronRightIcon size="20px" />
    </AccountArrow>
  </Account>
);
