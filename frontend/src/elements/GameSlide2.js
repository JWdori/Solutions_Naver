import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import React from "react";

import Slick from 'react-slick';
import styled from 'styled-components';




    const GameSlide2 = (props) => {
        const settings = {
            infinite: true, //무한 슬라이더로 할지
            fade:true,
            autoplay: true, //자동 재생 할 것인지
            autoplaySpeed: 4000,
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
            <div style={{width:"212px", height:"112px" , marginLeft:"-40px"}}>
                <Slider {...settings}>
                    <img className="slide__game_type" src={props.gameimgRER} alt="img"/>
                    <img className="slide__game_type" src={props.gameimgFAS} alt="img"/>
                    <img className="slide__game_type" src={props.gameimgCOL} alt="img"/>
                    <img className="slide__game_type" src={props.gameimgGRO} alt="img"/>
                    <img className="slide__game_type" src={props.gameimgWHA} alt="img"/>
                    <img className="slide__game_type" src={props.gameimgNOM} alt="img"/>
                    <img className="slide__game_type" src={props.gameimgFOL} alt="img"/>
                    <img className="slide__game_type" src={props.gameimgFAM} alt="img"/>
                    <img className="slide__game_type" src={props.gameimgUND} alt="img"/>
                    <img className="slide__game_type" src={props.gameimgPVP} alt="img"/>
                </Slider>
            </div>
        );
    }
    export default GameSlide2;
