import styles from "../../../styles/project.module.css";

const Project: React.FC = () => {
  return (
    <div className={styles.project__bg}>
      <div className={`${styles.project__container} container grid`}>
        <div className={styles.project__data}>
          <h2 className={styles.project__title}>You have a new project</h2>
          <p className={styles.project__description}>
            Contact me now and get a 30% discount
          </p>
        </div>
        <div className={styles["contact__button-container"]}>
          <a href="#contact" className={`button button--flex button--white`}>
            Contact Me
            <i className={`bx bx-send ${styles.project__icon} button__icon`} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
