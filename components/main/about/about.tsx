import styles from "../../../styles/about.module.css";

const About: React.FC = () => {
  return (
    <div>
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My Introduction</span>

      <div className={`${styles.about__container} container grid`}>
        <img src="images/about.jpg" alt="" className={styles.about__img} />
        <div className={styles.about__data}>
          <p className={styles.about__description}>
            Software Engineer, with extensive knowledge and years of experience,
            working in web technologies, delevering quality work
          </p>
          <div className={styles.about__info}>
            <div>
              <span className={styles["about__info-title"]}>04+</span>
              <span className={styles["about__info-name"]}>
                Years <br />
                experience
              </span>
            </div>
            <div>
              <span className={styles["about__info-title"]}>08+</span>
              <span className={styles["about__info-name"]}>
                Completed <br />
                projects
              </span>
            </div>
            <div>
              <span className={styles["about__info-title"]}>01+</span>
              <span className={styles["about__info-name"]}>
                Companies <br />
                worked
              </span>
            </div>
          </div>

          <div className={styles.about__buttons}>
            <a
              download="true"
              href="pdf/Lakhdar_CV.pdf"
              className="button button--flex"
            >
              Download CV
              <i className="bx bx-download button__icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
