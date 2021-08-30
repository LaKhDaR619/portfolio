import styles from "../../../styles/testimonial.module.css";
import { v4 as uuidv4 } from "uuid";

type Props = {
  image?: string;
  name: string;
  description: string;
};

const TestimonialItem: React.FC<Props> = ({ image, name, description }) => {
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
      </div>

      <p className={styles.testimonial__description}>{description}</p>
    </div>
  );
};

export default TestimonialItem;
