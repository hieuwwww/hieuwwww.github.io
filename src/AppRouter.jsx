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
          {console.log(math_class_data)}
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
        </Routes>
      </div>
    </Router>
  );
};
export default AppRouter;
