import styles from "../../../styles/testimonial.module.css";
import { v4 as uuidv4 } from "uuid";

type Props = {
  image?: string;
  name: string;
};

const TestimonialItem: React.FC<Props> = ({ image, name }) => {
  return (
    <div className={styles.testimonial__content}>
      <div className={styles.testimonial__data}>
        <div className={styles.testimonial__header}>
          <img
            src={image || "images/user-placeholder.png"}
            alt=""
            className={styles.testimonial__img}
          />

          <div>
            <h3 className={styles.testimonial__name}>{name}</h3>
            <span className={styles.testimonial__client}>Client</span>
          </div>
        </div>

        <div style={{ display: "flex" }}>
          {[...new Array(5)].map((_, index) => (
            <i
              key={uuidv4()}
              className={`bx bx-star ${styles["testimonial__icon-star"]}`}
            />
          ))}
        </div>
      </div>

      <p className={styles.testimonial__description}>
        I get a good impression, I carry out my project with all the possible
        quality and attention and support 24 hours a day
      </p>
    </div>
  );
};

export default TestimonialItem;
