import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./../../../assets/styles/common/slider.css";

import SwiperCore, { Pagination, Navigation } from "swiper";

SwiperCore.use([Pagination, Navigation]);

const LinerSlider = ({ imagesArray }) => {
    const navigationPrevRef = React.useRef(null) 
  const navigationNextRef = React.useRef(null)
    const [swiperRef, setSwiperRef] = useState(null);
  
    return (
        <div className="liner-slider">
            <Swiper
                onSwiper={setSwiperRef}
                slidesPerView={2}
                centeredSlides={true}
                spaceBetween={30}
                navigation={{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current,
                  }}
                className="mySwiper"
            >
                {imagesArray?.map((el, i) => (
                    <SwiperSlide key={i}>
                        <img src={el} />{" "}
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="buttons">
            <div className="prevEl link" ref={navigationPrevRef}>
                    <img src="/assets/images/icons/leftArrow.svg" />
                </div>
                <div className="nextEl link" ref={navigationNextRef}>
                    <img src="/assets/images/icons/rightArrow.svg" />
                </div>
               
            </div>
        </div>
    );
};

export default LinerSlider;
