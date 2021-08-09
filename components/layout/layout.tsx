import Content from "../main/main";
import CustomHead from "../head/customHead";
import Header from "../header/header";
import Footer from "../footer/footer";
import Main from "../main/main";

export const siteTitle = "LaKhDaR Portfolio";

type Props = {};

const Layout: React.FC<Props> = () => {
  return (
    <>
      <CustomHead title={siteTitle} />
      <Header />
      <Main />
    </>
  );
};

export default Layout;
