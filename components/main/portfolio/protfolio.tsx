import styles from "../../../styles/portfolio.module.css";
import PortfolioItem from "./portfolioItem";

import { Swiper, SwiperSlide } from "swiper/react";

const Portfolio: React.FC = () => {
  const portfolioItems = [
    {
      image: "images/portfolio1.jpg",
      title: "Portfolio",
      description:
        "migrated this protfolio from html, css, vanillaJS to fully modular nextJS project.",
    },
    {
      image: "images/portfolio2.jpg",
      title: "Docta",
      description:
        "managed two backends, and created pixel-perfect dashboard front end for the docta project.",
    },
  ];

  return (
    <>
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most recent work</span>

      <div className={`${styles.portfolio__container} container`}>
        <Swiper
          cssMode
          pagination={{ clickable: true }}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          loop
        >
          {portfolioItems.map((item, index) => (
            <SwiperSlide key={index}>
              <PortfolioItem
                image={item.image}
                title={item.title}
                description={item.description}
              />
            </SwiperSlide>
          ))}
          <div className="swiper-button-next">
            <i
              className={`uil uil-angle-right-b ${styles["swiper-portfolio-icon"]}`}
            />
          </div>
          <div className="swiper-button-prev">
            <i
              className={`uil uil-angle-left-b ${styles["swiper-portfolio-icon"]}`}
            />
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default Portfolio;
