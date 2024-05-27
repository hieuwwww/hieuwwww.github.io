import "./components/NAVBAR/navbar_math.css";
import "./components/HOME/home1.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/NAVBAR/navbar_math.jsx";
import Home1 from "./components/HOME/home1.jsx";
import Home2 from "./components/HOME2/home2.jsx";
import Home3 from "./components/HOME3/home3.jsx";
export default function Ap() {
  return (
    <div>
      <NavBar />
      <Home1 />
      <Home2 />
      <Home3 src="pics/1.jpg" />
    </div>
  );
}
