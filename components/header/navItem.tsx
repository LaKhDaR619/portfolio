import styles from "../../styles/nav.module.css";

type Props = {
  href: string;
  name: string;
  iconName: string;
  onClick: () => void;
};

const NavItem: React.FC<Props> = ({ href, name, iconName, onClick }) => {
  return (
    <li className={styles.nav__item}>
      <a
        href={`#${href}`}
        className={`${styles.nav__link} ${styles.nav__icon}`}
        onClick={onClick}
      >
        <i className={`uil ${iconName} ${styles.nav__icon}`} />
        {name}
      </a>
    </li>
  );
};

export default NavItem;
