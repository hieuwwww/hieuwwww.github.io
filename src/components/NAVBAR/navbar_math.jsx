import { useState } from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  const c1 = {
    color: "#fff",
    border: "2px",
    fontSize: "30px",
    marginLeft: "100px",
  };
  const c2 = {
    color: "#FEEFAD",
  };
  const c3 = {
    color: "rgb(3, 255, 7)",
  };
  const c4 = {
    color: "#FEEFAD",
  };
  const hoverBox = {
    backGroundColor: "red",
    borderRadius: "10px",
  };
  const [append, setAppend] = useState(false);
  function isAppend() {
    setAppend(!append);
  }
  return (
    <div className="container_math">
      <Link to="/">
        <i className="fa-solid fa-m fa-bounce" style={c1}></i>
        <i className="fa-solid fa-a" style={c2}></i>
        <i className="fa-solid fa-t" style={c4}></i>
        <i className="fa-solid fa-square-h fa-beat" style={c3}>
          {" "}
        </i>
      </Link>

      <span className="container_li">
        <ul>
          <Link to="/introduction">Giới thiệu</Link>
          <Link to="/aboutus">Về chúng tôi</Link>
          <Link to="/social">Mạng xã hội</Link>
          <Link to="/contact">Liên hệ</Link>
          <span className="dnhap_dki">
            <li>
              <a href="">Đăng kí</a>
            </li>
            <li>
              <a href="">Đăng nhập</a>
            </li>
          </span>
        </ul>
      </span>
    </div>
  );
};
export default NavBar;
