import React, { useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./homepage";
import Introduction from "./components/introduction";
import GioiThieuContainer from "./components/APPEND/GioiThieu_container";
import VeChungToiContainer from "./components/APPEND/VeChungToi_container";
import LienHeContainer from "./components/APPEND/LienHe_container";
import MangXaHoiToiContainer from "./components/APPEND/MangXaHoi_container";
import MathClassContainer from "./components/MATH1/math_class_container";
import { math_class_data } from "./math_class_data";
import LiThuyetContainer from "./components/Lithuyet/lithuyet_container";
import { lithuyet_container } from "./components/Lithuyet/lithuyet_data";

const AppRouter = () => {
  useEffect(() => {
    document.title = 'Math Fun học tập online miễn phí'
  }, [])
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/aboutus" element={<VeChungToiContainer />} />
          <Route path="/social" element={<MangXaHoiToiContainer />} />
          <Route path="/introduction" element={<GioiThieuContainer />} />
          <Route path="/contact" element={<LienHeContainer />} />
          <Route path="/MathHome" element={<Introduction />} />

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

          {lithuyet_container.map((e, outerIndex) =>
            e.map((ee, middleIndex) =>
              ee.map((eee, innerIndex) => (
                <Route
                  key={`${outerIndex}-${middleIndex}-${innerIndex}`}
                  path={eee.pathname}
                  element={
                    <LiThuyetContainer
                      key={eee.topath}
                      data={eee}
                      src={eee.srcvideo}
                      linkpath={eee.topath}
                    />
                  }
                />
              ))
            )
          )}
        </Routes>
      </div>
    </Router>
  );
};

export default AppRouter;
