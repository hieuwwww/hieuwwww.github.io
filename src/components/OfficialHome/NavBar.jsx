import { Link } from 'react-router-dom';
import './NavBar.css'

export default function NavBarOfficial() {
    const c1 = {
        color: "#fff",
        border: "2px",
        fontSize: "30px",
        marginLeft: "100px",
    };
    const c2 = {
        color: "#FEEFAD",
    };
    const c3 = {
        color: "rgb(3, 255, 7)",
    };
    const c4 = {
        color: "#FEEFAD",
    };
    const hoverBox = {
        backGroundColor: "red",
        borderRadius: "10px",
    };
    const handleNoiDung = {

    }
    return (
        <div className='container__navbar__official'>
            <h3 style={{ color: '#0a174f', fontFamily: 'Tahoma' }} id='noidung'>Nội dung</h3>
            <ul className="navbar_ul_official">
                <li style={{ marginTop: '0px' }}><Link to={"/toan1"}>Toán lớp 1</Link></li>
                <li>    <Link to={"/toan2"}>Toán lớp 2</Link></li>
                <li>    <Link to={"/toan3"}>Toán lớp 3</Link></li>
                <li>    <Link to={"/toan4"}>Toán lớp 4</Link></li>
                <li>    <Link to={"/toan5"}>Toán lớp 5</Link></li>
                <li>    <Link to={"/dethi"}>Đề thi toán tổng hợp</Link></li>
            </ul>
        </div>
    );
}