import * as React from "react"
import { createGlobalStyle } from "styled-components"

const GlobalStyle: React.FC = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Hind:400,600,700&display=swap');
    font-family: 'Hind', Helvetica Neue, Helvetica, Segoe UI, Arial, freesans, sans-serif;
  }

  input, textarea, button { font-family: 'Hind', Helvetica Neue, Helvetica, Segoe UI, Arial, freesans, sans-serif; }
`

export default GlobalStyle
