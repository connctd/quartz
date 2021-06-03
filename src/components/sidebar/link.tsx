import React from 'react';
import styled from '@emotion/styled';

import { Themeable, defaultTheme } from '../theme';

export interface SidebarLinkProps extends Themeable {
  children: React.ReactNode;
  href: string;
  target?: string;
  component?: any;
  extraProps?: any;
}

const Link = styled.a<Themeable>`
  color: ${({ theme }) => theme.white};
  text-decoration: none;
  opacity: 0.6;
  outline: none;
  transition: opacity 0.1s ease-in-out;

  &:hover, &:focus {
    opacity: 1;
  }

  &:active {
    opacity: 0.8;
  }
`;

export const SidebarLink: React.FC<SidebarLinkProps> = ({
  href,
  target,
  component = 'a',
  extraProps,
  children,
  style,
  theme = defaultTheme
}) => (
  <Link
    href={href}
    target={target}
    style={style}
    theme={theme}
    as={component}
    {...extraProps}
  >
    {children}
  </Link>
);
