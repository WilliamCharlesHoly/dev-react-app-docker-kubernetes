import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import DSP1 from "../../img/DSPortfolio1.jpg"; 
import DSP2 from "../../img/DSPortfolio2.jpg";
import DSP3 from "../../img/DSPortfolio3.jpg";
import DW1 from "../../img/DjangoW1.jpg";
import DW2 from "../../img/DjangoW2.jpg";
import DW3 from "../../img/DjangoW3.jpg";

const Portfolio = () => {
  return (
    <div className="portfolio" id='Portfolio'>
      <span>Recent Portfolio</span>
      <span>Project</span>
      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >

        <SwiperSlide>
          <img src={DSP1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={DSP2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={DSP3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={DW1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={DW2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={DW3} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
