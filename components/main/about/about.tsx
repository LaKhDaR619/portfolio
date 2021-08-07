import styles from "../../../styles/about.module.css";

const About: React.FC = () => {
  return (
    <section className="section" id="about">
      <h2 className="section-title">About</h2>

      <div className={`${styles.aboutContainer} grid`}>
        <div className={styles.aboutImg}>
          <img src="images/about.jpg" alt="" />
        </div>

        <div>
          <h2 className={styles.aboutSubtitle}>I'am LaKhDaR</h2>
          <p className={styles.aboutText}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            cum expedita quo culpa tempora, assumenda, quis fugiat ut voluptates
            soluta, aut earum nemo recusandae cumque perferendis! Recusandae
            alias accusamus atque.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
