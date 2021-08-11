import CustomHead from "../head/customHead";
import Header from "../header/header";
import Footer from "../footer/footer";
import Main from "../main/main";
import { useState } from "react";
import ScrollUp from "./scrollup";

export const siteTitle = "LaKhDaR Portfolio";

type Props = {};

const Layout: React.FC<Props> = () => {
  const [activeNavItem, setActiveNavItem] = useState("home");

  return (
    <>
      <CustomHead title={siteTitle} />
      <Header activeNavItem={activeNavItem} />
      <Main setActiveNavItem={setActiveNavItem} />
      <Footer />
      <ScrollUp />
    </>
  );
};

export default Layout;
