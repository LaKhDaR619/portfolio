import styles from "../../styles/nav.module.css";
import Slider from "./slider";
import { v4 as uuidv4 } from "uuid";
import { useToggle } from "../../hooks/useToggle";
import NavItem from "./navItem";

type Props = {
  activeNavItem: string;
  theme: "dark" | "light";
  setTheme: (theme: "dark" | "light") => void;
};

const Nav: React.FC<Props> = ({ activeNavItem, theme, setTheme }) => {
  const Items = [
    { href: "home", name: "Home", iconName: "bx-home" },
    { href: "about", name: "About", iconName: "bx-user" },
    { href: "skills", name: "Skills", iconName: "bx-file" },
    { href: "services", name: "Services", iconName: "bx-briefcase" },
    { href: "testimonial", name: "Testimonial", iconName: "bx-star" },
    { href: "contact", name: "Contact", iconName: "bx-send" },
  ];

  const [showMenu, toggleShowMenu] = useToggle();

  const handleToggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <nav className={`${styles.nav} container`}>
      <a href="#" className={styles.nav__logo}>
        LaKhDaR
      </a>
      <Slider />
      <div
        className={`${styles.nav__menu} ${showMenu ? styles["show-menu"] : ""}`}
      >
        <ul className={`${styles.nav__list} grid`}>
          {Items.map((item) => (
            <NavItem
              key={uuidv4()}
              href={item.href}
              name={item.name}
              iconName={item.iconName}
              onClick={toggleShowMenu}
              isActive={item.href === activeNavItem}
            />
          ))}
        </ul>
        <i
          className={`bx bx-x ${styles.nav__close}`}
          onClick={toggleShowMenu}
        />
      </div>
      <div className={styles.nav__btns}>
        <i
          className={`bx ${theme === "dark" ? "bx-moon" : "bx-sun"} ${
            styles["change-theme"]
          }`}
          onClick={handleToggleTheme}
        />
        <i
          onClick={toggleShowMenu}
          className={`${styles.nav__toggle} bx bx-grid-alt`}
        />
      </div>
    </nav>
  );
};

export default Nav;
