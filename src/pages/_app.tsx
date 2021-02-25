import { ThemeSwitcher } from "../components/ThemeSwitcher"
import { ApplicationProvider } from "../contexts/ApplicationContext"
import { ChallengesProvider } from "../contexts/ChallengesContext"
import { AppContext } from "./_appContext"
import '../styles/global.css'

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <ApplicationProvider>
        <AppContext>
          <>
            <Component {...pageProps} />
            <ThemeSwitcher/>
          </>
        </AppContext>
      </ApplicationProvider>
    </ChallengesProvider>
  )
}

export default MyApp
