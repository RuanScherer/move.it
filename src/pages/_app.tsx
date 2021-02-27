import { ApplicationProvider } from "../contexts/ApplicationContext"
import { AppContext } from "./_appContext"
import '../styles/global.css'

function MyApp({ Component, pageProps }) {
  return (
    <ApplicationProvider>
      <AppContext>
        <>
          <Component {...pageProps} />
        </>
      </AppContext>
    </ApplicationProvider>
  )
}

export default MyApp
