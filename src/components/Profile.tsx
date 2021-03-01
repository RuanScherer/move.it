import { useEffect, useState } from "react"
import { useChallenges } from "../contexts/ChallengesContext"
import styles from "../styles/components/Profile.module.css"

export function Profile() {
  const { level } = useChallenges()
  const [avatar, setAvatar] = useState("")
  const [name, setName] = useState("")

  useEffect(() => {
    setAvatar(localStorage.getItem("userPhoto"))
    setName(localStorage.getItem("userName"))
  })

  return (
    <div className={styles.profileContainer}>
      <img src={avatar || "https://avatars.githubusercontent.com/u/44452841?s=460&v=4"} alt={name}/>
      <div>
        <strong>{name || "Anônimo"}</strong>
        <p>
          <img src="icons/level.svg" alt="Ícone de nível"/>
          Level {level}
        </p>
      </div>
    </div>
  )
}