import { v4 as uuidv4 } from "uuid";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialItem from "./testimonialItem";

const Testimonial: React.FC = () => {
  const testimonialItems = [
    {
      name: "Rashid AlZ",
      description:
        "Great man and freelancer. Even with many issues during handover, he was able and willing to give guidance and support until the project was fully operational",
    },
    {
      name: "",
      description:
        "Lakhdar is a true senior developer! with his intensive experience, he proposed the best technologies for our needs, not only on the front-end, but he also helped us designing the REST API with Node and Express, Lakhdar is a great communicator as well, fast and efficient, I strongly recommend him for anyone who is building React based applications at any scale",
    },
  ];

  return (
    <div style={{ minWidth: 0 }}>
      <h2 className="section__title">Testimonial</h2>
      <span className="section__subtitle">My client saying</span>

      <div className="container">
        <Swiper
          // loop
          grabCursor
          spaceBetween={48}
          pagination={{ clickable: true, dynamicBullets: true }}
          breakpoints={{
            568: { slidesPerView: 2 },
          }}
        >
          {testimonialItems.map((item) => (
            <SwiperSlide key={uuidv4()}>
              <TestimonialItem
                name={item.name}
                description={item.description}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
