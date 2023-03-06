import { UserProvider } from '@auth0/nextjs-auth0/client'
import '@/css/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  )
}
