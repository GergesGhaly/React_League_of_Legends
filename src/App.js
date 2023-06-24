import "./App.css";
import Home from "./Home";
import Spotlite from "./Spotlite";
import Videos from "./Videos";
import Viweres from "./Viweres";
import Footer from "./Footer";
import Start from "./Start";
import { Route, Routes } from "react-router-dom";
import Honers from "./Honers";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Start />} />
        <Route
          path="/home"
          element={
            <>
              <Home />
              <Spotlite />
              <Videos />
              <Viweres />
              <Footer />
            </>
          }
        />
        {/* <Route path="/home/Traile" element={<Videos />} /> */}
      </Routes>
    </div>
  );
}

export default App;
