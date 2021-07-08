import Head from 'next/head'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Super Imagination</title>
        <meta name="description" content="Super Imagination" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="text-5xl">Welcome to Super Imagination</div>
    </Layout>
  )
}
