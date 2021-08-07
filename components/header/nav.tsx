import { useState } from "react";
import { useToggle } from "../../hooks/useToggle";
import styles from "../../styles/nav.module.css";
import NavItem from "./navItem";

export default function Nav() {
  const Items = [
    { href: "home", name: "Home" },
    { href: "about", name: "About" },
    { href: "skills", name: "Skills" },
    { href: "work", name: "Work" },
    { href: "contact", name: "Contact" },
  ];

  const [showMenu, toggleShowMenu] = useToggle();

  const [active, setActive] = useState("home");

  const handleSetActive = (value: string) => {
    setActive(value);
    toggleShowMenu();
  };

  return (
    <nav className={`${styles.nav} grid`}>
      <div>
        <a href="#" className={styles.navLogo}>
          LaKhDaR
        </a>
      </div>
      <div className={`${styles.navMenu} ${showMenu ? styles.show : ""}`}>
        <ul className={styles.navList}>
          {Items.map((item) => (
            <NavItem
              key={item.name}
              href={item.href}
              name={item.name}
              active={active}
              setActive={handleSetActive}
            />
          ))}
        </ul>
      </div>
      <div className={styles.navToggle} onClick={toggleShowMenu}>
        <i className="bx bx-menu"></i>
      </div>
    </nav>
  );
}
