import * as React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { defaultTheme, Themeable } from '../theme';

export interface ActionProps extends Themeable {
  label?: string;
  type?: 'add' | 'delete';
  onClick: (e: React.MouseEvent) => void;
}

const Label = styled.span`
  margin-right: 8px;
`;

const IconCircle = styled.div<Themeable & Pick<ActionProps, 'type'>>`
  width: 30px;
  height: 30px;
  background-color: ${({ type, theme }) => (type === 'add' ? theme.secondary : theme.primary)};
  color: #fff;
  font-size: 24px;
  text-align: center;
  line-height: 34px;
  border-radius: 50%;

  :after {
    display: inline-block;
    content: '+';

    ${({ type }) => (type === 'delete' ? css(`
      transform: translateX(-1px) translateY(-0.5px) rotateZ(45deg)
    `) : '')};
  }
`;

const ActionContainer = styled.a`
  display: inline-flex;
  align-items: center;
  font-size: 16px;
  cursor: pointer;
  user-select: none;
`;

export const Action: React.FC<ActionProps> = ({
  label, type = 'add', theme = defaultTheme, onClick, className
}) => (
  <ActionContainer className={className} onClick={onClick}>
    {label && (<Label>{label}</Label>)}
    <IconCircle theme={theme} type={type} />
  </ActionContainer>
);

Action.defaultProps = {
  theme: defaultTheme
};
