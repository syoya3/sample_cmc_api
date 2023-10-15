import Link from 'next/link'
import Layout from '../components/Layout'
import CryptoPrice from '../components/CmcPrice'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js aaa 👋</h1>
    <p>
      <Link href="/about">About</Link>
      <h1>Cryptocurrency Price Tracker</h1>
      <CryptoPrice id="1" />
      <CryptoPrice id="1027" />
    </p>
  </Layout>
)

export default IndexPage
