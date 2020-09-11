import React from 'react'
import '../css/HeaderCarousel.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const HeaderCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        
      };
    return (
        <Slider {...settings} className="headerCarousel">
            <div>
                <img src="https://ae01.alicdn.com/kf/Hf96e95961d6b4a648a4ae3f969dbdc6fj.png" alt="" />
            </div>
            <div>
                <img src="https://ae01.alicdn.com/kf/Ha2de1866cf7f49bea8bc114e0f5e2c96q.png" alt="" />
            </div>
            <div>
                <img src="https://ae01.alicdn.com/kf/Hc609366eb95e4e818b8653ebe9e76256e.png" alt="" />
            </div>
            <div>
                <img src="https://ae01.alicdn.com/kf/H9f1831b130634e9ebf1ed18ff6bbce26L.png" alt='' />
            </div>
            <div>
                <img src="https://ae01.alicdn.com/kf/H90bcf0eb833540348ef75f246181a479S.png" alt='' />
            </div>
            <div>
                <img src="https://ae01.alicdn.com/kf/H48ce49f2c4c142eb80b17521bd001ae1N.png" alt="" />
            </div>
      </Slider>
    )
}

export default HeaderCarousel
