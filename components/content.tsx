import styles from "../styles/content.module.css";

const Content: React.FC = ({ children }) => {
  return <main className={styles["main-content"]}>{children}</main>;
};

export default Content;
