import NextPage from "../FOOTER/nextpage";
import NavBarOfficial from "../OfficialHome/NavBar";
import csss from "./math1.module.css";
import VIDEO from "./videomath";

export default function MathClass({ title, background_image, data }) {
  return (
    <div style={{ marginLeft: "25%", marginTop: "9.8%" }}>
      <h2
        style={{
          backgroundImage: `url("${background_image}")`,
          minHeight: "300px",
          width: "86%",
          height: '590px',
          backgroundSize: 'contain',
          backgroundRepeat: "no-repeat",
          position: 'relative'
          ,


        }}
      ></h2>
      <h2 style={{ marginTop: "-10px", color: "#488dc7", fontSize: '35px', fontFamily: 'sans-serif', marginBottom: '-19px', textShadow: '1.5px 0px black', letterSpacing: '2px', borderBottom: '1px solid black', maxWidth: '86%', paddingBottom: '10px' }}>{title}</h2>
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
    </div >
  );
}
