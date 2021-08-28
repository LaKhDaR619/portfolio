import styles from "../../../styles/qualification.module.css";

type Props = {
  title: string;
  subtitle: string;
  date: string;
  index: number;
  length: number;
};

const QualificationItem: React.FC<Props> = ({
  title,
  subtitle,
  date,
  index,
  length,
}) => {
  const isToTheLeft = index % 2 === 0;
  const isLast = index === length - 1;

  return (
    <div className={styles.qualification__data}>
      {!isToTheLeft && (
        <>
          <div />
          <div>
            <span className={styles.qualification__circle} />
            {!isLast && <span className={styles.qualification__line} />}
          </div>
        </>
      )}

      <div>
        <h3 className={styles.qualification__title}>{title}</h3>
        <span className={styles.qualification__subtitle}>{subtitle}</span>
        <div className={styles.qualification__calendar}>
          <i className={`bx bx-calendar`} />
          {date}
        </div>
      </div>

      {isToTheLeft && (
        <div>
          <span className={styles.qualification__circle} />
          {!isLast && <span className={styles.qualification__line} />}
        </div>
      )}
    </div>
  );
};

export default QualificationItem;
