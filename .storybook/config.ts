import { configure, addParameters } from '@storybook/react'
import connctdTheme from './connctd-theme'
// automatically import all files ending in *.stories.tsx
const req = require.context('../components', true, /\.stories\.tsx$/)

// Option defaults.
addParameters({
  options: {
    theme: connctdTheme,
  },
})


function loadStories() {
  req.keys().forEach(req)
}

configure(loadStories, module)

