import HeadComponent from '@/components/head.jsx';
import Navbar from '@/components/navbar.jsx';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <div>
      <HeadComponent />
      <div>
        <Navbar />
        <Component className="min-h-screen" {...pageProps} />
      </div>
    </div>
  );
}
