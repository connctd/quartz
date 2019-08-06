import React from "react"
import { storiesOf } from "@storybook/react"
import { withInfo } from "@storybook/addon-info"
//import { action } from "@storybook/addon-actions"
import { withKnobs, } from "@storybook/addon-knobs"
import { Navbar, Navlink, Navgroup, Menugroup } from "./index"
//import styled from "styled-components"

const stories = storiesOf("Navbar", module)
stories.addDecorator(withKnobs)
stories.addDecorator(withInfo)
stories.addParameters({ info: { inline: true } })

stories.add("Navbar", () => {
    return (
        <Navbar>
            <div className="Items">
                <div className="menuName">Connctd</div>
                <div className="menuName">Connctd</div>
                <Navlink target="http://example.com" text="Test123" />
            </div>
            <div className="Staples">
                <div className="menuName">Connctd</div>
                <div className="menuName">Connctd</div>
                <Navgroup>
                    <div>Title</div>
                    <Menugroup>
                        <Navlink target="http://example.com" text="Test123" />
                        <Navlink target="http://example.com" text="Test456" />
                        <Navlink target="http://example.com" text="Test789" />
                    </Menugroup>
                    
                </Navgroup>
            </div>
        </Navbar>
    )
  })


/*
stories.add("component navbar", () => {
    const NavLink = (props) => styled.a`
    `
    return (
    <Navbar text="Connctd">
        <NavLink>Apps</NavLink>
        <NavLink>Whatever</NavLink>
        <NavLink right></NavLink>
    </Navbar>
    )
})*/