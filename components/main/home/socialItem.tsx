import styles from "../../../styles/home.module.css";

type Props = {
  iconName: string;
};

const SocialItem: React.FC<Props> = ({ iconName }) => {
  return (
    <a className={styles.homeSocialIcon}>
      <i className={`bx ${iconName}`} />
    </a>
  );
};

export default SocialItem;
