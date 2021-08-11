import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { useState } from "react";
import styles from "../../styles/scrollup.module.css";

type Props = {};

const ScrollUp: React.FC<Props> = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useScrollPosition(({ prevPos, currPos }) => {
    setShowScrollTop(currPos.y * -1 >= 560);
  });

  return (
    <a
      href="#"
      className={`${styles.scrollup} ${
        showScrollTop ? styles["show-scroll"] : ""
      }`}
    >
      <i className={`uil uil-arrow-up ${styles.scrollup__icon}`} />
    </a>
  );
};

export default ScrollUp;
