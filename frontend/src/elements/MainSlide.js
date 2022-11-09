import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import React from "react";
import type1 from "../images/test/type1.png";
import type2 from "../images/test/type2.png";
import type3 from "../images/test/type3.png";
import type4 from "../images/test/type4.png";
import type5 from "../images/test/type5.png";
import type6 from "../images/test/type6.png";
import type7 from "../images/test/type7.png";
import type8 from "../images/test/type8.png";
import type9 from "../images/test/type9.png";
import type10 from "../images/test/type10.png";
import Slick from 'react-slick';
import styled from 'styled-components';




    const MainSlide = () => {
        const settings = {
            infinite: true, //무한 슬라이더로 할지
            fade:true,
            autoplay: true, //자동 재생 할 것인지
            autoplaySpeed: 5000,
            slidesToShow:1,
            slidesToScroll:1,
            centerMode: true,
            draggable:false,
            padding:"0px",
            variableWidth:false,
            arrows:false,
            dots:false,
            pauseOnHover:false

        };

        return (
            <div style={{width:"353px", height:"253px"}}>
                <Slider {...settings}>
                    <img className="slide__image" src={type1} alt="img"/>
                    <img className="slide__image" src={type2} alt="img"/>
                    <img className="slide__image" src={type3} alt="img"/>
                    <img className="slide__image" src={type4} alt="img"/>
                    <img className="slide__image" src={type5} alt="img"/>
                    <img className="slide__image" src={type6} alt="img"/>
                    <img className="slide__image" src={type7} alt="img"/>
                    <img className="slide__image" src={type8} alt="img"/>
                    <img className="slide__image" src={type9} alt="img"/>
                    <img className="slide__image" src={type10} alt="img"/>
                </Slider>
            </div>
        );
    }
    export default MainSlide;





