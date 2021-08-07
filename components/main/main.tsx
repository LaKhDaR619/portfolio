import styles from "../styles/main.module.css";
import About from "./about/about";
import Home from "./home/home";
import Skills from "./skills/skills";

const Main: React.FC = () => {
  return (
    <main>
      <Home />
      <About />
      <Skills />
    </main>
  );
};

export default Main;
