import { Link } from "react-router-dom";

function Home1() {
  const colorText = {
    color: "red",
  };
  return (
    <div className="container_home1">
      <h1 style={{ color: "#0a174f", fontFamily: "Tahoma", fontSize: "50px" }}>
        Nền tảng học tập
      </h1>
      <h1 style={{ color: "#03AED2" }}>Lí thuyết & Bài tập toán online</h1>
      <p style={{ color: "black", fontSize: "24px", marginBottom: '50px' }}>
        Học tập đa dạng - không phải trả tiền
      </p>
      <Link to={"/MathHome"}>
        <span
          className="item_home1"
          style={{


          }}
        >
          Bắt đầu học ngay
        </span>
      </Link>
    </div>
  );
}
export default Home1;
