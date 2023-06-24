import React from "react";
import "./Videos.css";
import {
  Player,
  ControlBar,
  ReplayControl,
  ForwardControl,
  CurrentTimeDisplay,
  TimeDivider,
  PlaybackRateMenuButton,
  VolumeMenuButton,
} from "video-react";
import "../node_modules/video-react/dist/video-react.css";
import videoImg from "./img/pxfuel.jpg";
import logo from "./img/rank3.webp";
import videoImgSide from "./img/617PFOQ4qpL._AC_SX450_.jpg";
import videoImgSide2 from "./img/arcane-e1623436216206.jpg";
// import videomain from "./videos/Match Found Sound - League Of Legends.mp4";
import videomsid from "./videos/jinx.mp4";
import videomsid1 from "./videos/akshan.mp4";
import videomain from "./videos/cinmatic (2).mp4";

const Videos = () => {
  const url = "https://youtu.be/aR-KAldshAE?t=4";
  return (
    <div className="videos section container">
      <div className="section-title">
        <div className="section-title-img">
          <img
            src={logo}
            alt=""
          />
        </div>
        <h2>Trailer & Videos</h2>
      </div>
      <div className="videos-wraper">
        <div className="main">
          <Player
            fluid={false}
            width={"100%"}
            height={"100%"}
            videoHeight="100%"
            videoWidth="100%"
            poster={videoImg}
            loop={true}
          >
            <source src={videomain} />
            <source src={videomain} />

            <ControlBar disabled>
              <ReplayControl seconds={10} order={1.1} />
              <ForwardControl seconds={30} order={1.2} />
              <CurrentTimeDisplay order={4.1} />
              <TimeDivider order={4.2} />
              <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} order={7.1} />
              <VolumeMenuButton disabled />
            </ControlBar>
          </Player>
          {/* <img
            src="https://www.egames.news/__export/1609188928766/sites/debate/img/2020/12/28/cxmo_es_el_sistema_de_clasificacixn_en_league_of_legends.jpg_1753094345.jpg"
            alt=""
          /> */}
        </div>
        <div className="side-one">
          <Player
            fluid={false}
            width={"100%"}
            height={"100%"}
            videoHeight="100%"
            videoWidth="100%"
            poster={videoImgSide}
            loop={true}
          >
            <source src={videomsid1} />
            <source src={videomsid1} />

            <ControlBar disabled>
              <ReplayControl seconds={10} order={1.1} />
              <ForwardControl seconds={30} order={1.2} />
              <CurrentTimeDisplay order={4.1} />
              <TimeDivider order={4.2} />
              <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} order={7.1} />
              <VolumeMenuButton disabled />
            </ControlBar>
          </Player>

          {/* <img
            src="https://www.egames.news/__export/1609188928766/sites/debate/img/2020/12/28/cxmo_es_el_sistema_de_clasificacixn_en_league_of_legends.jpg_1753094345.jpg"
            alt=""
          /> */}
        </div>
        <div className="side">
          <Player
            fluid={false}
            width={"100%"}
            height={"100%"}
            poster={videoImgSide2}
            loop={true}
          >
            <source src={videomsid} />
            <source src={videomsid} />

            <ControlBar disabled>
              <ReplayControl seconds={10} order={1.1} />
              <ForwardControl seconds={30} order={1.2} />
              <CurrentTimeDisplay order={4.1} />
              <TimeDivider order={4.2} />
              <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} order={7.1} />
              <VolumeMenuButton disabled />
            </ControlBar>
          </Player>
          {/* <img
            src="https://www.egames.news/__export/1609188928766/sites/debate/img/2020/12/28/cxmo_es_el_sistema_de_clasificacixn_en_league_of_legends.jpg_1753094345.jpg"
            alt=""
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Videos;
