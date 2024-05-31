import { useState, useEffect } from 'react';
import './DivSlider.css'

export default function DivSlider() {
    const imageArray = [
        "/pics/slide1.jpg",
        "/pics/slide2.jpg",
        "/pics/slide3.jpg",
        "/pics/slide4.jpg",
    ]
    const [currentImageIndex, setCurrentImageIndex] = useState(1);
    useEffect(() => {
        showImage(currentImageIndex);
    }, [currentImageIndex]);
    // let currentImageIndex = 0;
    const images = document.querySelectorAll('.container_divslider img');
    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.remove('active_slide');
            if (i === index) {
                img.classList.add('active_slide');
            }
        });
    }
    function prevImage() {
        setCurrentImageIndex(currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1);
    }

    function nextImage() {
        setCurrentImageIndex(currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1);
    }

    return (
        <div className='container_divslider'>
            <p className='arrowslide backslide' onClick={prevImage}><i className="fa-solid fa-chevron-right fa-flip-horizontal"></i></p>
            {/* <img src="/pics/slide1.jpg" alt="a1" className='active_slide' />
            <img src="/pics/slide2.jpg" alt="a2" />
            <img src="/pics/slide3.jpg" alt="a3" />
            <img src="/pics/nentoanlop1.jpg" alt="a4" />
            <img src="/pics/meo.jpg" alt="a5" />
            <img src="/pics/vechungtoi.jpg" alt="a6" /> */}
            {imageArray.map((srcpic, ipic) => (
                <img key={ipic} src={srcpic} alt={`slide ${ipic + 1}`} className={ipic === 1 ? 'active_slide' : ''} />
            ))}
            <p className='arrowslide nextslide' onClick={nextImage}><i className="fa-solid fa-chevron-right"></i></p>
        </div>
    );
}