import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Main from '../components/Main'

export default function Home() {
  return (
    <>
      <Head>
        <title>Poppins</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    	<Header />
      <Main />
      <Footer />
    </>
  )
}
