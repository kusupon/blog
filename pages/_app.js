import '../styles/globals.css'
import { Meta } from '../components/meta/Seo'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Meta />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
