import React from "react";
import { GetServerSideProps } from "next"
import Head from "next/head";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChallengeBox } from "../components/ChallengeBox";
import styles from "../styles/pages/Home.module.css"
import { CountdownProvider } from "../contexts/CountdownContext";
import { ChallengesProvider } from "../contexts/ChallengesContext";
import { ThemeSwitcher } from "../components/ThemeSwitcher";
import { Sidebar } from "../components/Sidebar";

interface HomeProps {
  level: number
  currentExperience: number
  challengesCompleted: number
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider 
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}>
      <div className={styles.container}>
        <Sidebar />

        <div>
          <Head>
            <title>Home | Move.it</title>
          </Head>

          <ThemeSwitcher/>

          <ExperienceBar/>

          <CountdownProvider>
            <section style={{ marginTop: '1rem' }}>
              <div>
                <Profile/>
                <CompletedChallenges/>
                <Countdown/>
              </div>
              
              <div>
                <ChallengeBox/>
              </div>
            </section>
          </CountdownProvider>
        </div>
      </div>
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { level, currentExperience, challengesCompleted } = context.req.cookies

  return {
    props: {
      level: Number(level), 
      currentExperience: Number(currentExperience), 
      challengesCompleted: Number(challengesCompleted)
    }
  }
}