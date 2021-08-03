import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { MdiReactIconComponentType } from 'mdi-react';

import CloseIcon from 'mdi-react/CloseIcon';
import CheckAllIcon from 'mdi-react/CheckAllIcon';
import AlertOctagonOutlineIcon from 'mdi-react/AlertOctagonOutlineIcon';
import AlertOutlineIcon from 'mdi-react/AlertOutlineIcon';
import InformationOutlineIcon from 'mdi-react/InformationOutlineIcon';

import { defaultTheme, Themeable } from '../theme';

import { breakpoint } from '../../utils/breakpoint';
import { setAlpha } from '../../utils/color';

export type ToastVariant = 'primary' | 'success' | 'danger' | 'warning' | 'info';

export interface ToastAction {
  label: string;
  secondary?: boolean;
  onClick?: () => void;
}

interface ToastProps extends Themeable {
  variant?: ToastVariant;
  closable?: boolean;
  noIcon?: boolean;
  icon?: MdiReactIconComponentType;
  width?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  actions?: ToastAction[];
  onClose?: () => void;
}

const ToastContainer = styled.div<Themeable & { width?: string }>`
  padding: 16px;
  width: 100%;
  background-color: ${({ theme }) => theme.white};
  border: solid 1px ${({ theme }) => theme.gray3};
  border-radius: 4px;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.1);
  pointer-events: auto;

  ${breakpoint('tablet')} {
    width: ${({ width }) => (width || '400px')};
  }
`;

const ToastContent = styled.div`
  display: flex;
  align-items: center;
`;

const ToastIcon = styled.div<Themeable & { variant: ToastVariant }>`
  align-self: flex-start;
  margin-right: 16px;
  color: ${({ variant, theme }) => theme[variant]};
`;

const ToastText = styled.div`
  flex-grow: 1;
`;

const ToastTitle = styled.div<Themeable>`
  flex-grow: 1;
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.gray1};
`;

const ToastDescription = styled.div<Themeable>`
  margin-top: 8px;
  color: ${({ theme }) => theme.gray2};
  font-size: 14px;
`;

const ToastClose = styled.button<Themeable>`
  appearance: none;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  padding: 2px;
  margin-left: 16px;
  background-color: transparent;
  color: ${({ theme }) => theme.gray3};
  border: none;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;

  &:hover, &:focus {
    color: ${({ theme }) => theme.gray1};
    background-color: ${({ theme }) => theme.gray5};
  }
`;

const ToastButton = styled.button<Themeable & { secondary: boolean, variant: ToastVariant }>`
  appearance: none;
  padding: 8px;
  width: 100%;
  font-size: 14px;
  font-weight: 500;
  border: none;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;

  ${({ secondary, variant, theme }) => {
    if (secondary) {
      return css`
        background-color: ${theme.gray5};
        color: ${theme.gray1};

        &:hover, &:focus {
          background-color: ${theme.gray4};
        }
      `;
    }

    return css`
      background-color: ${setAlpha(theme[variant], 0.2)};
      color: ${variant === 'warning' ? 'rgba(0, 0, 0, 0.7)' : theme[variant]};

      &:hover, &:focus {
          background-color: ${setAlpha(theme[variant], 0.3)};
        }
    `;
  }}
`;

const ToastButtons = styled.div`
  display: flex;
  margin-top: 16px;

  ${ToastButton}:nth-of-type(2n) {
    margin-left: 16px;
  }
`;

const Toast: React.FC<ToastProps> = ({
  variant = 'primary',
  closable,
  noIcon,
  icon,
  width,
  title,
  description,
  actions,
  onClose,
  theme = defaultTheme
}) => {
  let iconElement;
  let closeElement;
  let descriptionElement;
  let actionElements;
  let actionsElement;

  if (!noIcon) {
    let MdIconType;

    if (!icon) {
      if (variant === 'success' || variant === 'primary') {
        MdIconType = CheckAllIcon;
      } else if (variant === 'danger') {
        MdIconType = AlertOctagonOutlineIcon;
      } else if (variant === 'warning') {
        MdIconType = AlertOutlineIcon;
      } else if (variant === 'info') {
        MdIconType = InformationOutlineIcon;
      }
    } else {
      MdIconType = icon;
    }

    iconElement = (
      <ToastIcon variant={variant} theme={theme}>
        <MdIconType size="40px" />
      </ToastIcon>
    );
  }

  if (closable) {
    closeElement = (
      <ToastClose
        onClick={onClose}
        theme={theme}
      >
        <CloseIcon size="20px" />
      </ToastClose>
    );
  }

  if (description) {
    descriptionElement = (
      <ToastDescription theme={theme}>
        {description}
      </ToastDescription>
    );
  }

  if (actions?.length) {
    actionElements = actions.map((action) => (
      <ToastButton
        secondary={action.secondary || false}
        variant={variant}
        onClick={action.onClick}
        theme={theme}
      >
        {action.label}
      </ToastButton>
    ));

    actionsElement = (
      <ToastButtons>
        {actionElements}
      </ToastButtons>
    );
  }

  return (
    <ToastContainer theme={theme} width={width}>
      <ToastContent>
        {iconElement}
        <ToastText>
          <ToastTitle theme={theme}>
            {title}
          </ToastTitle>
          {descriptionElement}
        </ToastText>
        {closeElement}
      </ToastContent>
      {actionsElement}
    </ToastContainer>
  );
};

export default Toast;
