import NavItem from "./nav_item";
import "./header.css";
export default function Header() {
  return (
    <div className="header-container">
      <div className="homepage-icon">
        <img src="" alt="" />
      </div>
      <div className="list1">
        <NavItem title={"item1"} />
        <NavItem title={"item2"} />
      </div>
      <div className="list2">troll</div>
    </div>
  );
}
