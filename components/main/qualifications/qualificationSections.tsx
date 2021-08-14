import styles from "../../../styles/qualification.module.css";
import { v4 as uuidv4 } from "uuid";
import QualificationsItem from "./qualificationsItem";
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
        <QualificationsItem
          key={uuidv4()}
          title={item.title}
          subtitle={item.subtitle}
          date={item.date}
          index={index}
          length={qualifications.length}
        />
      ))}
    </div>
  );
};

export default QualificationSection;
