import Footer from "./FOOTER/Footer";
import NavBar from "./NAVBAR/navbar_math";
import Infor from "./OfficialHome/Information";
import NavBarOfficial from "./OfficialHome/NavBar";

export default function Introduction() {
  return (
    <div>
      <NavBar />
      <NavBarOfficial />
      <Infor />
      <Footer />
    </div>
  );
}
