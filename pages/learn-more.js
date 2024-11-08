import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import LearnMoreContent from '../components/LearnMoreContent'

export default function LearnMore() {
  return (
    <div>
      <Head>
        <title>Learn More - IntelliCare</title>
        <meta name="description" content="Discover how IntelliCare is transforming healthcare" />
      </Head>

      <Navbar />
      <main>
        <LearnMoreContent />
      </main>
      <Footer />
    </div>
  )
}