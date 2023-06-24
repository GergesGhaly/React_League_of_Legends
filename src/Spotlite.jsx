import React, { useState } from "react";
import "./Spotlite.css";
import useSound from "use-sound";

import rank1 from "./img/rank1.png";
import rank3 from "./img/rank2.webp";
import rank2 from "./img/rank3.webp";
import rank4 from "./img/d7471e2ef48175986e9b75b566f61408.png";
import bacgroung from "./img/c-o-season-9-splash-yasuo.png";
import yass from "./img/yass.jpg";
import kata from "./img/kata.jpg";
import lux from "./img/lux.jpg";
import jinx from "./img/jinx.jpg";
import darius from "./img/dariux.jpg";
import ha from "./img/ha.jpg";
import kaly from "./img/kaly.jpg";
import ha2 from "./img/ha2.jpg";
import { ImageGroup, Image } from "react-fullscreen-image";

const Spotlite = () => {
  const [champFilter, setChampFilter] = useState("");
  const [bigIm, setBigIm] = useState([
    {
      img: yass,
      title: "Fighter",
      star: "***",
    },
    {
      img: kata,
      title: "Fighter",
      star: "***",
    },
    {
      img: lux,
      title: "sup",
      star: "***",
    },
    {
      img: jinx,
      title: "adc",
      star: "***",
    },
    {
      img: darius,
      title: "Fighter",
      star: "***",
    },
    {
      img: ha,

      title: "Darius",
      star: "***",
    },
    {
      img: kaly,

      title: "adc",
      star: "***",
    },
    {
      img: ha2,
      title: "adc",
      star: "***",
    },
  ]);
  console.log(champFilter);

  // const SetFulterHAndel=(filter)=>{
  //   setChampFilter(filter)
  // }
  const [smallImg, setSmallImg] = useState([
    {
      img: rank1,
    },
    {
      img: rank2,
    },
    {
      img: rank3,
    },
    {
      img: rank4,
    },
  ]);

  // const [play] = useSound(sound);
  // const BoopButton = () => {
  //   return <button onClick={play}>Boop!</button>;
  // };

  return (
    <div
      id="spotlit "
      className="spotlit section container"
      style={{
        backgroundImage: `url(${bacgroung})`,
      }}
    >
      <div className="spotlite-header">
        <div className="section-title">
          <div className="section-title-img">
            <img src={rank3} alt="" />
          </div>
          <h2>champinios</h2>
        </div>
        <select
          value={champFilter}
          onChange={(e) => setChampFilter(e.target.value)}
          name=""
          id=""
        >
          <option className="select-items" value="">
            All
          </option>
          <option className="select-items" value="Fighter">
            Fighter
          </option>
          <option className="select-items" value="adc">
            Adc
          </option>
          <option className="select-items" value="sup">
            Support
          </option>
        </select>
      </div>

      {/* <ImageGroup>
      </ImageGroup> */}

      <div className="img-items">
        {bigIm
          .filter((value) => value.title.includes(champFilter))
          .map((item) => {
            return (
              <div className="item">
                <img src={item.img} alt="" />
              </div>
            );
          })}
      </div>
      {/* <div className="small-img-items">
          {smallImg.map((item) => {
            return (
              <div className="item">
                <img src={item.img} alt="" />
              </div>
            );
          })}
        </div> */}
    </div>
  );
};

export default Spotlite;
