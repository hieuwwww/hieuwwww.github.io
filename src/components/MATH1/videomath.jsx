import "./videomath.css";
import { Link } from "react-router-dom";
export default function VIDEO({ title, video_link, ly_thuyet }) {
  console.log(ly_thuyet);
  return (
    <div className="container_video">
      <div className="container_video_icon" id="mydiv">
        {/* <i class="fa-brands fa-youtube" style={{ color: "#fa0000" }}></i> */}
        <iframe className="videoYT" width="100%" height="100%" src={/*"https://www.youtube.com/embed/BIlDPqcIDYU?si=vFu5RcBW7KAGfTOd"*/video_link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
      <div className="container_video_text">
        <p>{title}</p>
        <Link className="button_lithuyet" style={{ color: "#488dc7" }} to={/*'/toan1/clip1'*/ ly_thuyet}>

          Lí thuyết

        </Link>

      </div>
    </div>
  );
}
