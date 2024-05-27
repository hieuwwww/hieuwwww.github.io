import "./home3.css";
export default function Home3({ src }) {
  return (
    <div className="container_home3">
      <h1>add text here</h1>
      <div className="container_home3_it itemUp">
        <div className="item_home3 it1">
          <img src={src} alt="" />
          <a href="">
            toán
            <i class="fa-solid fa-angles-right"></i>
          </a>
        </div>
        <div className="item_home3 it2">
          <img src={src} alt="" />
          <a href="">
            <i></i>
          </a>
        </div>
        <div className="item_home3 it3">
          <img src={src} alt="" />
          <a href="">
            <i></i>
          </a>
        </div>
      </div>
      <div className="container_home3_it itemDown">
        <div className="item_home3 it4">
          <img src={src} alt="" />
          <a href="">
            <i></i>
          </a>
        </div>
        <div className="item_home3 it51">
          <img src={src} alt="" />
          <a href="">
            <i></i>
          </a>
        </div>
        <div className="item_home3 it6">
          <img src={src} alt="" />
          <a href="">
            <i></i>
          </a>
        </div>
      </div>
    </div>
  );
}
