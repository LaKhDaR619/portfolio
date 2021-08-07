import About from "./about/about";
import Contact from "./contact/contact";
import Home from "./home/home";
import Skills from "./skills/skills";
import Work from "./work/work";

const Main: React.FC = () => {
  return (
    <main>
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </main>
  );
};

export default Main;
