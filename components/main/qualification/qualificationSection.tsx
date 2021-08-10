import styles from "../../../styles/qualification.module.css";
import QualificationItem from "./qualificationItem";
import { Qualification } from "./types";

type Props = {
  qualifications: Qualification[];
  isSelected: boolean;
};

const QualificationSection: React.FC<Props> = ({
  qualifications,
  isSelected,
}) => {
  return (
    <div
      className={styles.qualification__content}
      style={{ display: isSelected ? "block" : "none" }}
    >
      {qualifications.map((item, index) => (
        <QualificationItem
          title={item.title}
          subtitle={item.subtitle}
          date={item.date}
          first={index === 0}
          last={index === qualifications.length - 1}
        />
      ))}
    </div>
  );
};

export default QualificationSection;
