import React, { useState } from 'react';
import styled from '@emotion/styled';
import { storiesOf } from '@storybook/react';
// import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';

import ArchiveOutlineIcon from 'mdi-react/ArchiveOutlineIcon';
import ArchiveIcon from 'mdi-react/ArchiveIcon';
import LightbulbOutlineIcon from 'mdi-react/LightbulbOutlineIcon';
import LightbulbIcon from 'mdi-react/LightbulbIcon';
import PuzzleOutlineIcon from 'mdi-react/PuzzleOutlineIcon';
import PuzzleIcon from 'mdi-react/PuzzleIcon';
import NotebookOutlineIcon from 'mdi-react/NotebookOutlineIcon';
import SchoolOutlineIcon from 'mdi-react/SchoolOutlineIcon';
import GraphOutlineIcon from 'mdi-react/GraphOutlineIcon';
import FlaskOutlineIcon from 'mdi-react/FlaskOutlineIcon';

import { AppShell } from '../appShell';
import { Paper } from '../paper';

import { Sidebar } from './index';

const stories = storiesOf('Sidebar', module);

stories.addDecorator(withKnobs);

const StoryContainer = styled.div`
  margin: -40px;
`;

const Content = styled(Paper)`
  margin-top: 16px;
`;

stories.add('Dev-Center - with Apps', () => {
  const apps = [
    { name: 'Production', onClick() { action('App selected: Production'); setCurrentApp(this); } },
    { name: 'Staging', onClick() { action('App selected: Staging'); setCurrentApp(this); } },
    { name: 'Test App', onClick() { action('App selected: Test App'); setCurrentApp(this); } },
    { name: 'Dummy', onClick() { action('App selected: Dummy'); setCurrentApp(this); } }
  ];

  const [currentApp, setCurrentApp] = useState(apps[0]);
  const [currentPage, setCurrentPage] = useState('Things');

  return (
    <StoryContainer>
      <AppShell>
        <AppShell.Navigation>
          <Sidebar>
            <Sidebar.Head>
              <img src="/logo.svg" alt="Logo" width="100%" />
            </Sidebar.Head>
            <Sidebar.AppSelector
              apps={apps}
              currentApp={currentApp}
              createAppProps={{ href: '#create-app' }}
              allAppsProps={{ href: '#all-apps' }}
            />
            <Sidebar.Navigation>
              <Sidebar.Button
                active={currentPage === 'Things'}
                icon={LightbulbOutlineIcon}
                activeIcon={LightbulbIcon}
                component="button"
                extraProps={{ onClick() { setCurrentPage('Things'); } }}
              >
                Things
              </Sidebar.Button>
              <Sidebar.Button
                active={currentPage === 'Units'}
                icon={ArchiveOutlineIcon}
                activeIcon={ArchiveIcon}
                component="button"
                extraProps={{ onClick() { setCurrentPage('Units'); } }}
              >
                Units
              </Sidebar.Button>
              <Sidebar.Button
                active={currentPage === 'Connectors'}
                icon={PuzzleOutlineIcon}
                activeIcon={PuzzleIcon}
                component="button"
                extraProps={{ onClick() { setCurrentPage('Connectors'); } }}
              >
                Connectors
              </Sidebar.Button>
            </Sidebar.Navigation>
            <Sidebar.SecondaryNavigation>
              <Sidebar.Button icon={NotebookOutlineIcon} href="#documentation">
                Documentation
              </Sidebar.Button>
              <Sidebar.Button icon={SchoolOutlineIcon} href="#tutorials">
                Tutorials
              </Sidebar.Button>
              <Sidebar.Button icon={GraphOutlineIcon} href="#connectors">
                GraphQL Explorer
              </Sidebar.Button>
            </Sidebar.SecondaryNavigation>
            <Sidebar.Account
              username="user@example.com"
              imageSrc="https://avatars.githubusercontent.com/u/2061454?v=4"
              linkText="Account Settings"
              href="#account"
            />
            <Sidebar.Footer copyright="© 2021 IoT connctd GmbH">
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
          <Content>
            Content...
          </Content>
        </AppShell.Content>
      </AppShell>
    </StoryContainer>
  );
});

