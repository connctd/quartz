/* eslint-disable object-curly-newline */
import React from 'react';
import styled from '@emotion/styled';
import css from '@emotion/css';
import { MdiReactIconComponentType } from 'mdi-react';

import { Themeable, defaultTheme } from '../theme';

import { breakpoint } from '../../utils/breakpoint';

export interface SidebarButtonProps extends Themeable {
  children: React.ReactNode;
  active?: boolean;
  icon?: MdiReactIconComponentType;
  activeIcon?: MdiReactIconComponentType;
  href?: string;
  target?: string;
  mainpage?: boolean;
  subpage?: boolean;
  legacy?: boolean;
  hideSidebar?: () => void;
  tabIndex?: number;
  component?: any;
  extraProps?: any;
}

export const Button = styled.a<Themeable & { active: number, mainpage: number, subpage: number }>`
  appearance: none;
  display: flex;
  align-items: center;
  padding: 8px;
  width: 100%;
  background-color: transparent;
  color: ${({ theme }) => theme.white};
  vertical-align: middle;
  text-align: left;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  border: none;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  transition: background-color 0.1s ease-in-out, color 0.1s ease-in-out;

  &:hover, &:focus {
    ${({ active }) => (active ? '' : css('background-color: rgba(0, 0, 0, 0.2);'))}
  }

  ${({ active, theme }) => (active ? css(`background-color: ${theme.purpleVibrant};`) : '')}

  ${({ active, mainpage, subpage, theme }) => {
    if (mainpage) {
      return css`
        font-weight: 700;
      `;
    }

    if (subpage) {
      return css`
        margin-left: 16px;
        width: calc(100% - 16px);
        color: ${active ? theme.white : 'rgba(255, 255, 255, 0.7)'};
        font-weight: 500;

        &:hover, &:focus {
          color: ${theme.white};
        }
      `;
    }

    return '';
  }}

  ${breakpoint('mobileL')} {
    padding: 16px;
  }
`;

const ButtonIcon = styled.div`
  margin-right: 16px;
  width: 20px;
  height: 20px;
  vertical-align: middle;
`;

const ButtonText = styled.div`
  margin-bottom: -2px;
`;

const ButtonLegacyBadge = styled.div<Themeable>`
  margin-left: 8px;
  padding: 0 4px;
  background: ${({ theme }) => theme.orangeLight};
  color: ${({ theme }) => theme.purple};
  font-size: 9px;
  font-weight: 400;
  border: 1px dashed ${({ theme }) => theme.gray2};
  border-radius: 4px;
`;

export const SidebarButton: React.FC<SidebarButtonProps> = ({
  active = false,
  icon,
  activeIcon,
  children,
  href,
  target,
  mainpage = false,
  subpage = false,
  hideSidebar,
  legacy,
  tabIndex,
  component = 'a',
  extraProps,
  style,
  theme = defaultTheme
}) => {
  let IconComponent;
  let iconElement;
  let legacyBadgeElement;

  if (icon && active && activeIcon) {
    IconComponent = activeIcon;
  } else if (icon) {
    IconComponent = icon;
  }

  if (icon) {
    iconElement = (
      <ButtonIcon>
        <IconComponent size="20px" />
      </ButtonIcon>
    );
  }

  if (legacy) {
    legacyBadgeElement = (
      <ButtonLegacyBadge theme={theme}>
        Legacy
      </ButtonLegacyBadge>
    );
  }

  return (
    <Button
      active={active ? 1 : 0}
      href={href}
      target={target}
      mainpage={mainpage ? 1 : 0}
      subpage={subpage ? 1 : 0}
      onMouseUp={hideSidebar}
      tabIndex={tabIndex}
      style={style}
      theme={theme}
      as={component}
      {...extraProps}
    >
      {iconElement}
      <ButtonText>
        {children}
      </ButtonText>
      {legacyBadgeElement}
    </Button>
  );
};
