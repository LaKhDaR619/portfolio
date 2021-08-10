import styles from "../../../styles/qualification.module.css";

type Props = {
  title: string;
  subtitle: string;
  date: string;
  first?: boolean;
  last?: boolean;
};

const QualificationItem: React.FC<Props> = ({
  title,
  subtitle,
  date,
  first = false,
  last = false,
}) => {
  return (
    <div className={styles.qualification__data}>
      {!first && (
        <>
          <div />
          <div>
            <span className={styles.qualification__circle} />
            {!last && <span className={styles.qualification__line} />}
          </div>
        </>
      )}

      <div>
        <h3 className={styles.qualification__title}>{title}</h3>
        <span className={styles.qualification__subtitle}>{subtitle}</span>
        <div className={styles.qualification__calendar}>
          <i className={`uil uil-calendar-alt`} />
          {date}
        </div>
      </div>

      {first && (
        <div>
          <span className={styles.qualification__circle} />
          <span className={styles.qualification__line} />
        </div>
      )}
    </div>
  );
};

export default QualificationItem;
