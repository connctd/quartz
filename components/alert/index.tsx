import React, { useState } from 'react';
import styled from '@emotion/styled';
import { defaultTheme, Themeable, QuartzTheme } from '../theme';

const AlertContainer = styled.div<StyledAlertProps>`
  padding: 5px;
  background-color: ${(props) => props.theme.alert[props.appearance].background};
  border: 1px solid ${(props) => props.theme.alert[props.appearance].border};
  margin-bottom: 15px;
  border-radius: 3px;
  transition: all 0.2s linear;
`;

const AlertContent = styled.div<StyledAlertProps>`
  padding: 16px;
  color: ${(props) => props.theme.alert[props.appearance].text};
`;

const DissmissIndicator = styled.span<StyledAlertProps>`
  margin-left: 15px;
  color: ${(props) => props.theme.alert[props.appearance].border};
  font-weight: bold;
  float: right;
  font-size: 22px;
  line-height: 20px;
  cursor: pointer;
  transition: 0.3s;
`;

type AlertAppearance = 'success' | 'error' | 'warning';

interface StyledAlertProps {
  appearance: AlertAppearance;
  theme: QuartzTheme;
}

export interface AlertProps extends Themeable {
  children: React.ReactNode;
  appearance?: AlertAppearance;
  dissmissable?: boolean;
}

export const Alert: React.FC<AlertProps> = ({
  theme = defaultTheme,
  children,
  appearance = 'warning',
  dissmissable = false

}) => {
  const [dismissed, setDismissed] = useState(false);
  const [hidden, setHidden] = useState(false);

  if (!hidden) {
    return (
      <AlertContainer
        style={{ opacity: dismissed ? 0 : 1 }}
        appearance={appearance}
        theme={theme}
      >
        {dissmissable && (
          <DissmissIndicator
            appearance={appearance}
            theme={theme}
            onClick={() => {
              setDismissed(true);
              setTimeout(() => setHidden(true), 200);
            }}
          >
            &times;
          </DissmissIndicator>
        )}
        <AlertContent
          appearance={appearance}
          theme={theme}
        >
          {children}
        </AlertContent>
      </AlertContainer>
    );
  }
  return (null);
};
