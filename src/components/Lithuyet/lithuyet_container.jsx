import NavBar from "../NAVBAR/navbar_math";
import NavBarOfficial from "../OfficialHome/NavBar";
import Lithuyet from "./lithuyet";

export default function LiThuyetContainer(props) {
    return (
        <div className="Lithuyettorouter">
            < NavBar />
            < NavBarOfficial />
            < Lithuyet src={props.src} />
        </div>
    );
}