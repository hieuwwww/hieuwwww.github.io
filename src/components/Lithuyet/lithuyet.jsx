import './lithuyet.css'
import React, { useEffect } from 'react';
import { dataLiThuyet1 } from './lithuyet_data';

export default function Lithuyet(props) {
    useEffect(() => {
        const handleScroll = () => {
            var div = document.getElementById('container_video_lithuyet');
            if (div) {
                var scrollY = window.scrollY || window.pageYOffset;

                if (scrollY > 30) { // Điều kiện khi cuộn hơn 200px
                    div.classList.add('shrink');
                } else {
                    div.classList.remove('shrink');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Dọn dẹp sự kiện cuộn khi component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className='container_lithuyet' >
            <div id='container_video_lithuyet' >
                <iframe className="videoYT" width="100%" height="100%" src={props.src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
            <div id='noidungLithuyet' className="container_noidung_lithuyet">
                <ul>
                    {dataLiThuyet1.map(e => {
                        return (
                            <>
                                <h2 key={e.title.toString()}>{e.title}</h2>
                                {e.subtitle.map((temp, index) => {
                                    return (
                                        < >
                                            <h3 key={temp.toString()}>{temp}</h3>
                                            {e.noidung.map((x) => {
                                                return (

                                                    <p key={x.toString()} >{x}</p>

                                                );
                                            })}

                                            <img src={e.srcpic[index]} alt={temp} />
                                            <p style={{ color: '#488dc7', textAlign: 'center' }}>Hình ảnh minh họa</p>
                                            <div className='containerBlooket'>
                                                <a className='blooket_link' href={e.blooket[index]} target='_blank' ><img style={{ width: '100px', height: '100px' }} src={e.blooketPics[index]} alt={e.blooketPics[index]} /></a>
                                                <div className='clicktoplay'>Ấn vào để chơi</div>
                                            </div>
                                        </>

                                    );
                                })}


                                <div className='blooket'>

                                </div>
                            </>
                        );

                    })}
                </ul>
            </div>
        </div>
    );
}