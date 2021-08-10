import styles from "../../../styles/contact.module.css";

type Props = {
  icon: string;
  title: string;
  subtitle: string;
};

const ContactItem: React.FC<Props> = ({ icon, title, subtitle }) => {
  return (
    <div className={styles.contact__information}>
      <i className={`uil ${icon} ${styles.contact__icon}`} />

      <div>
        <h3 className={styles.contact__title}>{title}</h3>
        <span className={styles.contact__subtitle}>{subtitle}</span>
      </div>
    </div>
  );
};

export default ContactItem;
