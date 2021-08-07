import styles from "../styles/nav.module.css";
import { useState } from "react";

export const useMenuToggle = () => {
  const [show, setShow] = useState("");

  const toggleShow = () => {
    console.log(show);
    setShow(show ? "" : styles.show);
  };

  return { show, toggleShow };
};
