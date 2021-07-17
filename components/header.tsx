import Link from 'next/link'
import styles from "../styles/header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <h1>LaKhDaR</h1>
        <ul className={styles["menu-list"]}>
          <li>
            <Link href='#skills'><a>Skills</a></Link>
            
          </li>
          <li>
            <Link href="#projects"><a>Projects</a></Link>
          </li>
          <li>

          <Link href="#contact"><a>Contact</a></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
