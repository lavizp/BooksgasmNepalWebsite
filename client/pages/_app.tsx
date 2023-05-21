import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Header } from '@/components/header/header'
import Footer from '@/components/HomePage/footer'
import { Provider } from 'react-redux'
import { store } from '@/store/store'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>Booksgasm Nepal</title>
    </Head>
    <Provider store={store}>

      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </Provider>
  </>
}
