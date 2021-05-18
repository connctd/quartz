import React from 'react';
import styled from '@emotion/styled';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';

import { Sidebar } from '../sidebar';

import { AppShell } from './index';

const stories = storiesOf('AppShell', module);

stories.addDecorator(withKnobs);
stories.addDecorator(withInfo);

const StoryContainer = styled.div`
  margin: -40px;
`;

stories.add('Default', () => (
  <StoryContainer>
    <AppShell>
      <AppShell.Navigation>
        <Sidebar>
          <Sidebar.Head bordered>
            <img src="/logo.svg" alt="Logo" width="100%" />
          </Sidebar.Head>
          <Sidebar.Navigation>
            <Sidebar.Button href="#documentation">
              Documentation
            </Sidebar.Button>
            <Sidebar.Button href="#tutorials">
              Tutorials
            </Sidebar.Button>
            <Sidebar.Button href="#connectors">
              GraphQL Explorer
            </Sidebar.Button>
          </Sidebar.Navigation>
          <Sidebar.Footer copyright="© 2021 IoT connctd GmbH" bordered>
            <Sidebar.Link href="//connctd.com/agb" target="_blank">
              Terms of Service
            </Sidebar.Link>
            <Sidebar.Link href="//connctd.com/imprint" target="_blank">
              Imprint
            </Sidebar.Link>
            <Sidebar.Link href="//connctd.com/privacy" target="_blank">
              Privary
            </Sidebar.Link>
            <Sidebar.Link href="//connctd.com/privacy" target="_blank">
              Cookies
            </Sidebar.Link>
          </Sidebar.Footer>
        </Sidebar>
      </AppShell.Navigation>
      <AppShell.Content>
        <span>Content ...</span>
      </AppShell.Content>
    </AppShell>
  </StoryContainer>
));
