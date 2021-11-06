import { ThemeProvider } from "next-themes"
import Head from "next/head"

import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Sachin Kumar Pal</title>
      </Head>
      <ThemeProvider attribute="class" enableColorScheme={false}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
