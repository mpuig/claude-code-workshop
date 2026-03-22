import type { AppProps } from 'next/app'
import { OsProvider } from '../components/os-context'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <OsProvider>
      <Component {...pageProps} />
    </OsProvider>
  )
}
