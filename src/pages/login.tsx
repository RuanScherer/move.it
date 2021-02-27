import Head from "next/head";
import { useState } from "react";
import styles from "../styles/pages/Login.module.css"

export default function Login() {
  const [username, setUsername] = useState("")

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
          <button disabled={!username}>
            <img src="/icons/arrow-right.svg" alt="Avançar"/>
          </button>
        </div>
      </section>
    </main>
  )
}