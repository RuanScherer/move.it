import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useChallenges } from "./ChallengesContext";

interface CoundownContextData {
  minutes: number
  seconds: number
  hasFinished: boolean
  isActive: boolean
  startCountdown: () => void
  resetCountdown: () => void
}

interface CountdownProviderProps {
  children: ReactNode
}

export const CountdownContext = createContext({} as CoundownContextData)

export function CountdownProvider({ children }: CountdownProviderProps) {
  const [time, setTime] = useState(0.1 * 60) // seconds
  const [isActive, setIsActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)
  const { startNewChallenge } = useChallenges()

  let countdownTimeout: NodeJS.Timeout;

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  function startCountdown() {
    setIsActive(true)
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout)
    setIsActive(false)
    setHasFinished(false)
    setTime(0.1 * 60)
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    } else if (isActive && time === 0) {
      setHasFinished(true)
      setIsActive(false)
      startNewChallenge()
    }
  }, [isActive, time])

  return (
    <CountdownContext.Provider 
      value={{ 
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCountdown,
        resetCountdown
      }}>
      {children}
    </CountdownContext.Provider>
  )
}

export const useCountown = () => {
  const countdownContext = useContext(CountdownContext)
  return countdownContext
}