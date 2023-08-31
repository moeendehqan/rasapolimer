import Head from 'next/head'
import Header from './componets/header'
import VideoPlayer from './componets/videoPlayer'
import About_us from './componets/about_us'
import Products from './componets/Products'
import Footer from './componets/footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>راسا پلیمر</title>
        <meta name="description" content="تولید کننده" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <VideoPlayer />
        <About_us />
        <Products />
      </main>
      <Footer />

    </>
  )
}
