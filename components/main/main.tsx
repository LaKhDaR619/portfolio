import styles from "../../styles/main.module.css";
import Section from "../section";
import About from "./about/about";
import Contact from "./contact/contact";
import Home from "./home/home";
import Portfolio from "./portfolio/protfolio";
import Project from "./project/project";
import Qualifications from "./qualifications/qualifications";
import Services from "./services/services";
import Skills from "./skills/skills";
import Testimonial from "./testimonial/testimonial";

type Props = {
  setActiveNavItem: (activeItem: string) => void;
};

const Main: React.FC<Props> = ({ setActiveNavItem }) => {
  return (
    <main className={styles.main}>
      <Section
        className="section"
        id="home"
        setActiveNavItem={setActiveNavItem}
      >
        <Home />
      </Section>
      <Section
        className="section"
        id="about"
        setActiveNavItem={setActiveNavItem}
      >
        <About />
      </Section>
      <Section
        className="section"
        id="skills"
        setActiveNavItem={setActiveNavItem}
      >
        <Skills />
      </Section>
      <Section className="section" id="qualification">
        <Qualifications />
      </Section>
      <Section
        className="section"
        id="services"
        setActiveNavItem={setActiveNavItem}
      >
        <Services />
      </Section>
      <Section
        className="section"
        id="portfolio"
        setActiveNavItem={setActiveNavItem}
      >
        <Portfolio />
      </Section>
      <Section className="section" id="project">
        <Project />
      </Section>
      <Section className="section" id="testimonial">
        <Testimonial />
      </Section>
      <Section
        className="section"
        id="contact"
        setActiveNavItem={setActiveNavItem}
      >
        <Contact />
      </Section>
    </main>
  );
};

export default Main;
