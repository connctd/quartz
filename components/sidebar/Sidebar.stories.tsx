import React, { useState } from 'react';
import styled from '@emotion/styled';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';

import ArchiveOutlineIcon from 'mdi-react/ArchiveOutlineIcon';
import ArchiveIcon from 'mdi-react/ArchiveIcon';
import LightbulbOutlineIcon from 'mdi-react/LightbulbOutlineIcon';
import LightbulbIcon from 'mdi-react/LightbulbIcon';
import PuzzleOutlineIcon from 'mdi-react/PuzzleOutlineIcon';
import PuzzleIcon from 'mdi-react/PuzzleIcon';
import NotebookOutlineIcon from 'mdi-react/NotebookOutlineIcon';
import NotebookIcon from 'mdi-react/NotebookIcon';
import SchoolOutlineIcon from 'mdi-react/SchoolOutlineIcon';
import SchoolIcon from 'mdi-react/SchoolIcon';
import GraphOutlineIcon from 'mdi-react/GraphOutlineIcon';
import GraphIcon from 'mdi-react/GraphIcon';

import { Sidebar } from './index';

const StoryContainer = styled.div`
  margin: -40px;
`;

const stories = storiesOf('Sidebar', module);

stories.addDecorator(withKnobs);
stories.addDecorator(withInfo);

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
          <Sidebar.Button
            icon={NotebookOutlineIcon}
            activeIcon={NotebookIcon}
            href="#things"
          >
            Documentation
          </Sidebar.Button>
          <Sidebar.Button
            icon={SchoolOutlineIcon}
            activeIcon={SchoolIcon}
            href="#units"
          >
            Tutorials
          </Sidebar.Button>
          <Sidebar.Button
            icon={GraphOutlineIcon}
            activeIcon={GraphIcon}
            href="#connectors"
          >
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
    </StoryContainer>
  );
});

stories.add('Dev-Center - no Apps', () => {
  const apps = [];

  return (
    <StoryContainer>
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
            icon={LightbulbOutlineIcon}
            activeIcon={LightbulbIcon}
            component="button"
          >
            Things
          </Sidebar.Button>
          <Sidebar.Button
            icon={ArchiveOutlineIcon}
            activeIcon={ArchiveIcon}
            component="button"
          >
            Units
          </Sidebar.Button>
          <Sidebar.Button
            icon={PuzzleOutlineIcon}
            activeIcon={PuzzleIcon}
            component="button"
          >
            Connectors
          </Sidebar.Button>
        </Sidebar.Navigation>
        <Sidebar.SecondaryNavigation>
          <Sidebar.Button
            icon={NotebookOutlineIcon}
            activeIcon={NotebookIcon}
            href="#things"
          >
            Documentation
          </Sidebar.Button>
          <Sidebar.Button
            icon={SchoolOutlineIcon}
            activeIcon={SchoolIcon}
            href="#units"
          >
            Tutorials
          </Sidebar.Button>
          <Sidebar.Button
            icon={GraphOutlineIcon}
            activeIcon={GraphIcon}
            href="#connectors"
          >
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
    </StoryContainer>
  );
});

stories.add('Docs & Tutorial', () => {
  const [currentPage, setCurrentPage] = useState('Things');

  return (
    <StoryContainer>
      <Sidebar>
        <Sidebar.Head bordered>
          <img src="/logo.svg" alt="Logo" width="100%" />
        </Sidebar.Head>
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
        </Sidebar.Navigation>
        <Sidebar.SecondaryNavigation>
          <Sidebar.Button
            icon={NotebookOutlineIcon}
            activeIcon={NotebookIcon}
            href="#things"
          >
            Documentation
          </Sidebar.Button>
          <Sidebar.Button
            icon={SchoolOutlineIcon}
            activeIcon={SchoolIcon}
            href="#units"
          >
            Tutorials
          </Sidebar.Button>
          <Sidebar.Button
            icon={GraphOutlineIcon}
            activeIcon={GraphIcon}
            href="#connectors"
          >
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
    </StoryContainer>
  );
});
