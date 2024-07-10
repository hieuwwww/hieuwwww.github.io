import "./home3.css";
import { Link } from 'react-router-dom';
export default function Home3({ src }) {
  const toleft = { left: '0' }

  return (
    <div className="container_home3">
      <h1 style={{ color: '#ffffff', marginBottom: '50px', fontFamily: 'sans-serif' }}>Học tập đa dạng - hiệu quả</h1>
      <div className="container_home3_it itemUp">
        <div className="item_home3 it1" >
          <img src="/pics/bialop1anh.png" alt="troll" />
          <Link to="/toan1" >
            Toán lớp 1
            <i className="fa-solid fa-angles-right"></i>
          </Link>
        </div>
        <div className="item_home3 it2">
          <img src="/pics/nentoan2.png" alt="" />
          <Link to="/toan2" >
            Toán lớp 2
            <i className="fa-solid fa-angles-right"></i>
          </Link>
        </div>
        <div className="item_home3 it3">
          <img src="/pics/nentoan3.png" alt="" />
          <Link to="/toan3" > Toán lớp 3
            <i className="fa-solid fa-angles-right"></i>
          </Link>
        </div>
      </div>
      <div className="container_home3_it itemDown">
        <div className="item_home3 it4">
          <img src="/pics/nentoan4.png" alt="" />
          <Link to="/toan4" > Toán lớp 4
            <i className="fa-solid fa-angles-right"></i>
          </Link>
        </div>
        <div className="item_home3 it51">
          <img src="/pics/nentoan5.png" alt="" />
          <Link to="/toan5" > Toán lớp 5
            <i className="fa-solid fa-angles-right"></i>
          </Link>
        </div>
        <div className="item_home3 it6">
          <img src="/pics/6.jpg" alt="" style={{ minHeight: '210px' }} />
          <Link to="/dethi" > Đề thi
            <i className="fa-solid fa-angles-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
