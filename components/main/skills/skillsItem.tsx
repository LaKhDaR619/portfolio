import styles from "../../../styles/skills.module.css";

type Props = {
  iconName: string;
  title: string;
  percentage: number;
};

const SkillsItem: React.FC<Props> = ({ iconName, title, percentage }) => {
  return (
    <div className={styles.skillsData}>
      <div className={styles.skillsName}>
        <i className={`bx ${iconName} ${styles.skillsIcon}`} />
        <span>{title.toUpperCase()}</span>
      </div>
      <div className={styles.skillsBar} style={{ width: `${percentage}%` }} />
      <div>
        <span className={styles.skillsPercentage}>{`${percentage}%`}</span>
      </div>
    </div>
  );
};

export default SkillsItem;
