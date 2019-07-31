import React from "react"
import { storiesOf } from "@storybook/react"
import { withInfo } from "@storybook/addon-info"
//import { action } from "@storybook/addon-actions"
import { withKnobs, } from "@storybook/addon-knobs"
import { Navbar } from "./index"

const stories = storiesOf("Navbar", module)
stories.addDecorator(withKnobs)
stories.addDecorator(withInfo)
stories.addParameters({ info: { inline: true } })

stories.add("Navbar", () => {
  const menuContent = {
    categorys: [
        {
            id: 1,
            categoryName: "Category One",
            default: true,
            menuLinks: [
                {
                    name: "Item One Test123",
                    target: "http://example.com/Test123",
                },
                {
                    name: "Item One Test456",
                    target: "http://example.com/Test456",
                },
                {
                    name: "Item One Test789",
                    target: "http://example.com/Test789",
                },
            ]
        },
        {
            id: 2,
            categoryName: "Category Two",
            default: false,
            menuLinks: [
                {
                    name: "Item One Test123",
                    target: "http://example.com/Test123",
                },
                {
                    name: "Item One Test456",
                    target: "http://example.com/Test456",
                },
                {
                    name: "Item One Test789",
                    target: "http://example.com/Test789",
                },
            ]
        },
    ],
    staples: [
        {
            id: 3,
            stapleName: "Staple One",
            stapleLinks: [
                {
                    name: "Api Docs",
                    target: "http://example.com/ApiDocs"
                }
            ]
        }
    ],
}

    return <Navbar text="Connctd" menuContent={menuContent} />
  })