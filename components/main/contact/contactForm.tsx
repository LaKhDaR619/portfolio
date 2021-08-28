import styles from "../../../styles/contact.module.css";

const ContactForm: React.FC = () => {
  return (
    <form className={`${styles.contact__form} grid`}>
      <div className={`${styles.contact__inputs} grid`}>
        <div className={styles.contact__content}>
          <label htmlFor="" className={styles.contact__input}>
            Name
          </label>
          <input type="text" className={styles.contact__input} />
        </div>
        <div className={styles.contact__content}>
          <label htmlFor="" className={styles.contact__input}>
            Email
          </label>
          <input type="email" className={styles.contact__input} />
        </div>
        <div className={styles.contact__content}>
          <label htmlFor="" className={styles.contact__input}>
            Project
          </label>
          <input type="text" className={styles.contact__input} />
        </div>
        <div className={styles.contact__content}>
          <label htmlFor="" className={styles.contact__input}>
            Message
          </label>
          <textarea
            name=""
            id=""
            cols={0}
            rows={7}
            className={styles.contact__input}
          />
        </div>

        <div>
          <a href="#" className={`button button--flex`}>
            Send Message
            <i className={`bx bx-send button__icon`} />
          </a>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
