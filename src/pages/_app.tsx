import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from '@/styles'
import { StandardTheme } from '@/themes'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Gabriel Barreto Boilerplate</title>
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={StandardTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
