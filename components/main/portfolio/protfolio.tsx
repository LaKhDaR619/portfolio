import styles from "../../../styles/portfolio.module.css";
import { v4 as uuidv4 } from "uuid";
import PortfolioItem from "./portfolioItem";

import { Swiper, SwiperSlide } from "swiper/react";
import Project from "../project/project";

const Portfolio: React.FC = () => {
  const portfolioItems = [
    {
      image: "images/portfolio1.jpg",
      title: "Portfolio",
      description:
        "migrated this protfolio from html, css, vanillaJS to fully modular nextJS project.",
      buttonText: "Code",
      link: "https://github.com/LaKhDaR619/portfolio",
    },
    {
      image: "images/portfolio2.jpg",
      title: "Docta",
      description:
        "created a backend from scratch and managed it along another backend, created pixel-perfect dashboard front end for the docta project.",
      link: "https://play.google.com/store/apps/details?id=io.cleverzone.docta",
    },
  ];

  return (
    <div>
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most recent work</span>

      <div className={`${styles.portfolio__container} container`}>
        <Swiper
          cssMode
          pagination={{ el: ".swiper-pagination-bullets", clickable: true }}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          loop
        >
          {portfolioItems.map((item) => (
            <SwiperSlide key={uuidv4()}>
              <PortfolioItem
                image={item.image}
                title={item.title}
                description={item.description}
                buttonText={item.buttonText}
                link={item.link}
              />
            </SwiperSlide>
          ))}
        </Swiper>
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
        <div className="swiper-pagination-bullets" />
      </div>

      <Project />
    </div>
  );
};

export default Portfolio;
