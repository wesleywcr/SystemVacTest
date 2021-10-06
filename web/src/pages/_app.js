
import Head from 'next/head'
import { GlobalStyles } from '../styles/global'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>Gerenciador da Covid19</title>
    </Head>
  <Component {...pageProps} />
  <GlobalStyles/>
  </>
  )
}

export default MyApp
