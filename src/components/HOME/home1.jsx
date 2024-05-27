
function Home1() {
    const colorText = {
        color: 'red'
    }
    return (
        <div className="container_home1">
            <h1 style={{ color: '#0a174f', fontFamily: 'Tahoma', fontSize: '50px' }}>Nền tảng học tập</h1>
            <h1 style={{ color: '#03AED2' }}>Lí thuyết & Bài tập toán online</h1>
            <p style={{ color: 'black', fontSize: '24px' }}>Học tập đa dạng không - phải trả tiền</p>
            <span className="item_home1" style={{ marginTop: '20px', }}><a href="" style={{ padding: '15px 30px', borderRadius: '35px', fontSize: '25px', background: 'linear-gradient(48deg,#03AED2,rgb(167, 197, 252))' }}>Bắt đầu học ngay</a></span>
        </div>
    );
}
export default Home1