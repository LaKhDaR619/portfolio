import { v4 as uuidv4 } from "uuid";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialItem from "./testimonialItem";
import Project from "../project/project";

const Testimonial: React.FC = () => {
  const testimonialItems = [
    { image: "images/testimonial1.jpg", name: "Sara Smith" },
    { image: "images/testimonial2.jpg", name: "Matt Robinson" },
    { image: "images/testimonial3.jpg", name: "Paul Harris" },
  ];

  return (
    <div style={{ minWidth: 0 }}>
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
          {testimonialItems.map((item) => (
            <SwiperSlide key={uuidv4()}>
              <TestimonialItem image={item.image} name={item.name} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Project />
    </div>
  );
};

export default Testimonial;
