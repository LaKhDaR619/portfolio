import About from "./about/about";
import Home from "./home/home";
import Qualifications from "./qualifications/qualifications";
import Services from "./services/services";
import Skills from "./skills/skills";

const Main: React.FC = () => {
  return (
    <main>
      <Home />
      <About />
      <Skills />
      <Qualifications />
      <Services />
    </main>
  );
};

export default Main;
