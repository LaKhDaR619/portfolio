import styles from "../../../styles/home.module.css";
import SocialItem from "./socialItem";

const Home: React.FC = () => {
  return (
    <section className={`${styles.home} grid`}>
      <div className={styles.homeData}>
        <h1 className={styles.homeTitle}>
          Hi,
          <br />
          I'am <span className={styles.homeTitleColor}>LaKhDaR</span>
          <br /> Software Engineer
        </h1>
        <a href="#" className="button">
          Contact
        </a>
      </div>

      <div className={styles.homeSocial}>
        <SocialItem iconName="bxl-linkedin" />
        <SocialItem iconName="bxl-behance" />
        <SocialItem iconName="bxl-github" />
      </div>

      <div className={styles.homeImg}>
        <img src="images/profile.png" alt="" />
      </div>
    </section>
  );
};

export default Home;
