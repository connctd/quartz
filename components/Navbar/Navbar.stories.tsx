import React from "react"
import { storiesOf } from "@storybook/react"
import { withInfo } from "@storybook/addon-info"
//import { action } from "@storybook/addon-actions"
import { withKnobs, } from "@storybook/addon-knobs"
import { Navbar, Navlink, Navgroup, Menugroup, Menuarrow } from "./index"
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
                <Navgroup>
                    <Navlink target="http://example.com" text="Test123" />
                </Navgroup>
            </div>
            <div className="Staples">
                <Navgroup focus>
                    <div><p>Title<Menuarrow down /></p></div> 
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


  stories.add("MenuArrow", () => {
      return (
          <Navbar>
            <div className="Items">
            <Navgroup focus>
                    <div><p>Pfeil unten<Menuarrow down /></p></div> 
            </Navgroup>

            <Navgroup focus>
                    <div><p>Pfeil oben<Menuarrow up /></p></div> 
            </Navgroup>

            <Navgroup focus>
                    <div><p>Pfeil links<Menuarrow left /></p></div> 
            </Navgroup>

            <Navgroup focus>
                    <div><p>Pfeil rechts<Menuarrow right /></p></div> 
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