import styles from "../../styles/footer.module.css";

type Props = {
  iconName: string;
};

const FooterItem: React.FC<Props> = ({ iconName }) => {
  return (
    <a href="#" className={styles.footerIcon}>
      <i className={`bx ${iconName}`} />
    </a>
  );
};

export default FooterItem;
