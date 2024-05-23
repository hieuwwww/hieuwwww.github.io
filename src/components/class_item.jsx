import { height } from "@fortawesome/free-solid-svg-icons/fa0";

export default function ClassItem({ src, alt }) {
  return (
    <div className="class-item">
      <img src={src} alt={alt} style={{ width: "370px", height: "250px" }} />
    </div>
  );
}
