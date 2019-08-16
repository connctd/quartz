import React, { useState } from "react"
import { storiesOf } from "@storybook/react"
import { withInfo } from "@storybook/addon-info"
import { action } from "@storybook/addon-actions"
import { withKnobs, text, boolean } from "@storybook/addon-knobs"
import { Input, Checkbox, TextArea } from "./index"

const stories = storiesOf("Form", module)
stories.addDecorator(withKnobs)
stories.addDecorator(withInfo)
stories.addParameters({ info: { inline: true } })

stories.add("Input", () => {
  const placeholder: string = text("Placeholder", "Email")
  return <Input placeholder={placeholder} onChange={action("onChange")} />
})

stories.add("Input with label", () => {
  const placeholder: string = text("Label", "Email")
  return <Input label={placeholder} onChange={action("onChange")} />
})

stories.add("Input Error", () => {
  const placeholder: string = text("Placeholder", "Email")
  const errored: boolean = boolean("Error", true)
  return <Input hasError={errored} placeholder={placeholder} onChange={action("onChange")} />
})

const CheckBoxStory = () => {
  const [checked, check] = useState(true)
  return (
  <Checkbox checked={checked} onChange={() => { check(!checked); action("Checked")(checked) }} id="terms_of_service">
    <span>I agree to the Terms of Service</span>
  </Checkbox>
    )
}

stories.add("Checkbox", () => <CheckBoxStory />)

stories.add("Textarea", () => <TextArea />)
