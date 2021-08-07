import { useToggle } from "../../hooks/useToggle";
import styles from "../../styles/nav.module.css";

type Props = {
  href: string;
  name: string;
  active: string;
  setActive: (value: string) => void;
};

const NavItem: React.FC<Props> = ({ href, name, active, setActive }) => {
  const handleClick = () => setActive(href);

  return (
    <li className={styles.navItem}>
      <a
        href={`#${href}`}
        className={`${styles.navLink} ${active === href ? styles.active : ""}`}
        onClick={handleClick}
      >
        {name}
      </a>
    </li>
  );
};

export default NavItem;
