import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';
import AIChatButton from '../components/AIChatButton';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
      <AIChatButton />
    </ThemeProvider>
  );
}

export default MyApp;