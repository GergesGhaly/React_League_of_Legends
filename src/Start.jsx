import React from "react";
import "./start.css";
import imgbtn from "./img/btn.png";
import videomsid from "./videos/backround.mp4";
import { Link } from "react-router-dom";
import Honers from "./Honers";

const Start = () => {
  return (
    <div className="start section ">
      <div className="background">
        <video loop autoPlay muted src={videomsid} ></video>
      </div>

      <div
        style={{
          zIndex: "20",
          padding: "20px",
        }}
        className="honer"
      >
        <Honers />
      </div>
      {/* <div className="Tech-uesd">
        <h4>Tech Used</h4>
        <h5>React , React-router , Swiper</h5>
        <h5>Css , React-video, a lot of pictures :)</h5>
      </div> */}

      {/* <button className="btn">Start Game</button> */}
      <div className="btn-wrp">
        <Link to="/home">
          {/* <img src={imgbtn} alt="" /> */}
          <button>START</button>
        </Link>
      </div>
    </div>
  );
};

export default Start;
