import React from "react"
import { storiesOf } from "@storybook/react"
import { withInfo } from "@storybook/addon-info"
import { withKnobs } from "@storybook/addon-knobs"
import Table from "./index"

const stories = storiesOf("Table", module)
stories.addDecorator(withKnobs)
stories.addDecorator(withInfo)
stories.addParameters({ info: { inline: true } })

stories.add("Table", () => {
    const headings = ["Name", "Created", "Public", "Tags", ""]
    const data = [
        ["Production", "01.07.2019", "No", "production", "edit"],
        ["Production", "01.07.2019", "No", "production", "edit"],
        ["Production", "01.07.2019", "No", "production", "edit"],
        ["Production", "01.07.2019", "No", "production", "edit"],
        ["Production", "01.07.2019", "No", "production", "edit"],
        ["Production", "01.07.2019", "No", "production", "edit"],
        ["Production", "01.07.2019", "No", "production", "edit"],
    ]
    return <Table data={data} headings={headings} />
})
