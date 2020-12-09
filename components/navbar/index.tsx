import * as React from 'react';
import styled from '@emotion/styled';
import { defaultTheme, Themeable } from '../theme/index';

const MainNavbar = styled.nav<Themeable>`
  background: ${(props) => props.theme.blue};
  font-size: 14px;
  z-index: 100;
  position: relative;
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  .Items {
    order: 0;
    align-self: flex-start;
    display: flex;
  }

  .Staples {
    order:1;
    align-self: flex-start;
    margin-left: auto;
    display: flex;
  }

  .menuName {
    color: white;
    margin: 20px;
  }

  a {
    padding: 14px 14px 13px 14px;
    font-size: 14px;
    font-weight: 500;
    width: 150px;
    color: white;
    text-decoration: none;
    height: 100%;
    text-align: center;
  }
`;

const MainNavgroup = styled.div<NavLinkProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0px;
  text-align: center;

  box-shadow: ${(props) => (props.focus ? `0px 3px 0px 0px ${props.theme.secondary}` : 'none')};

  &>div {
    color: white;
    display: inline-block;
    transition: transform 0.25s;
    user-select: none;
    padding: 14px 14px 13px 14px;
  }

  :hover {
    background: ${(props) => props.theme.tertiary};
  }

  :hover .down {
    transform: rotate(-135deg);
  }

  :hover .up {
    transform: rotate(45deg);
  }

  :hover .left {
    transform: rotate(-45deg);
  }

  :hover .right {
    transform: rotate(135deg);
  }

  div p {
    margin: 0px;
  }

  .menuArrow {
    border: solid white;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 3px;
    margin: -3px 10px 0px;
  }

  .down{
    transform: rotate(45deg);
  }

  .up {
    transform: rotate(-135deg);
  }

  .left {
    transform: rotate(135deg);
  }

  .right {
    transform: rotate(-45deg);
  }


  ul {
    display: none;
    list-style: none;
    margin-top: auto;
    background: ${(props) => props.theme.tertiary};
    padding: 0px;
    opacity: 0.0;
    transition: opacity 0.25s;
  }

  :hover ul{
    display: block;
    opacity: 1.0;
  }

  ul li:hover {
    visibility: visible;
    background: ${(props) => props.theme.blue};
  }

  ul li {
    padding: 12px 0px 12px;
  }
`;

interface NavbarProps extends Themeable {
  children?: React.ReactNode;
}

export const Navbar: React.FC<NavbarProps> = ({
  theme,
  children,
  className
}) => (
  <MainNavbar theme={theme} className={className}>
    {children}
  </MainNavbar>
);

Navbar.defaultProps = {
  theme: defaultTheme
};

// Navlink

interface NavLinkProps extends Themeable{
  text?: string;
  target?: string;
  focus?: boolean;
}

export const NavLink: React.FC<NavLinkProps> = ({
  text,
  target,
  focus
}) => (
  <a className={focus ? 'focus' : ''} href={target}>{text}</a>
);

NavLink.defaultProps = {
  theme: defaultTheme
};

interface NavgroupProps extends Themeable {
  children?: React.ReactNode;
  focus?: boolean;
}

export const NavGroup: React.FC<NavgroupProps> = ({
  theme,
  children,
  focus
}) => (
  <MainNavgroup focus={focus} theme={theme}>

    {children}
  </MainNavgroup>
);

NavGroup.defaultProps = {
  theme: defaultTheme
};

interface MenuGroupProps extends Themeable {
  children? : React.ReactNode;
}

export const MenuGroup: React.FC<MenuGroupProps> = ({
  children
}) => (
  <ul>
    {React.Children.map(children, (child) => <li>{child}</li>)}
  </ul>

);

MenuGroup.defaultProps = {
  theme: defaultTheme
};

interface MenuArrowProps extends Themeable {
  up? : boolean;
  down? : boolean;
  left? : boolean;
  right? : boolean;
}

export const MenuArrow: React.FC<MenuArrowProps> = ({
  up,
  down,
  left,
  right
}) => {
  let arrowName = '';

  if (up === true) {
    arrowName = 'menuArrow up';
  } else if (down === true) {
    arrowName = 'menuArrow down';
  } else if (left === true) {
    arrowName = 'menuArrow left';
  } else if (right === true) {
    arrowName = 'menuArrow right';
  }

  return (
    <div className={arrowName} />
  );
};

MenuArrow.defaultProps = {
  theme: defaultTheme
};
