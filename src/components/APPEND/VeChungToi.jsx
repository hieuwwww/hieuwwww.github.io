import { useState } from 'react';
import './GioiThieu.css'
import { noidungGioiThieu } from './data_gioithieu';
export default function VeChungToi() {
    const [append, setAppend] = useState(true)
    function disappend() {
        const myDiv = document.getElementById('aboutus');

        window.history.go(-1)
    }
    function isAppend(event) {
        event.stopPropagation();
        setAppend(!append)
    }
    const bground = {
        cursor: 'auto',
        backgroundImage: 'url("/pics/vechungtoi.jpg")',
    }
    return (
        <div className="container_gioithieu" id="aboutus" onClick={disappend} style={{ cursor: 'pointer' }}>
            {append && <div className="inside_gioithieu" onClick={(event) => event.stopPropagation()} style={bground} >
                <h1>Về chúng tôi <i className="fa-solid fa-circle-xmark" style={{ float: 'right', marginTop: "100px", color: 'red', cursor: 'pointer' }} onClick={disappend}></i></h1>

                <ul>
                    <li>Tại Math, chúng tôi cam kết mang đến cho trẻ em một trải nghiệm học toán thú vị và hiệu quả. Với các bài học tương tác, trò chơi giáo dục và video hướng dẫn sinh động, chúng tôi giúp trẻ em từ mầm non đến lớp 6 phát triển kỹ năng toán học một cách toàn diện.</li>
                    <li>Giao diện Thân Thiện: Được thiết kế đặc biệt cho trẻ nhỏ, giao diện dễ sử dụng và hấp dẫn.</li>
                    <li>Nội Dung Đa Dạng: Từ các bài học cơ bản đến nâng cao, phù hợp với từng độ tuổi và trình độ.</li>
                    <li>Học Mà Chơi: Kết hợp học tập và giải trí qua các trò chơi toán học, giúp trẻ em hứng thú và yêu thích môn toán.</li>
                </ul>
            </div>}

        </div>
    );
}