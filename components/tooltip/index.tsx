import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Tooltip as TippyTooltip } from 'react-tippy';

import { Themeable } from '../theme';

interface TooltipProps extends Themeable {
  position?: 'top' | 'right' | 'bottom' | 'left';
  trigger?: 'click' | 'mouseenter' | 'focus';
  delay?: number;
  content: React.ReactNode;
  children: React.ReactNode;
}

const TooltipContainer = styled.div<Pick<TooltipProps, 'position'>>`
  display: flex;
  align-items: center;
  padding: 0;

  ${({ position }) => {
    switch (position) {
      case 'top':
        return css`
          flex-direction: column-reverse;
        `;
      case 'right':
        return css`
          flex-direction: row;
          margin-left: 8px;
        `;
      case 'bottom':
        return css`
          flex-direction: column;
        `;
      case 'left':
        return css`
          flex-direction: row-reverse;
          margin-right: 8px;
        `;
      default:
        return '';
    }
  }}
`;

const TooltipArrow = styled.div<Pick<TooltipProps, 'position'>>`
  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-right: 5px solid #bdbdbd;

  ${({ position }) => {
    switch (position) {
      case 'top':
        return css`
          transform: rotateZ(-90deg);
        `;
      case 'right':
        return css`
          transform: rotateZ(0deg);
        `;
      case 'bottom':
        return css`
          transform: rotateZ(90deg);
        `;
      case 'left':
        return css`
          transform: rotateZ(-180deg);
        `;
      default:
        return '';
    }
  }}
`;

const StyledTooltip = styled.div<Pick<TooltipProps, 'position'>>`
  padding: 8px;
  max-width: 200px;
  background-color: #fff;
  color: #828282;
  font-size: 12px;
  font-family: 'Hind', Helvetica Neue, Helvetica, Segoe UI, Arial, freesans, sans-serif;
  text-align: center;
  border: solid 1px #bdbdbd;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  ${({ position }) => {
    switch (position) {
      case 'top':
        return css`
          margin-bottom: -3px;
        `;
      case 'bottom':
        return css`
          margin-top: -3px;
        `;
      default:
        return '';
    }
  }}
`;

export const Tooltip: React.FC<TooltipProps> = ({
  position = 'right',
  trigger = 'mouseenter',
  delay = 500,
  content,
  children
}) => {
  const contentInTooltip = (
    <TooltipContainer position={position}>
      <TooltipArrow position={position} />
      <StyledTooltip position={position}>
        {content}
      </StyledTooltip>
    </TooltipContainer>
  );

  return (
    <TippyTooltip
      html={contentInTooltip}
      position={position}
      trigger={trigger}
      delay={delay}
      hideOnClick={false}
    >
      {children}
    </TippyTooltip>
  );
};
