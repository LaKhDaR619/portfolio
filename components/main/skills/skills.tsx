import styles from "../../../styles/skills.module.css";
import Qualifications from "../qualifications/qualifications";
import SkillsSection from "./skillsSection";

const Skills: React.FC = () => {
  const frontendSkills = [
    { icon: "bxl-html5", name: "HTML" },
    { icon: "bxl-css3", name: "CSS" },
    { icon: "bxl-javascript", name: "JavaScript" },
    { icon: "bxl-react", name: "React" },
    { icon: "bxl-redux", name: "Redux" },
  ];

  const backendSkills = [
    { icon: "bxl-nodejs", name: "NodeJS" },
    { image: "nest.svg", name: "NestJS" },
    { image: "postgresql.png", name: "PostgreSQL" },
    { image: "ts.png", name: "TypeScript" },
    { image: "mongo.svg", name: "MongoDB" },
  ];

  // TODO: change skills from progress bar to icons

  return (
    <div>
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My Technical level</span>
      <div className={`${styles.skills__container} container grid`}>
        <SkillsSection
          title="Back-end developer"
          icon="bx-code-curly"
          subtitle="More than 2 years"
          skills={backendSkills}
        />
        <SkillsSection
          title="Front-end developer"
          icon="bx-code"
          subtitle="More than 4 years"
          skills={frontendSkills}
        />
      </div>
    </div>
  );
};

export default Skills;
