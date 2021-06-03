import * as React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { defaultTheme, Themeable } from '../theme';

export interface ActionProps extends Themeable {
  label?: string;
  type?: 'add' | 'delete';
  href?: string;
  component?: any;
  extraProps?: any;
  onClick?: (e: React.MouseEvent) => void;
}

const Label = styled.span`
  margin-right: 8px;
`;

const IconCircle = styled.div<Themeable & Pick<ActionProps, 'type'>>`
  width: 30px;
  height: 30px;
  background-color: ${({ type, theme }) => (type === 'add' ? theme.success : theme.danger)};
  color: #fff;
  font-size: 24px;
  text-align: center;
  line-height: 34px;
  border-radius: 50%;

  :after {
    display: inline-block;
    content: '+';

    ${({ type }) => (type === 'delete' ? css(`
      content: '✕';
      font-size: 14px;
      transform: translateY(-3px);
    `) : '')};
  }
`;

const ActionContainer = styled.a<Themeable>`
  display: inline-flex;
  align-items: center;
  color: ${({ theme }) => theme.black};
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  user-select: none;
`;

export const Action: React.FC<ActionProps> = ({
  label,
  type = 'add',
  component = 'a',
  onClick,
  className,
  style,
  theme = defaultTheme,
  extraProps
}) => (
  <ActionContainer
    onClick={onClick}
    theme={theme}
    className={className}
    style={style}
    as={component}
    {...extraProps}
  >
    {label && (<Label>{label}</Label>)}
    <IconCircle theme={theme} type={type} />
  </ActionContainer>
);
