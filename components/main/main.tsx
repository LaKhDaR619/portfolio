import styles from "../../styles/main.module.css";
import Section from "../section";
import About from "./about/about";
import Contact from "./contact/contact";
import Home from "./home/home";
import Qualification from "./qualifications/qualifications";
import Skills from "./skills/skills";
import Testimonial from "./testimonial/testimonial";

type Props = {
  setActiveNavItem: (activeItem: string) => void;
};

const Main: React.FC<Props> = ({ setActiveNavItem }) => {
  return (
    <main className={styles.main}>
      <Section id="home" setActiveNavItem={setActiveNavItem}>
        <Home />
      </Section>
      <Section id="about" setActiveNavItem={setActiveNavItem}>
        <About />
      </Section>
      <Section id="skills" setActiveNavItem={setActiveNavItem}>
        <Skills />
      </Section>
      <Section id="qualification" setActiveNavItem={setActiveNavItem}>
        <Qualification />
      </Section>
      <Section id="testimonial" setActiveNavItem={setActiveNavItem}>
        <Testimonial />
      </Section>
      <Section id="contact" setActiveNavItem={setActiveNavItem}>
        <Contact />
      </Section>
    </main>
  );
};

export default Main;
