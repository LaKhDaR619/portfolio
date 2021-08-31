import styles from "../../../styles/qualification.module.css";

type Props = {
  title: string;
  subtitle: string;
  description: string;
  date: string;
  index: number;
  length: number;
};

const QualificationItem: React.FC<Props> = ({
  title,
  subtitle,
  description,
  date,
  index,
  length,
}) => {
  const isLast = index === length - 1;

  return (
    <div className={styles.qualification__data}>
      <div>
        <span className={styles.qualification__circle} />
        {!isLast && <span className={styles.qualification__line} />}
      </div>

      <div>
        <h3 className={styles.qualification__title}>{title}</h3>
        <span className={styles.qualification__subtitle}>{subtitle}</span>
        <p>{description}</p>
        <div className={styles.qualification__calendar}>
          <i className={`bx bx-calendar`} />
          {date}
        </div>
      </div>
    </div>
  );
};

export default QualificationItem;