stories.add('Dev-Center - no Apps', () => {
  const apps = [];

  const [currentPage, setCurrentPage] = useState('Things');

  return (
    <StoryContainer>
      <AppShell>
        <AppShell.Navigation>
          <Sidebar>
            <Sidebar.Head>
              <img src="/logo.svg" alt="Logo" width="100%" />
            </Sidebar.Head>
            <Sidebar.AppSelector
              apps={apps}
              createAppProps={{ href: '#create-app' }}
              allAppsProps={{ href: '#all-apps' }}
            />
            <Sidebar.Navigation>
              <Sidebar.Button
                active={currentPage === 'Things'}
                icon={LightbulbOutlineIcon}
                activeIcon={LightbulbIcon}
                component="button"
                extraProps={{ onClick() { setCurrentPage('Things'); } }}
              >
                Things
              </Sidebar.Button>
              <Sidebar.Button
                active={currentPage === 'Units'}
                icon={ArchiveOutlineIcon}
                activeIcon={ArchiveIcon}
                component="button"
                extraProps={{ onClick() { setCurrentPage('Units'); } }}
              >
                Units
              </Sidebar.Button>
              <Sidebar.Button
                active={currentPage === 'Connectors'}
                icon={PuzzleOutlineIcon}
                activeIcon={PuzzleIcon}
                component="button"
                extraProps={{ onClick() { setCurrentPage('Connectors'); } }}
              >
                Connectors
              </Sidebar.Button>
            </Sidebar.Navigation>
            <Sidebar.SecondaryNavigation>
              <Sidebar.Button icon={NotebookOutlineIcon} href="#documentation">
                Documentation
              </Sidebar.Button>
              <Sidebar.Button icon={SchoolOutlineIcon} href="#tutorials">
                Tutorials
              </Sidebar.Button>
              <Sidebar.Button icon={GraphOutlineIcon} href="#connectors">
                GraphQL Explorer
              </Sidebar.Button>
            </Sidebar.SecondaryNavigation>
            <Sidebar.Account
              username="user@example.com"
              imageSrc="https://avatars.githubusercontent.com/u/2061454?v=4"
              linkText="Account Settings"
              href="#account"
            />
            <Sidebar.Footer copyright="© 2021 IoT connctd GmbH">
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
          <Content>
            Content...
          </Content>
        </AppShell.Content>
      </AppShell>
    </StoryContainer>
  );
});

stories.add('Dev-Center - loading', () => {
  const apps = [];

  const [currentPage, setCurrentPage] = useState('Things');

  return (
    <StoryContainer>
      <AppShell>
        <AppShell.Navigation>
          <Sidebar>
            <Sidebar.Head>
              <img src="/logo.svg" alt="Logo" width="100%" />
            </Sidebar.Head>
            <Sidebar.AppSelector
              loading
              apps={apps}
              createAppProps={{ href: '#create-app' }}
              allAppsProps={{ href: '#all-apps' }}
            />
            <Sidebar.Navigation>
              <Sidebar.Button
                active={currentPage === 'Things'}
                icon={LightbulbOutlineIcon}
                activeIcon={LightbulbIcon}
                component="button"
                extraProps={{ onClick() { setCurrentPage('Things'); } }}
              >
                Things
              </Sidebar.Button>
              <Sidebar.Button
                active={currentPage === 'Units'}
                icon={ArchiveOutlineIcon}
                activeIcon={ArchiveIcon}
                component="button"
                extraProps={{ onClick() { setCurrentPage('Units'); } }}
              >
                Units
              </Sidebar.Button>
              <Sidebar.Button
                active={currentPage === 'Connectors'}
                icon={PuzzleOutlineIcon}
                activeIcon={PuzzleIcon}
                component="button"
                extraProps={{ onClick() { setCurrentPage('Connectors'); } }}
              >
                Connectors
              </Sidebar.Button>
            </Sidebar.Navigation>
            <Sidebar.SecondaryNavigation>
              <Sidebar.Button icon={NotebookOutlineIcon} href="#documentation">
                Documentation
              </Sidebar.Button>
              <Sidebar.Button icon={SchoolOutlineIcon} href="#tutorials">
                Tutorials
              </Sidebar.Button>
              <Sidebar.Button icon={GraphOutlineIcon} href="#connectors">
                GraphQL Explorer
              </Sidebar.Button>
            </Sidebar.SecondaryNavigation>
            <Sidebar.Account
              username="user@example.com"
              imageSrc="https://avatars.githubusercontent.com/u/2061454?v=4"
              linkText="Account Settings"
              href="#account"
            />
            <Sidebar.Footer copyright="© 2021 IoT connctd GmbH">
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
          <Content>
            Content...
          </Content>
        </AppShell.Content>
      </AppShell>
    </StoryContainer>
  );
});

