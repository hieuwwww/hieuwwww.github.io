import Footer from "./components/FOOTER/Footer";
import Home1 from "./components/HOME/home1";
import Home2 from "./components/HOME2/home2";
import Home3 from "./components/HOME3/home3";
import NavBar from "./components/NAVBAR/navbar_math";
import Infor from "./components/OfficialHome/Information";
import NavBarOfficial from "./components/OfficialHome/NavBar";

export default function Homepage() {
  return (
    <div>
      <NavBar />
      <Home1 />
      <Home2 />
      <Home3 src="pics/1.jpg" />
    </div>
  );
}
