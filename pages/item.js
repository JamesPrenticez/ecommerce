import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Item from '../components/Item'

function item() {
  return (
    <>
      <Head>
        <title>Poppins</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    	<Header />
      <Item />
      <Footer />
    </>
  )
}

export default item
