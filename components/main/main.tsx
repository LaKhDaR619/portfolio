import About from "./about/about";
import Home from "./home/home";
import Portfolio from "./portfolio/protfolio";
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
      <Portfolio />
    </main>
  );
};

export default Main;
