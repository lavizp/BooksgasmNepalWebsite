import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Header } from '@/components/header/header'
import Footer from '@/components/footer'
export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>Booksgasm Nepal</title>
    </Head>
    <Header/>
    <Component {...pageProps} />
    <Footer/>
  </>
}
