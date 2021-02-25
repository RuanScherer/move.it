import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface ApplicationContextData {
  theme: "LIGHT" | "DARK",
  handleChangeTheme: () => void
}

interface ApplicationProviderProps {
  children: ReactNode
}

export const ApplicationContext = createContext({} as ApplicationContextData)

export function ApplicationProvider({ children }: ApplicationProviderProps) {
  const [theme, setTheme] = useState<"LIGHT"|"DARK">("LIGHT")

  useEffect(() => {
    const localTheme = localStorage.getItem("theme") as "LIGHT"|"DARK"
    
    if (localTheme) {
      setTheme(localTheme)
    }
  }, [])

  function handleChangeTheme() {
    if (theme === "LIGHT") {
      setTheme("DARK")
      localStorage.setItem("theme", "DARK")
    } else {
      setTheme("LIGHT")
      localStorage.setItem("theme", "LIGHT")
    }
  }

  return (
    <ApplicationContext.Provider value={{ theme, handleChangeTheme }}>
      {children}
    </ApplicationContext.Provider>
  )
}

export const useApplication = () => {
  const applicationContext = useContext(ApplicationContext)
  return applicationContext
}