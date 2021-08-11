import SkillsItem from "./skillsItem";
import styles from "../../../styles/skills.module.css";
import { Skill } from "./types";
import { useToggle } from "../../../hooks/useToggle";

type Props = {
  title: string;
  subtitle: string;
  skills: Skill[];
  isOpen: boolean;
  OpenSection: () => void;
};

const SkillsSection: React.FC<Props> = ({
  isOpen,
  title,
  subtitle,
  skills,
  OpenSection,
}) => {
  return (
    <div
      className={`${styles.skills__content} ${
        isOpen ? styles.skills__open : styles.skills__close
      }`}
    >
      <div className={styles.skills__header} onClick={OpenSection}>
        <i className={`uil uil-brackets-curly ${styles.skills__icon}`} />
        <div>
          <h1 className={styles.skills__title}>{title}</h1>
          <span className={styles.skills__subtitle}>{subtitle}</span>
        </div>

        <i className={`uil uil-angle-down ${styles.skills__arrow}`} />
      </div>

      <div className={`${styles.skills__list} grid`}>
        {skills.map((item) => (
          <SkillsItem
            key={item.name}
            name={item.name}
            percentage={item.percentage}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
