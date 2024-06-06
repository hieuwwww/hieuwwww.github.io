import NextPage from "../FOOTER/nextpage";
import NavBar from "../NAVBAR/navbar_math";
import NavBarOfficial from "../OfficialHome/NavBar";
import MathClass from "./math_class";

export default function MathClassContainer({ title, background_image, data, }) {
  return (
    <div>
      <NavBar />
      <NavBarOfficial />
      <MathClass
        title={title}
        background_image={background_image}
        data={data}
      />
      <NextPage />
    </div>
  );
}
