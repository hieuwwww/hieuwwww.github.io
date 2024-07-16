import { useState } from 'react';
import './GioiThieu.css'
import { noidungGioiThieu } from './data_gioithieu';
export default function LienHe() {
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
        backgroundImage: 'url("/pics/lienhee.jpg")',
    }
    return (
        <div className="container_gioithieu" id="aboutus" onClick={disappend} style={{ cursor: 'pointer' }}>
            {append && <div className="inside_gioithieu" onClick={(event) => event.stopPropagation()} style={bground} >
                <h1 style={{ marginTop: '-2%' }}><i className="fa-solid fa-circle-xmark" style={{ float: 'right', marginTop: "30px", color: 'red', cursor: 'pointer', }} onClick={disappend}></i></h1>

                <ul style={{ marginTop: '0' }} className='ulLienhe'>
                    <li><a href="https://www.facebook.com/profile.php?id=100046299095446" target='_blank' style={{ color: 'black', textDecorationLine: 'none' }}><div className='lienhepic1'><p style={{ marginLeft: '120%', textWrap: 'nowrap' }}>Anh Vũ Văn Chủ chuyên giải toán lớp 3,4,5</p></div></a></li>
                    <li><a href="https://www.facebook.com/profile.php?id=100086394559118" target='_blank' style={{ color: 'black', }}><div className='lienhepic2'><p style={{ marginLeft: '120%', textWrap: 'nowrap' }}>Anh Nguyễn Đình Nam chuyên giải toán lớp 1,2</p></div></a></li>
                    <li><a href="https://www.facebook.com/hoangdt04" target='_blank' style={{ color: 'black', }}><div className='lienhepic3'><p style={{ marginLeft: '120%', textWrap: 'nowrap' }}>Anh Mai Văn Hoàng chuyên giải đề toán tổng hợp</p></div></a></li>
                </ul>
            </div>}

        </div>
    );
}