import NavBarOfficial from "../OfficialHome/NavBar";
import "./lithuyet.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Lithuyet({ src, data, linkpath }) {
    useEffect(() => {
        const handleScroll = () => {
            var div = document.getElementById("container_video_lithuyet");
            if (div) {
                var scrollY = window.scrollY || window.pageYOffset;

                if (scrollY > 30) {
                    // Điều kiện khi cuộn hơn 30px
                    div.classList.add("shrink");
                } else {
                    div.classList.remove("shrink");
                }
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Dọn dẹp sự kiện cuộn khi component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, []);
    const handleMouseon = () => {
        var x = document.getElementById('trollvn');
        return (
            x.style.opacity(1)
        );
    }
    var [lightbox, setLightbox] = useState(true);
    function handleOnclick() {
        setLightbox(!lightbox);
    }
    const [opacity, setOpacity] = useState('none');

    const handleClick = () => {
        setOpacity('block');
    };
    const handleClickout = () => {
        setOpacity('none');
    };
    return (
        <div className="container_lithuyet" >
            <div id="container_video_lithuyet">
                <iframe
                    className="videoYT"
                    width="100%"
                    height="100%"
                    src={src}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </div>
            <div id="noidungLithuyet" className="container_noidung_lithuyet" style={{ minWidth: '75%', maxWidth: '75%' }}>
                <ul>
                    <li>
                        <h2>{data.title}</h2>
                        {data.subtitle.map((subtitle, subIndex) => (
                            <div key={subIndex}>
                                <h3>{subtitle}</h3>
                                {subIndex < data.noidung.length && (
                                    <>

                                        {/* <p>{data.noidung[subIndex]}</p> */}

                                        {data.noidung[subIndex].map((noidungcon, indxx) => (
                                            <>

                                                <p style={{ marginLeft: '0', color: 'black', fontStyle: 'italic', fontFamily: 'Montserrat sans-serif', fontSize: '22px' }}>{noidungcon}</p>
                                                <ul style={{}}>

                                                    {data.subNoidung[subIndex][indxx].map((e) => (<li key={e} style={{ listStyleType: 'initial', fontSize: '18px', lineHeight: '30px' }}>{e}</li>))}

                                                </ul>
                                            </>

                                        ))}
                                    </>
                                )}


                                <a id="backLink" href={data.srcpic[subIndex]} target="_blank" ><img src={data.srcpic[subIndex]} alt={subtitle} /></a>






                                <p style={{ color: "#488dc7", marginLeft: '50%', marginRight: '0', maxWidth: '153px', textWrap: 'nowrap' }}>
                                    Hình ảnh minh họa
                                </p>
                                <div className="containerBlooket">
                                    <a
                                        className="blooket_link"
                                        href={data.blooket[subIndex]}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            style={{ width: "100px", height: "100px" }}
                                            src={data.blooketPics[subIndex]}
                                            alt={data.blooketPics[subIndex]}
                                        />
                                    </a>
                                    <div className="clicktoplay">Ấn vào để chơi</div>
                                </div>
                            </div>
                        ))}
                    </li>
                </ul>
                <Link key={linkpath} to={linkpath}>
                    <div className="hoanthanh" style={{ width: '25%', bottom: '0', backgroundColor: 'red', marginLeft: '43%' }}>
                        <p >Hoàn thành bài học <i className="fa-solid fa-check"></i></p>
                    </div>
                </Link>
            </div>

            <div className="trollvn" onMouseLeave={handleClickout} style={{ width: '0', backgroundColor: 'red', zIndex: '9', display: opacity }}>
                < NavBarOfficial right='0' left='auto' top='27%' marginTop='10px' />
            </div>
            <div className="linkto">
                <i onClick={handleClick} style={{ color: '#17c7ea', cursor: 'pointer' }} className="fa-solid fa-angles-left fa-beat-fade"></i>
            </div>

        </div >

    );
}
