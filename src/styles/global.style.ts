import { createGlobalStyle } from 'styled-components'

import { resets } from './reset.style'

const GlobalStyle = createGlobalStyle`
  ${resets}

  body, html, #__next {
    height: 100%;
  }
`

export { GlobalStyle }
