import Link from "next/link"
import styles from "../styles/components/Sidebar.module.css"

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img src="logo-short.svg" alt="Logo do move.it"/>

      <nav>
        <ul>
          <li>
            <Link href="/home">
              <img src="/icons/home.svg" alt="Home" />
            </Link>
          </li>
          <li>
            <Link href="/ranking">
              <img src="/icons/award.svg" alt="Ranking" />
            </Link>
          </li>
        </ul>
      </nav>

      <div />
    </aside>
  )
}