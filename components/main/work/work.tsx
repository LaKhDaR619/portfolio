import styles from "../../../styles/work.module.css";
import WorkItem from "./workItem";

const Work: React.FC = () => {
  return (
    <section className="section" id="work">
      <h2 className="section-title">Work</h2>

      <div className={`${styles.workContainer} grid`}>
        <WorkItem image="work1.jpg" />
        <WorkItem image="work2.jpg" />
        <WorkItem image="work3.jpg" />
        <WorkItem image="work4.jpg" />
        <WorkItem image="work5.jpg" />
        <WorkItem image="work6.jpg" />
      </div>
    </section>
  );
};

export default Work;
