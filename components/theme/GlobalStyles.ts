import * as React from "react"
import { createGlobalStyle } from "styled-components"

const GlobalStyle: React.FC = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Hind:400,600,700&display=swap');

  body,html {
    margin: 0 auto;
    padding: 0;
    height: 100%;
    font-family: 'Hind', Helvetica Neue, Helvetica, Segoe UI, Arial, freesans, sans-serif;
  }

  #root { /* Margin collapse fix  */
    padding: 1px 0 0 0;
    margin: -1px auto 0 auto;
    height: 100%;
  }

  input, select, textarea, button { font-family: 'Hind', Helvetica Neue, Helvetica, Segoe UI, Arial, freesans, sans-serif; outline: none; }
  :focus { /* https://stackoverflow.com/questions/935559/remove-safari-chrome-textinput-textarea-glow */
    outline-color: transparent;
    outline-style: none;
  }


  * {
    box-sizing: border-box;
  }

`

export default GlobalStyle
