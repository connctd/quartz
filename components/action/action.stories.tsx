import React from "react"
import { storiesOf } from "@storybook/react"
import { withInfo } from "@storybook/addon-info"
import { action } from "@storybook/addon-actions"
import { Action } from "./index"

const stories = storiesOf("Action", module)
stories.addDecorator(withInfo)
stories.addParameters({ info: { inline: true } })

stories.add("Default", () => <Action onClick={action("Clicked")} label="Create an app" />)
