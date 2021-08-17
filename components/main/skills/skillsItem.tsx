import styles from "../../../styles/skills.module.css";

type Props = {
  name: string;
  percentage: number;
};

const SkillsItem: React.FC<Props> = ({ name, percentage }) => {
  return <div></div>;

  return (
    <div className={styles.skills__data}>
      <div className={styles.skills__titles}>
        <h3 className={styles.skills__name}>{name}</h3>
        <span className={styles.skills__number}>{percentage}%</span>
      </div>
      <div className={styles.skills__bar}>
        <span
          style={{ width: `${percentage}%` }}
          className={styles.skills__percentage}
        ></span>
      </div>
    </div>
  );
};

export default SkillsItem;
