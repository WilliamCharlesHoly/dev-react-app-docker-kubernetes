import React from "react";
import "./Certificate.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import badgePic1 from "../../img/Badge1.jpg";
import badgePic2 from "../../img/Badge2.jpg";
import badgePic3 from "../../img/Badge3.jpg";

const Certificate = () => {
  const badges = [
    {
      img: badgePic1,
      review:
        "Python Offered By Microsoft Collaborated with PERKESO",
    },
    {
      img: badgePic2,
      review:
        "T-SQL Offered By Microsoft Collaborated with PERKESO",
    },
    {
      img: badgePic3,
      review:
        "R Offered By Microsoft Collaborated with PERKESO",

    },
  ];

  return (
    <div className="t-wrapper" id='Certificate'>
      <div className="t-heading">
        <span>Certificate </span>
        <span>Badge </span>
        <span>Awarded</span>

      <div className="blur" style={{ background: "var(--purple)" }}></div>
      <div className="blur" style={{ background: "var(--skyblue)", top: '23rem', left: '3rem' }}></div> 

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {badges.map((badge, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={badge.img} alt="" />
                <span>{badge.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Certificate;
