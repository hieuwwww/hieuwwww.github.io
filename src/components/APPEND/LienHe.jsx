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
        backgroundImage: 'url("/pics/leinhe.jpg")',
    }
    return (
        <div className="container_gioithieu" id="aboutus" onClick={disappend} style={{ cursor: 'pointer' }}>
            {append && <div className="inside_gioithieu" onClick={(event) => event.stopPropagation()} style={bground} >
                <h1 style={{ marginTop: '105px' }}>Liên hệ <i className="fa-solid fa-circle-xmark" style={{ float: 'right', marginTop: "30px", color: 'red', cursor: 'pointer', }} onClick={disappend}></i></h1>

                <ul style={{ marginTop: '0' }}>
                    <li><a href="https://www.facebook.com/fptu.LearnSmart/?notif_id=1716888677262261&notif_t=follower_invite_accept&ref=notif" target='_blank' style={{ color: 'black', textDecorationLine: 'underline' }}>https://www.facebook.com/fptu.LearnSmart/?notif_id=1716888677262261&notif_t=follower_invite_accept&ref=notif</a></li>
                    <li><a href="https://www.facebook.com/fptu.LearnSmart/?notif_id=1716888677262261&notif_t=follower_invite_accept&ref=notif" target='_blank' style={{ color: 'black', textDecorationLine: 'underline' }}>https://www.facebook.com/fptu.LearnSmart/?notif_id=1716888677262261&notif_t=follower_invite_accept&ref=notif</a></li>
                    <li><a href="https://www.facebook.com/fptu.LearnSmart/?notif_id=1716888677262261&notif_t=follower_invite_accept&ref=notif" target='_blank' style={{ color: 'black', textDecorationLine: 'underline' }}>https://www.facebook.com/fptu.LearnSmart/?notif_id=1716888677262261&notif_t=follower_invite_accept&ref=notif</a></li>
                    <li><a href="https://www.facebook.com/fptu.LearnSmart/?notif_id=1716888677262261&notif_t=follower_invite_accept&ref=notif" target='_blank' style={{ color: 'black', textDecorationLine: 'underline' }}>https://www.facebook.com/fptu.LearnSmart/?notif_id=1716888677262261&notif_t=follower_invite_accept&ref=notif</a></li>
                </ul>
            </div>}

        </div>
    );
}