import "./videomath.css";
export default function VIDEO({ title, video_link, ly_thuyet }) {
  return (
    <div className="container_video">
      <div className="container_video_icon">
        <p>
          <i class="fa-brands fa-youtube" style={{ color: "#fa0000" }}></i>
        </p>
      </div>
      <div className="container_video_text">
        <p>{title}</p>
        <div className="button_lithuyet" style={{ color: "#488dc7" }}>
          Lí thuyết
        </div>
      </div>
    </div>
  );
}
