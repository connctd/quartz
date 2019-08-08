import React from "react"
import { storiesOf } from "@storybook/react"
import { withInfo } from "@storybook/addon-info"
import { withKnobs, text } from "@storybook/addon-knobs"
import { action } from "@storybook/addon-actions"
import { Action } from "./index"

const stories = storiesOf("Action", module)
stories.addDecorator(withInfo)
stories.addDecorator(withKnobs)
stories.addParameters({ info: { inline: true } })

stories.add("Default", () => {
    const label = text("Label", "Create an App")
    return <Action onClick={action("Clicked")} label={label} />
})
