import { useState } from "react";
import styles from "../../../styles/qualification.module.css";
import QualificationsSection from "./qualificationSections";

const Qualification: React.FC = () => {
  const workQualifications = {
    header: {
      title: "Work",
      icon: "bx-briefcase",
    },
    data: [
      {
        title: "Software Engineer",
        subtitle: "CleverZone - Algiers",
        description:
          "designing and implementing high quality solutions, implementing pixel-perfect UIs from existing designs, adding new features and UIs to the existing projects, maintaining existing projects, contributing to every aspect from creation, testing to deployment.",
        date: "2021 - Current",
      },
      {
        title: "Temporary university Teacher (Mobile Development)",
        subtitle: "Ziane Achour University - Algeria",
        description:
          "Taught Creating Android Layouts using XML, Implementing the Logic using JAVA (interacting with the layout, navigation between screens, Interacting with the android system), Making fully functional apps (as an end of study projects).",
        date: "2020 - 2021",
      },
      {
        title: "Freelancer (Web, Mobile Development)",
        subtitle: "Upwork, Freelancer",
        description: "",
        date: "2015 - Current",
      },
    ],
  };

  const educationQualifications = {
    header: {
      title: "Education",
      icon: "bxs-graduation",
    },
    data: [
      {
        title: "M.Sc Computer Science",
        subtitle: "Ziane Achour University - Algeria",
        description: "",
        date: "2016 - 2018",
      },
      {
        title: "B.Sc Computer Science",
        subtitle: "Ziane Achour University - Algeria",
        description: "",
        date: "2013 - 2016",
      },
    ],
  };

  return (
    <div className={styles.qualification}>
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className={`${styles.qualification__container} container`}>
        <div className={styles.qualification__sections}>
          <QualificationsSection qualifications={workQualifications} />
          <QualificationsSection qualifications={educationQualifications} />
        </div>
      </div>
    </div>
  );
};

export default Qualification;
