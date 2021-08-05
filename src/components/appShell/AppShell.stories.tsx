import React from 'react';
import { Meta } from '@storybook/react';

import Sidebar from '../sidebar';
import AppShell from './index';

export default {
  component: AppShell,
  title: 'Components/AppShell',
  decorators: [
    (Story) => (
      <div style={{ margin: '-40px' }}>
        <Story />
      </div>
    )
  ]
} as Meta;

export const Default = () => (
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
);
