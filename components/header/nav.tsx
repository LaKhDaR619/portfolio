import { useToggle } from "../../hooks/useToggle";
import styles from "../../styles/nav.module.css";
import NavItem from "./navItem";

export default function Nav() {
  const Items = [
    { href: "home", name: "Home", iconName: "uil-estate" },
    { href: "about", name: "About", iconName: "uil-user" },
    { href: "skills", name: "Skills", iconName: "uil-file-alt" },
    { href: "services", name: "Services", iconName: "uil-briefcase-alt" },
    { href: "portfolio", name: "Portfolio", iconName: "uil-scenery" },
    { href: "contact", name: "Contact Me", iconName: "uil-message" },
  ];

  const [showMenu, toggleShowMenu] = useToggle();

  return (
    <nav className={`${styles.nav} container`}>
      <a href="#" className={styles.nav__logo}>
        LaKhDaR
      </a>
      <div
        className={`${styles.nav__menu} ${showMenu ? styles["show-menu"] : ""}`}
      >
        <ul className={`${styles.nav__list} grid`}>
          {Items.map((item) => (
            <NavItem
              key={item.name}
              href={item.href}
              name={item.name}
              iconName={item.iconName}
              onClick={toggleShowMenu}
            />
          ))}
        </ul>
        <i
          className={`uil uil-times ${styles.nav__close}`}
          onClick={toggleShowMenu}
        />
      </div>
      <div>
        <div className={styles.nav__toggle} onClick={toggleShowMenu}>
          <i className="uil uil-apps" />
        </div>
      </div>
    </nav>
  );
}
