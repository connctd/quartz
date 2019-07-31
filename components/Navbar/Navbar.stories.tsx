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
    return <Navbar />
  })