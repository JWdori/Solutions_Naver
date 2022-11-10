import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import React from "react";
import type1 from "../../images/test/type1.png";
import type2 from "../../images/test/type2.png";
import type3 from "../../images/test/type3.png";
import type4 from "../../images/test/type4.png";
import type5 from "../../images/test/type5.png";
import type6 from "../../images/test/type6.png";
import type7 from "../../images/test/type7.png";
import type8 from "../../images/test/type8.png";
import type9 from "../../images/test/type9.png";
import type10 from "../../images/test/type10.png";
import styled from "styled-components";
/* import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; */
import  Next from "../../images/right.png";
import Prev from "../../images/left.png";


    const GameSlide1 = () => {
        const Div = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  left: 163px;
  z-index: 99;
  text-align: right;
  line-height: 30px;
`;
        const DivPre = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  left: 16px;
  z-index: 99;
  text-align: left;
  line-height: 30px;
`;

        const settings = {
            infinite: false, //무한 슬라이더로 할지
            fade:true,
            autoplay: false, //자동 재생 할 것인지
            slidesToShow:5,
            slidesToScroll:1,
            centerMode: true,
            draggable:false,
            padding:"20px",
            variableWidth:false,
            nextArrow: (
                <Div>
                    <img src={Next}
                    width="8px"
                    height="18px"/>
                </Div>
            ),
            prevArrow: (
                <DivPre>
                    <img src={Prev}
                         width="8px"
                         height="18px"/>
                </DivPre>
            ),
            dots:false,
            pauseOnHover:false
        };


        return (
            <div style={{width:"500px", height:"120px", marginTop:"10px", display:"flex", marginLeft:"-40px"}}>
                <Slider {...settings}>
                    <div>
                        <a href={"https://www.google.com/search?q=css+%EB%A7%81%ED%81%AC+%EC%83%88%EC%B0%BD&oq=css+%EB%A7%81%ED%81%AC+%EC%83%88%EC%B0%BD&aqs=chrome..69i57.2542j0j4&sourceid=chrome&ie=UTF-8"} target="_blank" >
                        <img className="ranking__slide__game" src={type6} alt="img"/>
                        </a>
                        <span className={"rankingslidetext"}>12312321</span>
                    </div>
                    <div>
                        <a href={"https://www.google.com/search?q=css+%EB%A7%81%ED%81%AC+%EC%83%88%EC%B0%BD&oq=css+%EB%A7%81%ED%81%AC+%EC%83%88%EC%B0%BD&aqs=chrome..69i57.2542j0j4&sourceid=chrome&ie=UTF-8"} target="_blank" >
                        <img className="ranking__slide__game" src={type6} alt="img"/>
                        </a>
                        <span className={"rankingslidetext"}>여기에 ui 추가 예정</span>
                    </div>
                    <div>
                        <a href={"https://www.google.com/search?q=css+%EB%A7%81%ED%81%AC+%EC%83%88%EC%B0%BD&oq=css+%EB%A7%81%ED%81%AC+%EC%83%88%EC%B0%BD&aqs=chrome..69i57.2542j0j4&sourceid=chrome&ie=UTF-8"} target="_blank" >
                            <img className="ranking__slide__game" src={type6} alt="img"/>
                        </a>
                        <span className={"rankingslidetext"}>여기에 ui 추가 예정</span>
                    </div>
                    <div>
                        <a href={"https://www.google.com/search?q=css+%EB%A7%81%ED%81%AC+%EC%83%88%EC%B0%BD&oq=css+%EB%A7%81%ED%81%AC+%EC%83%88%EC%B0%BD&aqs=chrome..69i57.2542j0j4&sourceid=chrome&ie=UTF-8"} target="_blank" >
                            <img className="ranking__slide__game" src={type6} alt="img"/>
                        </a>
                        <span className={"rankingslidetext"}>여기에 ui 추가 예정</span>
                    </div>
                </Slider>
            </div>
        );
    }
    export default GameSlide1;
