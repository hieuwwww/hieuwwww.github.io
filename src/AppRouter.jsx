import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from "./homepage";
import Introduction from "./components/introduction";
import GioiThieuContainer from "./components/APPEND/GioiThieu_container";
import VeChungToiContainer from "./components/APPEND/VeChungToi_container";
import LienHeContainer from "./components/APPEND/LienHe_container";
import MangXaHoiToiContainer from "./components/APPEND/MangXaHoi_container";
import Math1_container from "./components/MATH1/math1_container";

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
          <Route path="/toan1" element={<Math1_container />} />{" "}
          <Route path="/toan1/toan1_page2" element={<Math1_container />} />{" "}
        </Routes>
      </div>
    </Router>
  );
};
export default AppRouter;
