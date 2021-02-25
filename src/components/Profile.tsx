import { useChallenges } from "../contexts/ChallengesContext"
import styles from "../styles/components/Profile.module.css"

export function Profile() {
  const { level } = useChallenges()

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/RuanScherer.png" alt="Ruan Schere"/>
      <div>
        <strong>Ruan Scherer</strong>
        <p>
          <img src="icons/level.svg" alt="Ícone de nível"/>
          Level {level}
        </p>
      </div>
    </div>
  )
}