import NavBar from "../NAVBAR/navbar_math";
import NavBarOfficial from "../OfficialHome/NavBar";
import Lithuyet from "./lithuyet";

export default function LiThuyetContainer({ src, data }) {
    return (
        <div className="Lithuyettorouter">
            < NavBar />
            < NavBarOfficial />
            < Lithuyet src={src} data={data} />
        </div>
    );
}