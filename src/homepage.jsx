import DivSlider from "./components/APPEND/DIV_SLIDER/DicSlide";
import Home1 from "./components/HOME/home1";
import Home2 from "./components/HOME2/home2";
import Home3 from "./components/HOME3/home3";
import NavBar from "./components/NAVBAR/navbar_math";

export default function Homepage() {
  return (
    <div>
      <NavBar />
      <Home1 />
      <DivSlider />
      <Home2 />
      <Home3 src="pics/1.jpg" />
    </div>
  );
}
