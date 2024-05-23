import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./home";
import Header from "./components/header";

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" exact element={<Home />} />{" "}
          <Route path="/test" exact element={<Header />} />{" "}
        </Routes>
      </div>
    </Router>
  );
};
export default AppRouter;
