import styles from "../../../styles/portfolio.module.css";
import { v4 as uuidv4 } from "uuid";
import PortfolioItem from "./portfolioItem";

import { Swiper, SwiperSlide } from "swiper/react";

const Portfolio: React.FC = () => {
  const portfolioItems = [
    {
      image: "images/portfolio1.jpg",
      title: "Portfolio",
      description:
        "migrated this protfolio from html, css, vanillaJS to fully modular nextJS project, adding some new features to it.",
      buttonText: "Code",
      link: "https://github.com/LaKhDaR619/portfolio",
    },
    {
      image: "images/portfolio2.jpg",
      title: "Docta",
      description:
        "created a backend from scratch and managed its communication with another backend, created pixel-perfect dashboard front end for the docta project.",
      buttonText: "App on Google Play",
      link: "https://play.google.com/store/apps/details?id=io.cleverzone.docta",
    },
  ];

  // TODO: fill up this section

  return (
    <div className={styles.portfolio}>
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
            className={`bx bx-md bx-chevron-right ${styles["swiper-portfolio-icon"]}`}
          />
        </div>
        <div className="swiper-button-prev">
          <i
            className={`bx bx-md bx-chevron-left ${styles["swiper-portfolio-icon"]}`}
          />
        </div>
        <div className="swiper-pagination-bullets" />
      </div>
    </div>
  );
};

export default Portfolio;
