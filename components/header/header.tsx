import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { useState } from "react";
import styles from "../../styles/header.module.css";
import Nav from "./nav";

type Props = {
  activeNavItem: string;
  theme: "dark" | "light";
  setTheme: (theme: "dark" | "light") => void;
};

const Header: React.FC<Props> = ({ activeNavItem, theme, setTheme }) => {
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
      <Nav activeNavItem={activeNavItem} theme={theme} setTheme={setTheme} />
    </header>
  );
};

export default Header;
