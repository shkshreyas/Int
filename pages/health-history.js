import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HealthHistory from '../components/HealthHistory';

export default function HealthHistoryPage() {
  return (
    <div>
      <Head>
        <title>Health History - IntelliCare</title>
        <meta name="description" content="View your health history and upcoming appointments" />
      </Head>

      <Navbar />
      <main>
        <HealthHistory />
      </main>
      <Footer />
    </div>
  );
}