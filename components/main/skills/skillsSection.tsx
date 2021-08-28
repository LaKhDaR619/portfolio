import styles from "../../../styles/skills.module.css";
import { v4 as uuidv4 } from "uuid";
import SkillsItem from "./skillsItem";
import { Skill } from "./types";

type Props = {
  title: string;
  icon: string;
  subtitle: string;
  skills: Skill[];
};

const SkillsSection: React.FC<Props> = ({ title, icon, subtitle, skills }) => {
  return (
    <div className={styles.skills__section}>
      <div className={styles.skills__header}>
        <i className={`bx ${icon} ${styles.skills__icon}`} />
        <div>
          <h1 className={styles.skills__title}>{title}</h1>
          <span className={styles.skills__subtitle}>{subtitle}</span>
        </div>
      </div>

      <div className={styles.skills__list}>
        {skills.map((item) => (
          <SkillsItem
            key={uuidv4()}
            icon={item.icon}
            image={item.image}
            name={item.name}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
