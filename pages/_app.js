import '../styles/globals.css'
import { Meta } from '../components/meta/Seo'
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Meta />
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}

export default MyApp
