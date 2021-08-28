import styles from "../../../styles/skills.module.css";
import { v4 as uuidv4 } from "uuid";
import SkillsItem from "./skillsItem";
import { Skill } from "./types";
import { useToggle } from "../../../hooks/useToggle";

type Props = {
  title: string;
  icon: string;
  subtitle: string;
  skills: Skill[];
};

const SkillsSection: React.FC<Props> = ({ title, icon, subtitle, skills }) => {
  const [isOpen, toggleOpen] = useToggle();

  return (
    <div className={`${isOpen ? styles.skills__open : styles.skills__close}`}>
      <div className={styles.skills__header} onClick={toggleOpen}>
        <i className={`bx ${icon} ${styles.skills__icon}`} />
        <div>
          <h1 className={styles.skills__title}>{title}</h1>
          <span className={styles.skills__subtitle}>{subtitle}</span>
        </div>

        <i className={`bx bx-chevron-down ${styles.skills__arrow}`} />
      </div>

      <div className={`${styles.skills__list} grid`}>
        {skills.map((item) => (
          <SkillsItem
            key={uuidv4()}
            name={item.name}
            percentage={item.percentage}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
