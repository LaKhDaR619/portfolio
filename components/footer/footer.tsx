import styles from "../../styles/footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__bg}>
        <div className={`${styles.footer__container} container grid`}>
          <div>
            <h1 className={styles.footer__title}>LaKhDaR</h1>
            <span className={styles.footer__subtitle}>
              Full Stack Developer
            </span>
          </div>

          <ul className={styles.footer__links}>
            <li>
              <a href="#services" className={styles.footer__link}>
                Services
              </a>
            </li>
            <li>
              <a href="#portfolio" className={styles.footer__link}>
                Portfolio
              </a>
            </li>
            <li>
              <a href="#contact" className={styles.footer__link}>
                Contact
              </a>
            </li>
          </ul>

          <div className={styles.footer__socials}>
            <a
              href="https://web.facebook.com/lakhdar.boudina/"
              target="_blank"
              className={styles.footer__social}
            >
              <i className={`uil uil-facebook-f`} />
            </a>
            <a
              href="https://www.instagram.com/lakhdar.boudina/"
              target="_blank"
              className={styles.footer__social}
            >
              <i className={`uil uil-instagram`} />
            </a>
            <a
              href="https://twitter.com/BoudinaLakhdar"
              target="_blank"
              className={styles.footer__social}
            >
              <i className={`uil uil-twitter-alt`} />
            </a>
          </div>
        </div>

        <p className={styles.footer__copy}>
          &#169; LaKhDaR. All right reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
