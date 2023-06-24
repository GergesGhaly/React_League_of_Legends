import { Swiper, SwiperSlide } from "swiper/react";
import rank1 from "./img/rank1.png";
import rank3 from "./img/rank2.webp";
import rank2 from "./img/rank3.webp";
import rank4 from "./img/d7471e2ef48175986e9b75b566f61408.png";
import React, { useState } from "react";

// Import Swiper styles
import "./honers.css";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Grid, Pagination } from "swiper";
import { EffectCards } from "swiper";

const Honers = () => {
  const [smallImg, setSmallImg] = useState([
    {
      img: rank4,
    },

    {
      img: rank1,
    },
    {
      img: rank2,
    },
    {
      img: rank3,
    },
  ]);

  return (
    <div className="honers  ">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {smallImg.map((item) => {
          return (
            <SwiperSlide>
              <img src={item.img} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
export default Honers;
