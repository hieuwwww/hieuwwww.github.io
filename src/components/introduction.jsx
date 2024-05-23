import "./introduction.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
export default function Intro() {
  return (
    <div>
      <div className="intro1">
        <h1>Nền tảng học tập</h1>
        <h1 style={{ color: "aqua" }}>Lí thuyết & Bài tập toán Online</h1>
        <h2>Học tập đa dạng - không cần trả tiền</h2>
        <button className="start-button"> Bắt đầu học ngay</button>
        <img src="" alt="" />
      </div>
      <div className="intro2">
        <h1>Intro2</h1>
        <img src="" alt="" />
      </div>
    </div>
  );
}
