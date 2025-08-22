import '@/styles/globals.css'
import ScrollIndicator from '@/components/ScrollIndicator'

export default function App({ Component, pageProps }) {
  return (
    <>
      <ScrollIndicator />
      <Component {...pageProps} />
    </>
  )
}
