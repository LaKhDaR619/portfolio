import styles from "../../../styles/home.module.css";

type Props = {
  iconName: string;
  href: string;
};

const SocialItem: React.FC<Props> = ({ iconName, href }) => {
  return (
    <a href={href} target="_blank" className={styles["home__social-icon"]}>
      <i className={`bx ${iconName}`} />
    </a>
  );
};

export default SocialItem;
