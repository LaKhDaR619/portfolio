import styles from "../../../styles/skills.module.css";

type Props = {
  icon?: string;
  image?: string;
  name: string;
};

const SkillsItem: React.FC<Props> = ({ icon, image, name }) => {
  return (
    <div className={styles.skills__item}>
      {icon ? (
        <i className={`${styles["skills__item-icon"]} bx ${icon}`} />
      ) : (
        <img
          className={styles["skills__item-icon"]}
          src={`/skillsImages/${image}`}
        />
      )}
      <span className={styles.skills__name}>{name}</span>
    </div>
  );
};

export default SkillsItem;
