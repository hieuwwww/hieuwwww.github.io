import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from "./homepage";
import NavBar from "./components/NAVBAR/navbar_math";
import Infor from "./components/OfficialHome/Information";
import Introduction from "./components/introduction";

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" exact element={<Homepage />} />{" "}
          <Route path="/navbar" element={<NavBar />} />{" "}
          <Route path="/introduction" element={<Introduction />} />{" "}
        </Routes>
      </div>
    </Router>
  );
};
export default AppRouter;
