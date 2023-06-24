import React from "react";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import rank4 from "./img/d7471e2ef48175986e9b75b566f61408.png";
import { Link } from "react-router-dom";
// Import Swiper styles & images
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";
import Card from "./Card";
import cast1 from "./img/cast1.png";
import cast2 from "./img/cast2.png";
import cast3 from "./img/cast3.png";
import cast4 from "./img/cast4.webp";
import cast5 from "./img/cast5.webp";
import cast6 from "./img/cast7.webp";
import swipimg from "./img/swipimg.webp";

const Home = () => {
  const [cards, setCards] = useState([
    {
      img: swipimg,
      title: "KAYLE",
      whatches: "Fighter",
      lorem:
        "Lorem ipsum dolor sit amet consectetur adipisicing elitImpedit dolorum, quaerat doloremque saepe aperiam voluptatibus laborum ullam adipisci dolore hic ratione vero recusandae temporibus? Illo iure quasi eius,blanditiis labore minus tempora, dolores nostrum optio, odio minima. Iure enim iste neque beatae, adipisci nisi,distinctio voluptates magnam commodi nemo voluptatum",
      cats: [cast1, cast2, cast3],
    },
    {
      // img: "https://i.pinimg.com/564x/9a/41/2d/9a412d9b0c030e3c6ca8a47748ceee9c.jpg",
      title: "ZED",
      img: swipimg,

      whatches: "Fighter",
      lorem:
        "Lorem ipsum dolor sit amet consectetur adipisicing elitImpedit dolorum, quaerat doloremque saepe aperiam voluptatibus laborum ullam adipisci dolore hic ratione vero recusandae temporibus? Illo iure quasi eius,blanditiis labore minus tempora, dolores nostrum optio, odio minima. Iure enim iste neque beatae, adipisci nisi,distinctio voluptates magnam commodi nemo voluptatum",
      cats: [cast4, cast5, cast6],
    },
  ]);

  return (
    <div className="home section container">
      <div className="header">
        <div className="header-top">
          <div className="header-logo">
            <Link to="/">
              <img src={rank4} alt="" />
            </Link>
          </div>
          <div className="header-right">
            <div className="header-right-search">
              <div className="serach-bar">
                <input
                  className="search"
                  type="text"
                  placeholder="Search for movies"
                />
              </div>
              <div>welcom bro</div>
              <div>|</div>
              <div className="signin">sign-in</div>
            </div>
            {/* <div className="header-right-ul">
            <ul>
              <li><Link to="/header">Header</Link></li>
              <li><Link to="/spotlit">spotlit </Link></li>
              <li><Link to="/champinios">champinios</Link></li>
              <li><Link to="/home/Traile">Traile</Link></li>       
              
            </ul>
            <div className="btn pink">Ticket</div>
          </div> */}
          </div>
        </div>
      </div>
      <div className="slider">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 1000,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {cards.map((card, id) => {
            return (
              <SwiperSlide key={id}>
                <Card card={card} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Home;
