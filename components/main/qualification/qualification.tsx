import { useState } from "react";
import styles from "../../../styles/qualification.module.css";
import QualificationSection from "./qualificationSection";

const Qualification: React.FC = () => {
  const educationQualifications = [
    {
      title: "B.Sc Computer Science",
      subtitle: "Ziane Achour University - Algeria",
      date: "2013 - 2016",
    },
    {
      title: "M.Sc Computer Science",
      subtitle: "Ziane Achour University - Algeria",
      date: "2016 - 2018",
    },
  ];

  const workQualifications = [
    {
      title: "Temporary university Teacher (Mobile Development)",
      subtitle: "Ziane Achour University - Algeria",
      date: "2020 - 2021",
    },
    {
      title: "Software Engineer",
      subtitle: "CleverZone - Algiers",
      date: "2021 - Current",
    },
  ];

  const [selectedTab, setSelectedTab] = useState<"education" | "work">(
    "education"
  );

  return (
    <section className={`${styles.qualification} section`} id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className={`${styles.qualification__container} container`}>
        <div className={styles.qualification__tabs}>
          <div
            className={`${styles.qualification__button} button--flex ${
              selectedTab === "education" ? styles.qualification__active : ""
            }`}
            onClick={() => setSelectedTab("education")}
          >
            <i
              className={`uil uil-graduation-cap ${styles.qualification__icon}`}
            />
            Education
          </div>
          <div
            className={`${styles.qualification__button} button--flex ${
              selectedTab === "work" ? styles.qualification__active : ""
            }`}
            onClick={() => setSelectedTab("work")}
          >
            <i
              className={`uil uil-briefcase-alt ${styles.qualification__icon}`}
            />
            Work
          </div>
        </div>

        <div className={styles.qualification__sections}>
          <QualificationSection
            qualifications={educationQualifications}
            isSelected={selectedTab === "education"}
          />
          <QualificationSection
            qualifications={workQualifications}
            isSelected={selectedTab === "work"}
          />
        </div>
      </div>
    </section>
  );
};

export default Qualification;
