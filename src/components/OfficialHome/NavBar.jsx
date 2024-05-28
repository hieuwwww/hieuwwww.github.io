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
                <li style={{ marginTop: '0px' }}>    <a href="">Toán lớp 1</a></li>
                <li>    <a href="">Toán lớp 2</a></li>
                <li>    <a href="">Toán lớp 3</a></li>
                <li>    <a href="">Toán lớp 4</a></li>
                <li>    <a href="">Toán lớp 5</a></li>
                <li>    <a href="">Đề thi toán tổng hợp</a></li>
            </ul>
        </div>
    );
}