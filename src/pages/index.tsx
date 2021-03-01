import Head from "next/head"
import { useRouter } from 'next/router'
import { useState } from "react"
import axios from 'axios'
import styles from "../styles/pages/Login.module.css"

export default function Login() {
  const [username, setUsername] = useState("")
  const { replace } = useRouter()

  function handleLogin() {
    if (username) {
      axios.get(`https://api.github.com/users/${username}`, {
        headers: {
          Accept: 'application/vnd.github.v3+json'
        }
      }).then(response => {
        localStorage.setItem("userPhoto", response.data.avatar_url)
        localStorage.setItem("userName", response.data.name)
      }).catch(error => {
        console.log(error)
      }).finally(() => {
        replace("/home")
      })
    }
  }

  return (
    <main className={styles.loginContainer}>
      <Head>
        <title>Login | Move.it</title>
      </Head>

      <section>
        <img src="login-background.svg" alt="Ilustração de fundo"/>
      </section>

      <section className={styles.loginForm}>
        <img src="/logo.svg" alt="Logo"/>

        <h1>Bem-vindo</h1>

        <div className={styles.githubInformation}>
          <img src="/icons/github-logo.svg" alt="Logo do Github"/>
          <span>Faça login com seu Github para começar</span>
        </div>

        <div>
          <input 
            type="text"
            placeholder="Digite seu username"
            value={username}
            onChange={event => setUsername(event.target.value)}
          />
          <button disabled={!username} onClick={handleLogin}>
            <img src="/icons/arrow-right.svg" alt="Avançar"/>
          </button>
        </div>
      </section>
    </main>
  )
}