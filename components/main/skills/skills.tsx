import { useState } from "react";
import styles from "../../../styles/skills.module.css";
import SkillsSection from "./skillsSection";
import { SkillSection } from "./types";

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

  const [selectedSection, setSelectedSection] = useState<SkillSection | null>(
    null
  );

  const handleSelection = (skillSection: SkillSection) => {
    // if the open section is clicked we just close it
    if (skillSection === selectedSection) return setSelectedSection(null);

    // else we open the other one
    setSelectedSection(skillSection);
  };

  return (
    <>
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My Technical level</span>
      <div className={`${styles.skills__container} container grid`}>
        <div>
          <SkillsSection
            title="Front-end developer"
            subtitle="More than 4 years"
            skills={frontendSkills}
            isOpen={selectedSection === "front"}
            OpenSection={() => handleSelection("front")}
          />
          <SkillsSection
            title="Back-end developer"
            subtitle="More than 2 years"
            skills={backendSkills}
            isOpen={selectedSection === "back"}
            OpenSection={() => handleSelection("back")}
          />
        </div>
      </div>
    </>
  );
};

export default Skills;
