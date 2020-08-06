import React from "react"
import { storiesOf } from "@storybook/react"
import { withInfo } from "@storybook/addon-info"
import { withKnobs } from "@storybook/addon-knobs"

import {
    Sidebar, SidebarGroup, SidebarItem, SidebarGroupItem, FooterLinkBox, FooterAccountBox
} from "./index"

import {
    Logo
}
from "../index"

let fullHeight = {
    height: "100vh",
}

const stories = storiesOf("Sidebar", module)
stories.addDecorator(withKnobs)
stories.addDecorator(withInfo)
stories.addParameters({ info: { inline: true } })

stories.add("Sidebar", () => (
    <div style={fullHeight}>
        <Sidebar>
            <div className="Header"><Logo width={200} /></div>
            <div className="Middle">
                <SidebarGroup title="Group One">
                    <SidebarGroupItem title="Test with focus" target="http://example.com" focus/>
                    <SidebarGroupItem title="Test with Divider" target="http://example.com" secondaryTitle="Secondary Title" divider/>
                    <SidebarGroupItem title="Test" target="http://example.com" secondaryTitle="Secondary Target" secondaryTarget="http://example.com"/>
                </SidebarGroup>
                <SidebarItem title="Api Docs" />
                <SidebarItem title="Tutorials" target="#" />

            </div>
            <div className="Footer">
                <FooterAccountBox name="Max Mustermann" subtitle="Account settings"/>
                <FooterLinkBox>
                    <a href="#">Imprint</a>
                    <a href="#">Privacy</a>
                    <a href="#">Support</a>
                </FooterLinkBox>
            </div>
        </Sidebar>
    </div>
))
