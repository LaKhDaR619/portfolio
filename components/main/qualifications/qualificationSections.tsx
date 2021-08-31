import styles from "../../../styles/qualification.module.css";
import { v4 as uuidv4 } from "uuid";
import QualificationsItem from "./qualificationsItem";
import { Qualification } from "./types";

type Props = {
  qualifications: {
    header: {
      title: string;
      icon: string;
    };
    data: Qualification[];
  };
};

const QualificationSection: React.FC<Props> = ({ qualifications }) => {
  const { title, icon } = qualifications.header;

  return (
    <div className={styles.qualification__section}>
      <div className={`${styles.qualification__button} button--flex`}>
        <i className={`bx ${icon} ${styles.qualification__icon}`} />
        {title}
      </div>

      <div className={styles.qualification__content}>
        {qualifications.data.map((item, index) => (
          <QualificationsItem
            key={uuidv4()}
            title={item.title}
            subtitle={item.subtitle}
            description={item.description}
            date={item.date}
            index={index}
            length={qualifications.data.length}
          />
        ))}
      </div>
    </div>
  );
};

export default QualificationSection;
