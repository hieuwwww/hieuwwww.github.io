import "./introduction.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ClassItem from "./class_item";
export default function Intro() {
  return (
    <div>
      <div className="intro1">
        <h1>Nền tảng học tập</h1>
        <h1 style={{ color: "aqua" }}>Lí thuyết & Bài tập toán Online</h1>
        <h2>Học tập đa dạng - không cần trả tiền</h2>
        <button className="start-button"> Bắt đầu học ngay</button>
      </div>
      <div className="intro2">
        <h1>Intro2</h1>
        <div className="images-container">
          <Link to="/test">
            <ClassItem src={"/images/dethitoan.jpg"} />
          </Link>
          <ClassItem src={"/images/toan1.jpg"} />
          <ClassItem src={"/images/toan1.jpg"} />
          <ClassItem src={"/images/toan1.jpg"} />
          <ClassItem src={"/images/toan1.jpg"} />
          <ClassItem src={"/images/toan1.jpg"} />
        </div>
      </div>
    </div>
  );
}
