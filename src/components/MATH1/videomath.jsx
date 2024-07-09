import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./videomath.css";

export default function VIDEO({ title, video_link, ly_thuyet }) {
  useEffect(() => {
    const lithuyettotop = document.querySelectorAll(".button_lithuyet");
    const clicktotop = () => {
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
    };
    lithuyettotop.forEach((index) => {
      index.addEventListener("click", clicktotop);
    });
    return () => {
      lithuyettotop.forEach((index) => {
        index.removeEventListener("click", clicktotop);
      });
    };
  }, []);

  return (
    <div className="container_video">
      <div className="container_video_icon" id="mydiv">
        <iframe
          className="videoYT"
          width="100%"
          height="100%"
          src={video_link}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="container_video_text">
        <p style={{ zIndex: "9" }}>{title}</p>
        <Link
          className="button_lithuyet"
          style={{ color: "#000000", maxWidth: "22%" }}
          to={ly_thuyet}
        >
          <p>Lí thuyết</p>
        </Link>
      </div>
    </div>
  );
}
