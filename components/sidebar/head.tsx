import React from 'react';
import styled from '@emotion/styled';

export interface SidebarHeadProps {
  bordered?: boolean;
  children: React.ReactNode;
}

const Head = styled.div<{ bordered: boolean }>`
  padding: 32px 48px;

  ${({ bordered }) => (bordered ? 'border-bottom: solid 1px rgba(0, 0, 0, 0.2);' : '')}
`;

export const SidebarHead: React.FC<SidebarHeadProps> = ({ bordered = false, children }) => (
  <Head bordered={bordered}>
    {children}
  </Head>
);
