import * as React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

import { defaultTheme, Themeable } from '../theme';

interface SpinnerProps extends Themeable {
  size?: string;
  strokeSize?: string;
  color?: string;
  bgColor?: string;
  speed?: number;
}

const rotate = keyframes`
  from {
    transform: rotateZ(0deg);
  }
  to {
    transform: rotateZ(360deg);
  }
`;

const StyledSpinner = styled.div<SpinnerProps>`
  margin: 0 auto;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border: solid ${({ strokeSize }) => strokeSize} ${({ bgColor }) => bgColor};
  border-top-color: ${({ color }) => color};
  border-radius: 50%;
  animation: ${rotate} infinite ${({ speed }) => speed}s linear 0s both;
`;

export const Spinner: React.FC<SpinnerProps> = ({
  size = '30px',
  strokeSize = '4px',
  color = defaultTheme.gray1,
  bgColor = defaultTheme.gray4,
  speed = 0.5,
  className,
  theme = defaultTheme
}) => (
  <StyledSpinner
    className={className}
    size={size}
    strokeSize={strokeSize}
    color={color}
    bgColor={bgColor}
    speed={speed}
    theme={theme}
  />
);
