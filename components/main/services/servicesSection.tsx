import { useToggle } from "../../../hooks/useToggle";
import styles from "../../../styles/services.module.css";

type Props = {
  icon: string;
  title: string[];
  items: string[];
};

const ServicesSection: React.FC<Props> = ({ icon, title, items }) => {
  const [isOpen, toggleOpen] = useToggle();

  return (
    <div className={styles.services__content}>
      <div>
        <i className={`uil ${icon} ${styles.services__icon}`} />
        <h3 className={styles.services__title}>
          {title[0]} <br /> {title[1]}
        </h3>
      </div>

      <span
        className={`button button--flex button--small button--link ${styles.services__button}`}
        onClick={toggleOpen}
      >
        View More
        <i
          className={`uil uil-arrow-right button__icon ${styles.view__more}`}
        />
      </span>

      <div
        className={`${styles.services__modal} ${
          isOpen ? styles["active-modal"] : ""
        }`}
      >
        <div className={styles["services__modal-content"]}>
          <h4 className={styles["services__modal-title"]}>
            {title[0]} <br /> {title[1]}
          </h4>
          <i
            className={`uil uil-times ${styles["services__modal-close"]}`}
            onClick={toggleOpen}
          />

          <ul className={`${styles["services__modal-services"]} grid`}>
            {items.map((item, index) => (
              <li key={index} className={styles["services__modal-service"]}>
                <i
                  className={`uil uil-check-circle ${styles["services__modal-icon"]}`}
                />
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
