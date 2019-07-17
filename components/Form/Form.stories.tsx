import React from "react"
import { storiesOf } from "@storybook/react"
import { withInfo } from "@storybook/addon-info"
import { action } from "@storybook/addon-actions"
import { withKnobs, text } from "@storybook/addon-knobs"
import { Input } from "./index"

const stories = storiesOf("Form", module)
stories.addDecorator(withKnobs)
stories.addDecorator(withInfo)
stories.addParameters({ info: { inline: true } })

stories.add("Input", () => {
  const placeholder: string = text("Placeholder", "Email")
  return <Input placeholder={placeholder} onChange={action("onChange")} />
})
