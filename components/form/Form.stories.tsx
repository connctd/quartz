import React, { useState } from "react"
import { storiesOf } from "@storybook/react"
import { withInfo } from "@storybook/addon-info"
import { action } from "@storybook/addon-actions"
import { withKnobs, text, boolean } from "@storybook/addon-knobs"
import {
 Input, Checkbox, Textarea, Pill,
} from "./index"

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
  return <Input error={errored} placeholder={placeholder} onChange={action("onChange")} />
})

stories.add("Input with Icon", () => {
  const placeholder: string = text("Placeholder", "Email")
  return <Input placeholder={placeholder} onChange={action("onChange")} icon="http://amas-gmbh.de/wp-content/uploads/2017/01/Icon-Placeholder.png" />
})

stories.add("Input disabled", () => {
  const placeholder: string = text("Placeholder", "Email")
  return <Input placeholder={placeholder} onChange={action("onChange")} disabled />
})

stories.add("Textarea", () => <Textarea placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit." />)

stories.add("Textarea Error", () => {
  const errored: boolean = boolean("Error", true)
  return <Textarea error={errored} placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
})


stories.add("Pill", () => (
    <div>
    <Pill>Testpillcomponent One</Pill>
<Pill>Testpillcomponent Two</Pill>
    </div>
  ))

const CheckBoxStory = () => {
  const [checked, check] = useState(true)
  return (
  <Checkbox checked={checked} onChange={() => { check(!checked); action("Checked")(checked) }} id="terms_of_service">
    <span>I agree to the Terms of Service</span>
  </Checkbox>
    )
}

stories.add("Checkbox", () => <CheckBoxStory />)
