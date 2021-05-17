import React, { useState } from 'react';
import styled from '@emotion/styled';

import ChevronUpIcon from 'mdi-react/ChevronUpIcon';

import { Themeable, defaultTheme } from '../theme';
import { Button, SidebarButtonProps } from './button';

export interface SidebarSectionProps extends Themeable {
  title: string;
  expandable?: boolean;
  initExpanded?: boolean;
  contentHeight?: string;
  children: React.ReactElement<SidebarButtonProps>[];
}

const Section = styled.div<Themeable>`
  margin-top: 8px;

  ${Button} {
    margin-bottom: 8px;
    padding: 2px 8px;
  }
`;

const SectionHeader = styled.div<Themeable>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 8px;
  color: ${({ theme }) => theme.white};
  font-size: 18px;
  font-weight: 700;
  border-bottom: solid 1px rgba(0, 0, 0, 0.2);
`;

const SectionExpandLabel = styled.div<Themeable>`
  display: inline-block;
  margin-right: 4px;
  margin-bottom: -1px;
  color: ${({ theme }) => theme.white};
  font-size: 9px;
  opacity: 0.4;
  transition: opacity 0.1s ease-in-out;
`;

const SectionExpandArrow = styled.div<Themeable & { expanded?: boolean }>`
  height: 20px;
  color: ${({ theme }) => theme.white};
  transform: ${({ expanded }) => (expanded ? 'rotateZ(0deg)' : 'rotateZ(-180deg)')};
  opacity: 0.7;
  transition: opacity 0.1s ease-in-out, transform 0.2s ease-in-out;
`;

const SectionExpand = styled.button<Themeable>`
  appearance: none;
  display: flex;
  align-items: center;
  padding: 0;
  color: rgba(255, 255, 255, 0.7);
  transition: opacity 0.1s ease-in-out;
  background-color: transparent;
  border: 0;
  outline: 0;
  cursor: pointer;

  &:hover, &:focus {
    ${SectionExpandLabel} {
      opacity: 0.7;
    }

    ${SectionExpandArrow} {
      opacity: 1;
    }
  }
`;

const SectionContent = styled.div<{ expanded?: boolean, contentHeight?: string }>`
  margin-bottom: 24px;
  padding-top: ${({ expanded }) => (expanded ? '16px' : '0')};
  max-height: ${({ expanded, contentHeight }) => (expanded ? (contentHeight || '2000px') : '0')};
  overflow-y: scroll;
  transition: max-height 0.3s ease-in-out, padding 0.3s ease-in-out;
`;

export const SidebarSection: React.FC<SidebarSectionProps> = ({
  title,
  expandable = false,
  initExpanded = false,
  contentHeight,
  children,
  theme = defaultTheme
}) => {
  const [expanded, setExpanded] = useState(expandable ? initExpanded : true);

  const tabIndex = expanded ? 0 : -1;

  let expandElement;

  if (expandable) {
    const label = expanded ? 'hide' : 'show';

    expandElement = (
      <SectionExpand onClick={() => { setExpanded(!expanded); }}>
        <SectionExpandLabel theme={theme}>
          {label}
        </SectionExpandLabel>
        <SectionExpandArrow expanded={expanded} theme={theme}>
          <ChevronUpIcon size="20px" />
        </SectionExpandArrow>
      </SectionExpand>
    );
  }

  const buttonsWithTabIndex = React.Children.map(children, (child) => React.cloneElement(child, { tabIndex }));

  return (
    <Section>
      <SectionHeader theme={theme}>
        {title}
        {expandElement}
      </SectionHeader>
      <SectionContent
        expanded={expanded}
        contentHeight={contentHeight}
      >
        {buttonsWithTabIndex}
      </SectionContent>
    </Section>
  );
};
