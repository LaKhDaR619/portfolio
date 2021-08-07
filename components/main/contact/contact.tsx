import styles from "../../../styles/contact.module.css";

const Contact: React.FC = () => {
  return (
    <section className="section" id="contact">
      <h2 className="section-title">Contact</h2>

      <div className={`${styles.contactContainer} grid`}>
        <form action="" className={styles.contactForm}>
          <input
            type="text"
            placeholder="Name"
            className={styles.contactInput}
          />
          <input
            type="mail"
            placeholder="Email"
            className={styles.contactInput}
          />
          <textarea
            name=""
            id=""
            cols={0}
            rows={10}
            className={styles.contactInput}
          />
          <input
            type="button"
            value="Send"
            className={`${styles.contactButton} button`}
          />
        </form>
      </div>
    </section>
  );
};

export default Contact;
