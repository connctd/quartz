import React, { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { Themeable } from '../theme';

interface CollapseProps {
  heading: string;
  children: React.ReactNode;
}

interface Expandable {
  expanded: boolean;
}

const CollapseContainer = styled.div<Themeable>``;

const CollapseHeader = styled.div<Expandable>`
  position: relative;
  padding: 8px 16px;
  background-color: #f2f2f2;
  color: #4f4f4f;
  border: solid 1px #bdbdbd;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  cursor: pointer;

  ${({ expanded }) => (expanded ? css(`
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  `) : '')}

  :after {
    content: '▾';
    display: block;
    position: absolute;
    top: 9px;
    right: 16px;
    color: #828282;
    transform: rotateZ(0deg);

    ${({ expanded }) => (expanded ? css(`
      top: 8px;
      transform: rotateZ(180deg);
    `) : '')}
  }
`;

const CollapseBody = styled.div<Expandable>`
  margin-top: -1px;
  padding: 0;
  height: 0;
  border: 0;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  overflow: hidden;

  ${({ expanded }) => (expanded ? css(`
    padding: 16px;
    height: auto;
    border: solid 1px #bdbdbd;
  `) : '')}
`;

const Collapse: React.FC<CollapseProps & Themeable> = ({ heading, children, ...rest }) => {
  const [expanded, setExpanded] = useState(false);

  const toggle = () => {
    setExpanded(!expanded);
  };

  return (
    <CollapseContainer {...rest}>
      <CollapseHeader
        onClick={toggle}
        expanded={expanded}
      >
        {heading}
      </CollapseHeader>
      <CollapseBody expanded={expanded}>
        {children}
      </CollapseBody>
    </CollapseContainer>
  );
};

export default Collapse;
