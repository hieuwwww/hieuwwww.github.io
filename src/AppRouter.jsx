import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from "./homepage";
import Introduction from "./components/introduction";
import GioiThieuContainer from "./components/APPEND/GioiThieu_container";
import VeChungToiContainer from "./components/APPEND/VeChungToi_container";
import LienHeContainer from "./components/APPEND/LienHe_container";
import MangXaHoiToiContainer from "./components/APPEND/MangXaHoi_container";
import MathClassContainer from "./components/MATH1/math_class_container";
import { math_class_data } from "./math_class_data";

import LiThuyetContainer from "./components/Lithuyet/lithuyet_container";
import { container_lithuyet } from "./components/Lithuyet/lithuyet_data";
const AppRouter = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" exact element={<Homepage />} />{" "}
          <Route path="/aboutus" element={<VeChungToiContainer />} />{" "}
          <Route path="/social" element={<MangXaHoiToiContainer />} />{" "}
          <Route path="/introduction" element={<GioiThieuContainer />} />{" "}
          <Route path="/contact" element={<LienHeContainer />} />{" "}
          <Route path="/MathHome" element={<Introduction />} />{" "}

          {/* <Route path="/toan1/clip1" element={<LiThuyetContainer src="https://www.youtube.com/embed/BIlDPqcIDYU?si=vFu5RcBW7KAGfTOd" />} />{" "}
          <Route path="/toan1/clip2" element={<LiThuyetContainer src="https://www.youtube.com/embed/RZzbDFgXMUU?si=774bMDCS5cQ7WQ3-" />} />{" "}
          {console.log(math_class_data)} */}
          {math_class_data.map((item, index) => (
            <Route
              key={index}
              path={`/${item.link_to}`}
              element={
                <MathClassContainer
                  title={item.title}
                  background_image={item.background_image}
                  data={item.class_content}
                />
              }
            />
          ))}
          {container_lithuyet.map((e, index) => {
            { console.log(e) }
            // cái kia log ở file nào v lou tắt đi what chu mean 
            return (
              <>
                {e.class_content.map((current, indec) => (
                  current.pathname.map((i, ind) => (
                    <Route key={indec} path={`/${i}`} element={<LiThuyetContainer src={current.srcvideo[ind]} />} />
                  ))

                ))}


              </>
            );
          })

          }

        </Routes>
      </div>
    </Router>
  );
};
export default AppRouter;
