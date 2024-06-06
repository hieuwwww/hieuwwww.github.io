import NextPage from "../FOOTER/nextpage";
import NavBarOfficial from "../OfficialHome/NavBar";
import csss from "./math1.module.css";
import VIDEO from "./videomath";

export default function MathClass({ title, background_image, data }) {
  return (
    <div style={{ marginLeft: "25%", marginTop: "8%" }}>
      <h2
        style={{
          backgroundImage: `url("${background_image}")`,
          height: "300px",
          width: "86%",
          backgroundSize: "cover",
        }}
      ></h2>
      <h2 style={{ marginTop: "80px", color: "#488dc7" }}>{title}</h2>
      <div
        style={{ display: "flex", flexWrap: "wrap", paddingBottom: "200px" }}
      >
        {data &&
          data.map((item, index) => (
            <VIDEO
              key={index}
              title={item.title}
              video_link={item.video_link}
              ly_thuyet={item.ly_thuyet}

            />
          ))}
      </div>
    </div>
  );
}
