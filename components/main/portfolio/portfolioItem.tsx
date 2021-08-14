import styles from "../../../styles/portfolio.module.css";

type Props = {
  image: string;
  title: string;
  description: string;
  buttonText?: string;
  link?: string;
};

const PortfolioItem: React.FC<Props> = ({
  image,
  title,
  description,
  buttonText = "Demo",
  link = "#",
}) => {
  return (
    <div className={`${styles.portfolio__content} grid`}>
      <img src={image} alt="" className={styles.portfolio__img} />

      <div className={styles.portfolio__data}>
        <h3 className={styles.portfolio__title}>{title}</h3>
        <p className={styles.portfolio__description}>{description}</p>
        <a
          href={link}
          target="_blank"
          className={`button button--flex button--small ${styles.portfolio__button}`}
        >
          {buttonText}
          <i
            className={`uil uil-arrow-right button__icon ${styles.portfolio__button__icon}`}
          />
        </a>
      </div>
    </div>
  );
};

export default PortfolioItem;
