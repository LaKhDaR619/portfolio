import styles from "../styles/nav.module.css";

export default function Nav() {
  return (
    <nav className={`${styles.nav} grid`}>
      <div>
        <a href="#" className={styles.navLogo}>
          Marlon
        </a>
      </div>

      <div className={styles.navMenu} id="nav-menu">
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a href="#home" className={`${styles.navLink} active`}>
              Home
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="#about" className={styles.navLink}>
              About
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="#skills" className={styles.navLink}>
              Skills
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="#work" className={styles.navLink}>
              Work
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="#contact" className={styles.navLink}>
              Contact
            </a>
          </li>
        </ul>
      </div>

      <div className={styles.navToggle} id="nav-toggle">
        <i className="bx bx-menu"></i>
      </div>
    </nav>
  );
}
