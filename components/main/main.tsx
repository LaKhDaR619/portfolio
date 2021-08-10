import About from "./about/about";
import Home from "./home/home";
import Portfolio from "./portfolio/protfolio";
import Project from "./projects/project";
import Qualifications from "./qualifications/qualifications";
import Services from "./services/services";
import Skills from "./skills/skills";
import Testimonial from "./testimonial/testimonial";

const Main: React.FC = () => {
  return (
    <main>
      <Home />
      <About />
      <Skills />
      <Qualifications />
      <Services />
      <Portfolio />
      <Project />
      <Testimonial />
    </main>
  );
};

export default Main;
