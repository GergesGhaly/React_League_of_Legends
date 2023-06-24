import React, { useState } from "react";
import "./Viweres.css";
import vid from "./videos/zed.mp4";
import vid2 from "./videos/pyke.mp4";
import vid3 from "./videos/Dariuss.mp4";
import vid4 from "./videos/Crit Aatrox URF.mp4";
import logo from "./img/rank1.png";
import zed from "./img//zed.jpg";
import pyke from "./img/pyke.jpg";
import daruis from "./img/daruis.jpg";
import atrox from "./img/atrox.jpg";

// Import Swiper styles

// import required modules
import { Pagination } from "swiper";

const Viweres = () => {
  const [card, setCard] = useState([
    {
      img: zed,
      video: vid,
    },
    {
      img: pyke,
      video: vid2,
    },

    {
      img: daruis,
      video: vid3,
    },
    {
      img: atrox,
      video: vid4,
    },
  ]);

  return (
    <div className="viwers container">
      <div className="section-title">
        <div className="section-title-img">
          <img src={logo} alt="" />
        </div>
        <h2>Legend Shorts</h2>
      </div>

      <div className="container">
        {card.map((card) => {
          return (
            <div className="card">
              <img src={card.img} alt="" />
              <video muted autoPlay loop playsinlin="true">
                <source src={card.video} type="video/mp4" />
              </video>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// const Container = styled.div`
//   margin-top: 30px;
//   padding: 30px 0px 26px;
//   display: grid;
//   grid-gap: 25px;
//   gap: 25px;
//   grid-template-columns: repeat(5, minmax(0, 1fr));

//   @media (max-width: 768px) {
//     grid-template-columns: repeat(1, minmax(0, 1fr));
//   }
// `;
// const Wrap = styled.div`
//   position: relative;
//   overflow: hidden;
//   border: 3px solid rgb(249, 249, 249, 0.1);
//   border-radius: 10px;
//   box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
//     rgb(0 0 0/ 73%) 0px 16px 10px -10px;
//   transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
//   padding-top: 56.25%;
//   cursor: pointer;

//   img {
//     position: absolute;
//     top: 0;
//     display: block;
//     height: 100%;
//     width: 100%;
//     object-fit: cover;
//     inset: 0px;
//     z-index: 1;
//   }
//   video {
//     position: absolute;
//     top: 0px;
//     height: 100%;
//     width: 100%;
//     opacity:0;
//     z-index: 0;
//   }

//   &:hover{
//       transform:scale(1.05);
//       border-color:rgba(249,249,249,0.8);

//       video{
//         opacity:1;
//       }
//   }

export default Viweres;
