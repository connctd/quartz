import React from 'react';
import styled from '@emotion/styled';
import css from '@emotion/css';
import { MdiReactIconComponentType } from 'mdi-react';

import { Themeable, defaultTheme } from '../theme';

export interface SidebarButtonProps extends Themeable {
  children: React.ReactNode;
  active?: boolean;
  icon: MdiReactIconComponentType;
  activeIcon?: MdiReactIconComponentType;
  href?: string;
  component?: any;
  extraProps?: any;
}

export const Button = styled.a<Themeable & { active?: boolean }>`
  appearance: none;
  display: flex;
  align-items: center;
  padding: 16px;
  width: 100%;
  background-color: transparent;
  color: ${({ theme }) => theme.white};
  vertical-align: middle;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  border: none;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  transition: background-color 0.1s ease-in-out;

  &:hover, &:focus {
    ${({ active }) => (active ? '' : css('background-color: rgba(0, 0, 0, 0.2);'))}
  }

  ${({ active, theme }) => (active ? css(`background-color: ${theme.purpleVibrant};`) : '')}
`;

const ButtonIcon = styled.div`
  margin-right: 16px;
  width: 20px;
  height: 20px;
  vertical-align: middle;
`;

const ButtonText = styled.div`
  height: 20px;
`;

export const SidebarButton: React.FC<SidebarButtonProps> = ({
  active,
  icon,
  activeIcon,
  children,
  href,
  component = 'a',
  extraProps,
  style,
  theme = defaultTheme
}) => {
  let IconElement;

  if (active && activeIcon) {
    IconElement = activeIcon;
  } else {
    IconElement = icon;
  }

  return (
    <Button
      active={active}
      href={href}
      style={style}
      theme={theme}
      as={component}
      {...extraProps}
    >
      <ButtonIcon>
        <IconElement size="20px" />
      </ButtonIcon>
      <ButtonText>
        {children}
      </ButtonText>
    </Button>
  );
};
