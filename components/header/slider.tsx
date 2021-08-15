import styles from "../../styles/nav.module.css";
import InputSlider from "react-input-slider";
import { useEffect, useState } from "react";

const Slider: React.FC = () => {
  const [hue, setHue] = useState(250);

  const handleHueChange = ({ x }) => {
    setHue(x);
    document.body.style.setProperty("--hue-color", x);
    localStorage.setItem("hue", x);
  };

  useEffect(() => {
    const storedHue = localStorage.getItem("hue");
    if (storedHue) setHue(Number.parseInt(storedHue, 10));
  }, []);

  return (
    <div className={styles.slider__container}>
      <InputSlider
        x={hue}
        xmax={360}
        onChange={handleHueChange}
        styles={{
          active: {
            backgroundColor: "var(--primary-color)",
          },
        }}
        className={styles.slider}
      />
    </div>
  );
};

export default Slider;
