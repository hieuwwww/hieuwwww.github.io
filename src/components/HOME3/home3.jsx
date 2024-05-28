import "./home3.css";
export default function Home3({ src }) {
  const toleft = { left: '0' }
  return (
    <div className="container_home3">
      <h1 style={{ color: '#ffffff', marginBottom: '50px' }}>Học tập đa dạng - hiệu quả</h1>
      <div className="container_home3_it itemUp">
        <div className="item_home3 it1" >
          <img src={src} alt="" />
          <a href="" >
            Toán lớp 1
            <i className="fa-solid fa-angles-right"></i>
          </a>
        </div>
        <div className="item_home3 it2">
          <img src={src} alt="" />
          <a href="" >
            Toán lớp 1
            <i className="fa-solid fa-angles-right"></i>
          </a>
        </div>
        <div className="item_home3 it3">
          <img src={src} alt="" />
          <a href="" > Toán lớp 1
            <i className="fa-solid fa-angles-right"></i>
          </a>
        </div>
      </div>
      <div className="container_home3_it itemDown">
        <div className="item_home3 it4">
          <img src={src} alt="" />
          <a href="" > Toán lớp 1
            <i className="fa-solid fa-angles-right"></i>
          </a>
        </div>
        <div className="item_home3 it51">
          <img src={src} alt="" />
          <a href="" > Toán lớp 1
            <i className="fa-solid fa-angles-right"></i>
          </a>
        </div>
        <div className="item_home3 it6">
          <img src={src} alt="" />
          <a href="" > Toán lớp 1
            <i className="fa-solid fa-angles-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
