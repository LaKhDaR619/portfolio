import styles from "../../styles/footer.module.css";
import FooterItem from "./footerItem";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footerTitle}>LaKhDaR</p>
      <div className={styles.footerSocial}>
        <FooterItem iconName="bxl-facebook" />
        <FooterItem iconName="bxl-instagram" />
        <FooterItem iconName="bxl-twitter" />
      </div>
      <p>&#169; 2021 copyright all right reserved</p>
    </footer>
  );
};

export default Footer;
