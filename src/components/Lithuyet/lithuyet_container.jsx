import NavBar from "../NAVBAR/navbar_math";
import NavBarOfficial from "../OfficialHome/NavBar";
import Lithuyet from "./lithuyet";

export default function LiThuyetContainer({ src, data, linkpath }) {
    return (
        <div className="Lithuyettorouter">
            < NavBar />

            < Lithuyet src={src} data={data} linkpath={linkpath} />
        </div>
    );
}