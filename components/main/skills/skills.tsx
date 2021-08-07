import styles from "../../../styles/skills.module.css";
import SkillsItem from "./skillsItem";

const Skills: React.FC = () => {
  return (
    <section className="section" id="skills">
      <h2 className="section-title">Skills</h2>

      <div className={`${styles.skillsContainer} grid`}>
        <div>
          <h2 className={styles.skillsSubtitle}>Profesional Skills</h2>
          <p className={styles.skillsText}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
            optio id vero amet, alias architecto consectetur error eum eaque
            sit.
          </p>
          <SkillsItem iconName="bxl-html5" title="html" percentage={95} />
          <SkillsItem iconName="bxl-css3" title="css3" percentage={85} />
          <SkillsItem
            iconName="bxl-javascript"
            title="javascript"
            percentage={65}
          />
          <SkillsItem iconName="bxs-paint" title="ui / ux" percentage={85} />
        </div>

        <div>
          <img src="images/work3.jpg" alt="" className={styles.skillsImg} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
