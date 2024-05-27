

const NavBar = () => {
    const c1 = {
        color: '#fff',
        border: '2px',
        fontSize: '30px',
        marginLeft: '100px'
    };
    const c2 = {
        color: '#FEEFAD'
    }
    const c3 = {
        color: "rgb(3, 255, 7)"
    }
    const c4 = {
        color: '#FEEFAD'
    }
    const hoverBox = {
        backGroundColor: 'red',
        borderRadius: '10px'
    }
    return (
        <div className="container_math">
            <i className="fa-solid fa-m fa-bounce" style={c1}></i>
            <i class="fa-solid fa-a" style={c2}></i>
            <i class="fa-solid fa-t" style={c4}></i>
            <i class="fa-solid fa-square-h fa-beat" style={c3} ></i>
            <span className="container_li">
                <ul>
                    <li><a href="">Giới thiệu</a></li>
                    <li><a href="">Liên hệ</a></li>
                    <li><a href="">Về chúng tôi</a></li>
                    <li><a href="">Mạng xã hội</a></li>
                    <span className="dnhap_dki"><li><a href="">Đăng kí</a></li>
                        <li><a href="">Đăng nhập</a></li></span>
                </ul>
            </span>
        </div >
    );
}
export default NavBar