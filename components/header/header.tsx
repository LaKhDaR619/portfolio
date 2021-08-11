import styles from "../../styles/header.module.css";
import Nav from "./nav";

type Props = {
  activeNavItem: string;
};

const Header: React.FC<Props> = ({ activeNavItem }) => {
  return (
    <header className={styles.header}>
      <Nav activeNavItem={activeNavItem} />
    </header>
  );
};

export default Header;
