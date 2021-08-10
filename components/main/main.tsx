import About from "./about/about";
import Home from "./home/home";
import Qualification from "./qualification/qualification";
import Skills from "./skills/skills";

const Main: React.FC = () => {
  return (
    <main>
      <Home />
      <About />
      <Skills />
      <Qualification />
    </main>
  );
};

export default Main;
