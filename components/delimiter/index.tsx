import React from 'react';
import styled from '@emotion/styled';

import { Themeable, defaultTheme } from '../theme';

interface DelimiterProps extends Themeable {
  text?: string;
}

const DelimiterContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 0;
`;

const DelimiterText = styled.div`
  margin-right: 16px;
  font-size: 18px;
`;

const DelimiterLine = styled.div<Themeable>`
  flex-grow: 1;
  height: 0px;
  border-top: dashed 2px ${(props) => props.theme.gray3};
`;

export const Delimiter: React.FC<DelimiterProps> = ({ text, theme }) => {
  let textElement: React.ReactNode = null;

  if (text) {
    textElement = <DelimiterText>{text}</DelimiterText>;
  }

  return (
    <DelimiterContainer>
      {textElement}
      <DelimiterLine theme={theme} />
    </DelimiterContainer>
  );
};

Delimiter.defaultProps = {
  theme: defaultTheme
};
