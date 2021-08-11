import CustomHead from "../head/customHead";
import Header from "../header/header";
import Footer from "../footer/footer";
import Main from "../main/main";
import { useEffect, useState } from "react";
import ScrollUp from "./scrollup";

export const siteTitle = "LaKhDaR Portfolio";

type Props = {};

const Layout: React.FC<Props> = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [activeNavItem, setActiveNavItem] = useState("home");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) setTheme(storedTheme as any);
  }, []);

  useEffect(() => {
    const body = document.body;
    if (theme === "dark") body.classList.add("dark-theme");
    else if (theme === "light") body.classList.remove("dark-theme");
  }, [theme]);

  return (
    <div>
      <CustomHead title={siteTitle} />
      <Header activeNavItem={activeNavItem} theme={theme} setTheme={setTheme} />
      <Main setActiveNavItem={setActiveNavItem} />
      <Footer />
      <ScrollUp />
    </div>
  );
};

export default Layout;
