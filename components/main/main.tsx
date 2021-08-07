import styles from "../styles/main.module.css";
import About from "./about/about";
import Home from "./home/home";

const Main: React.FC = () => {
  return (
    <main>
      <Home />
      <About />
    </main>
  );
};

export default Main;
