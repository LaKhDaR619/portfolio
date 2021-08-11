import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { useState } from "react";
import styles from "../../styles/header.module.css";
import Nav from "./nav";

type Props = {
  activeNavItem: string;
};

const Header: React.FC<Props> = ({ activeNavItem }) => {
  const [showScrollHeader, setShowScrollHeader] = useState(false);

  useScrollPosition(({ prevPos, currPos }) => {
    setShowScrollHeader(currPos.y * -1 >= 80);
  });

  return (
    <header
      className={`${styles.header} ${
        showScrollHeader ? styles.scroll__header : ""
      }`}
    >
      <Nav activeNavItem={activeNavItem} />
    </header>
  );
};

export default Header;
