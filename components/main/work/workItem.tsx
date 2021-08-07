import styles from "../../../styles/work.module.css";

type Props = {
  image: string;
};

const WorkItem: React.FC<Props> = ({ image }) => {
  return (
    <div className={styles.workImg}>
      <img src={`images/${image}`} alt="" />
    </div>
  );
};

export default WorkItem;
