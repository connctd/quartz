import React from 'react';
import styled from '@emotion/styled';

import { Themeable } from '../theme';

interface DialogProps {
  heading: string;
  children: React.ReactNode;
}

const DialogContainer = styled.div<Themeable>``;

const DialogHeader = styled.div`
  position: relative;
  padding: 8px 16px;
  background-color: #f2f2f2;
  color: #4f4f4f;
  border: solid 1px #bdbdbd;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  cursor: pointer;
`;

const DialogBody = styled.div`
  margin-top: -1px;
  padding: 16px;
  height: auto;
  border: solid 1px #bdbdbd;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  overflow: hidden;
`;

const Dialog: React.FC<DialogProps & Themeable> = ({ heading, children, ...rest }) => (
  <DialogContainer {...rest}>
    <DialogHeader>
      {heading}
    </DialogHeader>
    <DialogBody>
      {children}
    </DialogBody>
  </DialogContainer>
);

export default Dialog;
