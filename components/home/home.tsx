import styles from "../../styles/home.module.css";

const Home: React.FC = () => {
  return (
    <section className={`${styles.home} grid`}>
      <div className={styles.homeData}>
        <h1 className={styles.homeTitle}>
          Hi,
          <br />
          I'am <span className={styles.homeTitleColor}>Marlon</span>
          <br /> Web Designer
        </h1>
        <a href="#" className="button">
          Contact
        </a>
      </div>

      <div className="home__social">
        <a href="" className="home__social-icon">
          <i className="bx bxl-linkedin"></i>
        </a>
        <a href="" className="home__social-icon">
          <i className="bx bxl-behance"></i>
        </a>
        <a href="" className="home__social-icon">
          <i className="bx bxl-github"></i>
        </a>
      </div>

      <div className="home__img">
        <img src="assets/img/perfil.png" alt="" />
      </div>
    </section>
  );
};

export default Home;
