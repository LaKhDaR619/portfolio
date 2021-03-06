import styles from "../../../styles/home.module.css";
import { v4 as uuidv4 } from "uuid";
import SocialItem from "./socialItem";

const Home: React.FC = () => {
  const socialItems = [
    {
      iconName: "bxl-linkedin",
      href: "https://www.linkedin.com/in/lakhdar-ben-boudina-5a276b193/",
    },
    {
      iconName: "bxl-stack-overflow",
      href: "https://stackoverflow.com/users/8734108/lakhdar",
    },
    {
      iconName: "bxl-github",
      href: "https://github.com/LaKhDaR619",
    },
  ];

  return (
    <div className={`${styles.home__container} container grid`}>
      <div className={`${styles.home__content} grid`}>
        <div className={styles.home__social}>
          {socialItems.map((item) => (
            <SocialItem
              key={uuidv4()}
              iconName={item.iconName}
              href={item.href}
            />
          ))}
        </div>

        <div className={styles.home__img}>
          <svg
            className={styles.home__blob}
            viewBox="0 0 200 187"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask id="mask0" mask-type="alpha">
              <path
                d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
        130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
        97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
        0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
              />
            </mask>
            <g mask="url(#mask0)">
              <path
                d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
        165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
        129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
        -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
              />
              <image
                className={styles["home__blob-img"]}
                x="25"
                y="-50"
                href="images/profile.png"
              />
            </g>
          </svg>
        </div>

        <div className={styles.home__data}>
          <h1 className={styles.home__title}>Hi, I'am LaKhDaR</h1>
          <h3 className={styles.home__subtitle}>Software Engineer</h3>
          <p className={styles.home__description}>
            Highly experienced Software Engineer, producing quality code.
          </p>
          <a href="#contact" className="button button--flex">
            Contact Me
            <i className="bx bx-send button__icon" />
          </a>
        </div>
      </div>

      <div className={styles.home__scroll}>
        <a
          href="#about"
          className={`${styles["home__scroll-button"]} button--flex`}
        >
          <i className={`bx bx-mouse ${styles["home__scroll-mouse"]}`} />
          <span className={styles["home__scroll-name"]}>Scroll down</span>
          <i className={`bx bx-down-arrow-alt`} />
        </a>
      </div>
    </div>
  );
};

export default Home;
