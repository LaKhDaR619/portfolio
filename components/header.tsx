import styles from "../styles/header.module.css";
import Nav from "./nav";

export default function Header() {
  return (
    <header className={styles.lHeader}>
      <Nav />
    </header>
  );
}
