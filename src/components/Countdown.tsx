import { useEffect, useState } from "react"
import { useChallenges } from "../contexts/ChallengesContext"
import { useCountown } from "../contexts/CountdownContext"
import styles from "../styles/components/Countdown.module.css"

export function Countdown() {
  const { minutes, seconds, isActive, hasFinished, startCountdown, resetCountdown } = useCountown()

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds ).padStart(2, '0').split('')

  return (
    <div>
      <div className={styles.countdown}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      { hasFinished
        ? <button 
            disabled
            className={`${styles.startCountdownButton}`}>
            Ciclo encerrado
          </button>
        : isActive 
          ? <button 
              type="button" 
              className={`${styles.startCountdownButton} ${styles.countdownButtonActive}`}
              onClick={resetCountdown}>
              Abandonar ciclo
            </button>
          : <button 
              type="button" 
              className={`${styles.startCountdownButton} ${styles.countdownButtonInactive}`}
              onClick={startCountdown}>
              Iniciar ciclo
            </button>
      }
    </div>
  )
}