import Content from "./content";
import CustomHead from "./customHead";
import Header from "./header";
import Footer from "./footer";
import styles from "../styles/layout.module.css";

export const siteTitle = "LaKhDar Portfolio";

type Props = {};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <CustomHead title={siteTitle} />
      <div className={styles["main-layout"]}>
        <Header />
        <Content>{children}</Content>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
