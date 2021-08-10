import About from "./about/about";
import Home from "./home/home";
import Qualifications from "./qualifications/qualifications";
import Skills from "./skills/skills";

const Main: React.FC = () => {
  return (
    <main>
      <Home />
      <About />
      <Skills />
      <Qualifications />
    </main>
  );
};

export default Main;