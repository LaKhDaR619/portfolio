import Content from "./content";
import CustomHead from "./customHead";
import Header from "./header";
import Footer from "./footer";

export const siteTitle = "LaKhDar Portfolio";

type Props = {};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <CustomHead title={siteTitle} />
      <Header />
      <Content>{children}</Content>
      <Footer />
    </>
  );
};

export default Layout;
