import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GetStartedForm from '../components/GetStartedForm'

export default function GetStarted() {
  return (
    <div>
      <Head>
        <title>Get Started - IntelliCare</title>
        <meta name="description" content="Start your journey with IntelliCare" />
      </Head>

      <Navbar />
      <main>
        <GetStartedForm />
      </main>
      <Footer />
    </div>
  )
}