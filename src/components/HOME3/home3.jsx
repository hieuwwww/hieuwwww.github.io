import "./home3.css";
export default function Home3({ src }) {
  return (
    // <div className="parent-container">
    <div className="container-home3">
      <div className="home3-item">
        <img src={src} alt="" />
        <div className="math">
          <a href="">
            Toán học lớp 1<i className="fa-solid fa-angles-right"></i>
          </a>
        </div>
      </div>
    </div>
    // </div>
  );
}
