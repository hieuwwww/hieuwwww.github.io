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
    marginTop: '10px'
  };
  const c3 = {
    color: '#FFFFFF',
    marginTop: '10px'
  };
  const c4 = {
    color: "#FEEFAD",
    marginTop: '10px'
  };
  const hoverBox = {
    backGroundColor: "red",
    borderRadius: "10px",
  };
  const f = {
    marginLeft: '127px',
    fontSize: '14px'
  }
  const [append, setAppend] = useState(false);
  function isAppend() {
    setAppend(!append);
  }
  return (
    <div className="container_math">
      <Link to="/">

        <div style={{ display: 'flex', flexDirection: 'column', }}>
          <div style={{ display: 'flex' }}>
            <i className="fa-solid fa-m fa-bounce" style={c1}></i>
            <i className="fa-solid fa-a" style={c2}></i>
            <i className="fa-solid fa-t" style={c4}></i>
            <i className="fa-solid fa-h" style={c3}>

              {" "}
            </i>
          </div>
          <div style={{ marginTop: '2%' }}>
            <i className="fa-solid fa-f" style={f}></i>
            <i className="fa-solid fa-u" style={{ fontSize: '14px' }}></i>
            <i className="fa-solid fa-n" style={{ fontSize: '14px' }}></i>
          </div>
        </div>


      </Link>

      <span className="container_li">
        <ul>
          <Link to="/introduction">Giới thiệu</Link>
          <Link to="/aboutus">Về chúng tôi</Link>
          <Link to="/social">Mạng xã hội</Link>
          <Link to="/contact">Liên hệ</Link>
          <span className="dnhap_dki">
            <li>
              <a className="tiktok" href="https://www.tiktok.com/@xinmotchutbinhyen?_t=8nuFAHRyjuU&_r=1" target="_blank" ><i className="fa-brands fa-tiktok"></i></a>
            </li>
            <li>
              <a className="facebook" href="https://www.facebook.com/fptu.LearnSmart" target="_blank"><i className="fa-brands fa-facebook"></i></a>
            </li>
            <li>
              <a className="youtube" href="https://www.youtube.com/@mathfunzz" target="_blank"><i className="fa-brands fa-youtube"></i></a>
            </li>
          </span>
        </ul>
      </span>
    </div>
  );
};
export default NavBar;
