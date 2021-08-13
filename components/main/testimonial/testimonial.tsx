import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../../../styles/testimonial.module.css";
import TestimonialItem from "./testimonialItem";

const Testimonial: React.FC = () => {
  const testimonialItems = [
    { image: "images/testimonial1.jpg", name: "Sara Smith" },
    { image: "images/testimonial2.jpg", name: "Matt Robinson" },
    { image: "images/testimonial3.jpg", name: "Paul Harris" },
  ];

  return (
    <>
      <h2 className="section__title">Testimonial</h2>
      <span className="section__subtitle">My client saying</span>

      <div className="container">
        <Swiper
          loop
          grabCursor
          spaceBetween={48}
          pagination={{ clickable: true, dynamicBullets: true }}
          breakpoints={{
            568: { slidesPerView: 2 },
          }}
        >
          {testimonialItems.map((item, index) => (
            <SwiperSlide>
              <TestimonialItem
                key={item.name}
                image={item.image}
                name={item.name}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Testimonial;
