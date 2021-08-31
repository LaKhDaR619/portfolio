import styles from "../../styles/nav.module.css";
import InputSlider from "react-input-slider";
import { useEffect, useState } from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

const Slider: React.FC = () => {
  const [hue, setHue] = useState(250);

  const handleHueChange = (x: number) => {
    setHue(x);
    document.body.style.setProperty("--hue-color", x.toString());
    localStorage.setItem("hue", x.toString());
  };

  useEffect(() => {
    const storedHue = localStorage.getItem("hue");
    if (storedHue) {
      setHue(Number.parseInt(storedHue, 10));
      document.body.style.setProperty("--hue-color", storedHue);
    }
  }, []);

  useScrollPosition(({ prevPos, currPos }) => {
    const newHue = ((currPos.y * -1) / 10) % 360;

    handleHueChange(newHue > 360 && newHue < 400 ? 400 : newHue);
  });

  return null;
};

export default Slider;