stories.add('Docs & Tutorial', () => {
  const [currentPage, setCurrentPage] = useState('Introduction');

  return (
    <StoryContainer>
      <AppShell>
        <AppShell.Navigation>
          <Sidebar>
            <Sidebar.Head bordered>
              <img src="/logo-docs.svg" alt="Logo" width="100%" />
            </Sidebar.Head>
            <Sidebar.Navigation>
              <Sidebar.Section title="Gettings Started">
                <Sidebar.Button
                  mainpage
                  active={currentPage === 'Introduction - Gettings Started'}
                  component="button"
                  extraProps={{ onClick() { setCurrentPage('Introduction - Gettings Started'); } }}
                >
                  Introduction
                </Sidebar.Button>
                <Sidebar.Button
                  subpage
                  active={currentPage === 'What is connctd?'}
                  component="button"
                  extraProps={{ onClick() { setCurrentPage('What is connctd?'); } }}
                >
                  What is connctd?
                </Sidebar.Button>
                <Sidebar.Button
                  subpage
                  active={currentPage === 'How to get started'}
                  component="button"
                  extraProps={{ onClick() { setCurrentPage('How to get started'); } }}
                >
                  How to get started
                </Sidebar.Button>
                <Sidebar.Button
                  mainpage
                  active={currentPage === 'Authorization'}
                  component="button"
                  extraProps={{ onClick() { setCurrentPage('Authorization'); } }}
                >
                  Authorization
                </Sidebar.Button>
                <Sidebar.Button
                  mainpage
                  active={currentPage === 'OAuth 2.0'}
                  component="button"
                  extraProps={{ onClick() { setCurrentPage('OAuth 2.0'); } }}
                >
                  OAuth 2.0
                </Sidebar.Button>
                <Sidebar.Button
                  subpage
                  active={currentPage === 'Client Credentials Flow'}
                  component="button"
                  extraProps={{ onClick() { setCurrentPage('Client Credentials Flow'); } }}
                >
                  Client Credentials Flow
                </Sidebar.Button>
                <Sidebar.Button
                  subpage
                  active={currentPage === 'Authorization Code Grant Flow'}
                  component="button"
                  extraProps={{ onClick() { setCurrentPage('Authorization Code Grant Flow'); } }}
                >
                  Authorization Code Grant Flow
                </Sidebar.Button>
              </Sidebar.Section>

              <Sidebar.Section
                title="GraphQL"
                expandable
                initExpanded
                contentHeight="375px"
              >
                <Sidebar.Button
                  mainpage
                  active={currentPage === 'Introduction - GraphQL'}
                  component="button"
                  extraProps={{ onClick() { setCurrentPage('Introduction - GraphQL'); } }}
                >
                  Introduction
                </Sidebar.Button>
                <Sidebar.Button
                  subpage
                  active={currentPage === 'Quick Start'}
                  component="button"
                  extraProps={{ onClick() { setCurrentPage('Quick Start'); } }}
                >
                  Quick Start
                </Sidebar.Button>
                <Sidebar.Button
                  mainpage
                  active={currentPage === 'Tools'}
                  component="button"
                  extraProps={{ onClick() { setCurrentPage('Tools'); } }}
                >
                  Tools
                </Sidebar.Button>
                <Sidebar.Button
                  subpage
                  active={currentPage === 'Client Libraries'}
                  component="button"
                  extraProps={{ onClick() { setCurrentPage('Client Libraries'); } }}
                >
                  Client Libraries
                </Sidebar.Button>
                <Sidebar.Button
                  subpage
                  active={currentPage === 'SDL'}
                  component="button"
                  extraProps={{ onClick() { setCurrentPage('SDL'); } }}
                >
                  SDL
                </Sidebar.Button>
                <Sidebar.Button
                  subpage
                  active={currentPage === 'Schema Introspection'}
                  component="button"
                  extraProps={{ onClick() { setCurrentPage('Schema Introspection'); } }}
                >
                  Schema Introspection
                </Sidebar.Button>
                <Sidebar.Button
                  mainpage
                  active={currentPage === 'Things - GraphQL'}
                  component="button"
                  extraProps={{ onClick() { setCurrentPage('Things - GraphQL'); } }}
                >
                  Things
                </Sidebar.Button>
                <Sidebar.Button
                  subpage
                  active={currentPage === 'Resolve'}
                  component="button"
                  extraProps={{ onClick() { setCurrentPage('Resolve'); } }}
                >
                  Resolve
                </Sidebar.Button>
                <Sidebar.Button
                  subpage
                  active={currentPage === 'Create'}
                  component="button"
                  extraProps={{ onClick() { setCurrentPage('Create'); } }}
                >
                  Create
                </Sidebar.Button>
                <Sidebar.Button
                  subpage
                  active={currentPage === 'Delete'}
                  component="button"
                  extraProps={{ onClick() { setCurrentPage('Delete'); } }}
                >
                  Delete
                </Sidebar.Button>
                <Sidebar.Button
                  subpage
                  active={currentPage === 'Trigger Actions'}
                  component="button"
                  extraProps={{ onClick() { setCurrentPage('Trigger Actions'); } }}
                >
                  Trigger Actions
                </Sidebar.Button>
              </Sidebar.Section>

              <Sidebar.Section
                title="REST"
                expandable
                contentHeight="270px"
              >
                <Sidebar.Button
                  mainpage
                  active={currentPage === 'Apps'}
                  component="button"
                  extraProps={{ onClick() { setCurrentPage('Apps'); } }}
                >
                  Apps
                </Sidebar.Button>
                <Sidebar.Button
                  subpage
                  active={currentPage === 'Register a callback url'}
                  component="button"
                  extraProps={{ onClick() { setCurrentPage('Register a callback url'); } }}
                >
                  Register a callback url
                </Sidebar.Button>
                <Sidebar.Button
                  mainpage
                  legacy
                  active={currentPage === 'Things - REST'}
                  component="button"
                  extraProps={{ onClick() { setCurrentPage('Things - REST'); } }}
                >
                  Things
                </Sidebar.Button>
                <Sidebar.Button
                  subpage
                  active={currentPage === 'Create Thing'}
                  component="button"
                  extraProps={{ onClick() { setCurrentPage('Create Thing'); } }}
                >
                  Create Thing
                </Sidebar.Button>
                <Sidebar.Button
                  subpage
                  active={currentPage === 'Retrieve Things'}
                  component="button"
                  extraProps={{ onClick() { setCurrentPage('Retrieve Things'); } }}
                >
                  Retrieve Things
                </Sidebar.Button>
                <Sidebar.Button
                  subpage
                  active={currentPage === 'Retrieve Thing'}
                  component="button"
                  extraProps={{ onClick() { setCurrentPage('Retrieve Thing'); } }}
                >
                  Retrieve Thing
                </Sidebar.Button>
                <Sidebar.Button
                  subpage
                  active={currentPage === 'Retrieve Thing Component'}
                  component="button"
                  extraProps={{ onClick() { setCurrentPage('Retrieve Thing Component'); } }}
                >
                  Retrieve Thing Component
                </Sidebar.Button>
              </Sidebar.Section>
            </Sidebar.Navigation>
            <Sidebar.SecondaryNavigation>
              <Sidebar.Button
                icon={FlaskOutlineIcon}
                href="#dev-cetner"
              >
                Developer Center
              </Sidebar.Button>
              <Sidebar.Button
                icon={SchoolOutlineIcon}
                href="#tutorials"
              >
                Tutorials
              </Sidebar.Button>
              <Sidebar.Button
                icon={GraphOutlineIcon}
                href="#graphql-explorer"
              >
                GraphQL Explorer
              </Sidebar.Button>
            </Sidebar.SecondaryNavigation>
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
          <Content>
            Content...
          </Content>
        </AppShell.Content>
      </AppShell>
    </StoryContainer>
  );
});
