import styles from "../../../styles/project.module.css";

const Project: React.FC = () => {
  return (
    <section className={`${styles.project} section`} id="project">
      <div className={styles.project__bg}>
        <div className={`${styles.project__container} container grid`}>
          <div className={styles.project__data}>
            <h2 className={styles.project__title}>You have a new project</h2>
            <p className={styles.project__description}>
              Contact me now and get a 30% discount
            </p>
            <a href="#contact" className={`button button--flex button--white`}>
              Contact Me
              <i
                className={`uil uil-message ${styles.project__icon} button__icon`}
              />
            </a>
          </div>

          <img
            src="images/project.png"
            alt=""
            className={styles.project__img}
          />
        </div>
      </div>
    </section>
  );
};

export default Project;
