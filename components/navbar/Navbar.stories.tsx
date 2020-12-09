import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';

import {
  Navbar, NavLink, NavGroup, MenuGroup, MenuArrow
} from './index';

const stories = storiesOf('Navbar', module);
stories.addDecorator(withKnobs);
stories.addDecorator(withInfo);
stories.addParameters({ info: { inline: true } });

stories.add('Navbar', () => (
  <Navbar>
    <div className="Items">
      <div className="menuName">Connctd</div>
      <NavGroup>
        <NavLink target="http://example.com" text="Test123" />
      </NavGroup>
    </div>
    <div className="Staples">
      <NavGroup focus>
        <div>
          <p>
            Title
            <MenuArrow down />
          </p>
        </div>

        <MenuGroup>
          <NavLink target="http://example.com" text="Test123" />
          <NavLink target="http://example.com" text="Test456" />
          <NavLink target="http://example.com" text="Test789" />
        </MenuGroup>

      </NavGroup>
    </div>
  </Navbar>
));

stories.add('MenuArrow', () => (
  <Navbar>
    <div className="Items">
      <NavGroup>
        <div>
          <p>
            Pfeil unten
            <MenuArrow down />
          </p>
        </div>
      </NavGroup>

      <NavGroup>
        <div>
          <p>
            Pfeil oben
            <MenuArrow up />
          </p>
        </div>
      </NavGroup>

      <NavGroup>
        <div>
          <p>
            Pfeil links
            <MenuArrow left />
          </p>
        </div>
      </NavGroup>

      <NavGroup>
        <div>
          <p>
            Pfeil rechts
            <MenuArrow right />
          </p>
        </div>
      </NavGroup>
    </div>
  </Navbar>

));
