import "./lithuyet.css";
import React, { useEffect } from "react";

export default function Lithuyet({ src, data }) {
  useEffect(() => {
    const handleScroll = () => {
      var div = document.getElementById("container_video_lithuyet");
      if (div) {
        var scrollY = window.scrollY || window.pageYOffset;

        if (scrollY > 30) {
          // Điều kiện khi cuộn hơn 30px
          div.classList.add("shrink");
        } else {
          div.classList.remove("shrink");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Dọn dẹp sự kiện cuộn khi component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container_lithuyet">
      <div id="container_video_lithuyet">
        <iframe
          className="videoYT"
          width="100%"
          height="100%"
          src={src}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div id="noidungLithuyet" className="container_noidung_lithuyet">
        <ul>
          <li>
            <h2>{data.title}</h2>
            {data.subtitle.map((subtitle, subIndex) => (
              <div key={subIndex}>
                <h3>{subtitle}</h3>
                {subIndex < data.noidung.length && (
                  <p>{data.noidung[subIndex]}</p>
                )}
                <img src={data.srcpic[subIndex]} alt={subtitle} />
                <p style={{ color: "#488dc7", textAlign: "center" }}>
                  Hình ảnh minh họa
                </p>
                <div className="containerBlooket">
                  <a
                    className="blooket_link"
                    href={data.blooket[subIndex]}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      style={{ width: "100px", height: "100px" }}
                      src={data.blooketPics[subIndex]}
                      alt={data.blooketPics[subIndex]}
                    />
                  </a>
                  <div className="clicktoplay">Ấn vào để chơi</div>
                </div>
              </div>
            ))}
          </li>
        </ul>
      </div>
    </div>
  );
}
