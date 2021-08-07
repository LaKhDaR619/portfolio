import Content from "../main/main";
import CustomHead from "../head/customHead";
import Header from "../header/header";
import Footer from "../footer/footer";

export const siteTitle = "LaKhDar Portfolio";

type Props = {};

const Layout: React.FC<Props> = () => {
  return (
    <>
      <CustomHead title={siteTitle} />
      <Header />
      <Content />
      <Footer />
    </>
  );
};

export default Layout;
