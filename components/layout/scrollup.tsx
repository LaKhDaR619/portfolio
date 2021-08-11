import styles from "../../styles/scrollup.module.css";

type Props = {};

const ScrollUp: React.FC<Props> = () => {
  return (
    <a href="#" className={styles.scrollup}>
      <i className={`uil uil-arrow-up ${styles.scrollup__icon}`} />
    </a>
  );
};

export default ScrollUp;
