import * as React from "react"
import { createGlobalStyle } from "styled-components"

const GlobalStyle: React.FC = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Hind:400,600,700&display=swap');
    font-family: 'Hind', Helvetica Neue, Helvetica, Segoe UI, Arial, freesans, sans-serif;
  }

  input, select, textarea, button { font-family: 'Hind', Helvetica Neue, Helvetica, Segoe UI, Arial, freesans, sans-serif; outline: none; }
  :focus { /* https://stackoverflow.com/questions/935559/remove-safari-chrome-textinput-textarea-glow */
    outline-color: transparent;
    outline-style: none;
  }

  body,html,#root {
    margin: 0;
    padding: 0;
    height: 100%;
  }
  * {
    box-sizing: border-box;
  }

`

export default GlobalStyle
