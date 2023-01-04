import Navbar from '../components/Navbar.jsx'
import { AuthContextProvider } from '../stores/authContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Navbar />
      <Component {...pageProps} />
    </AuthContextProvider>
  )
}

export default MyApp
