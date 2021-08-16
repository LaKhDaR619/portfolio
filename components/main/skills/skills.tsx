import styles from "../../../styles/skills.module.css";
import Qualifications from "../qualifications/qualifications";
import SkillsSection from "./skillsSection";

const Skills: React.FC = () => {
  const frontendSkills = [
    { name: "HTML", percentage: 90 },
    { name: "CSS", percentage: 80 },
    { name: "JavaScript", percentage: 70 },
    { name: "React", percentage: 90 },
  ];

  const backendSkills = [
    { name: "NodeJS", percentage: 80 },
    { name: "PostgreSQL", percentage: 60 },
    { name: "NestJS", percentage: 60 },
  ];

  return (
    <div>
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My Technical level</span>
      <div className={`${styles.skills__container} container grid`}>
        <SkillsSection
          title="Front-end developer"
          subtitle="More than 4 years"
          skills={frontendSkills}
        />
        <SkillsSection
          title="Back-end developer"
          subtitle="More than 2 years"
          skills={backendSkills}
        />
      </div>
      <Qualifications />
    </div>
  );
};

export default Skills;
