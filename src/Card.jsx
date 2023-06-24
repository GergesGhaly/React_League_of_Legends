import React from "react";
import { SwiperSlide } from "swiper/react";

const Card = ({ card }) => {
  return (
    <SwiperSlide className="swiper-slide">
      <div className="card">
        <div className="card-warper">
          <div className="card-img">
            <img src={card.img} alt="" />
          </div>
          <div className="card-content">
            <div className="card-header">
              <h1>{card.title}</h1>
               <span>{card.whatches}</span>
            </div>
            <div className="card-lorem">
              <p>{card.lorem}</p>
            </div>
            <div className="card-cast">
              <h4>runes</h4>
              <div className="card-img-warper">
                {card.cats.map((img, id) => {
                  return (
                    <div key={id} className="card-cat-img">
                      <img src={img} />;
                    </div>
                  );
                })}
              </div>
              <div className="card-footer">
                <h2 >watch Tralier</h2>
                <div className="btn rose">Play Now </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SwiperSlide>
  );
};

export default Card;
