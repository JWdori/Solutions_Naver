import React from "react";
import left from "../images/left.png";
import popular_result from "../images/popular_result.png";
import popular_game from "../images/popular_game.png";
import right from "../images/right.png";
import styeld from "styled-components";
import { useState, useRef, useEffect } from "react";
import type6 from "../images/test/type6.png";
import good from "../images/good_gray.png";
const Slider = (props) => {
    const slideRef = useRef(null);
    const [currentImgOrder, setcCurrentImgOrder] = useState(0);
    const IMG_WIDTH = 200;
    const slideRange = currentImgOrder * IMG_WIDTH;

    useEffect(() => {
        slideRef.current.style.transition = "all 0.5s ease-in-out";
        slideRef.current.style.transform = `translateX(-${slideRange}px)`;
    }, [currentImgOrder]);

    const moveToNextSlide = () => {
        if (currentImgOrder === 4) return;
        setcCurrentImgOrder(currentImgOrder + 1);
    };

    const moveToPrevSlide = () => {
        if (currentImgOrder === 0) return;
        setcCurrentImgOrder(currentImgOrder - 1);
    };
    return (
        <>
            <img src={left}
                 width="8px"
                 height="18px"
                 style={{marginTop:"50px", marginLeft:"8px", marginRight:"0px"}}
                 onClick={moveToPrevSlide}></img>
            <Wrapper>
                <SlideWrapper ref={slideRef}>
                    <div>
                        <a href={"https://www.google.com/search?q=css+%EB%A7%81%ED%81%AC+%EC%83%88%EC%B0%BD&oq=css+%EB%A7%81%ED%81%AC+%EC%83%88%EC%B0%BD&aqs=chrome..69i57.2542j0j4&sourceid=chrome&ie=UTF-8"} target="_blank" >
                            <img className="ranking__slide__game" src={type6} alt="img"/>
                        </a>
                        <div className="rankingName" style={{marginRight:"12px",marginLeft:"12px", width:"70px"}} >에픽세븐</div>
                        <div className={"rankingScore"} style={{marginRight:"12px",marginLeft:"12px"}}>
                            <img
                                className="rankingDdabong"
                                src={good}
                                alt="img"
                                width={"12px"}
                                height={"12px"}
                            ></img>
                            2334
                        </div>
                    </div>
                    <div>
                        <a href={"https://www.google.com/search?q=css+%EB%A7%81%ED%81%AC+%EC%83%88%EC%B0%BD&oq=css+%EB%A7%81%ED%81%AC+%EC%83%88%EC%B0%BD&aqs=chrome..69i57.2542j0j4&sourceid=chrome&ie=UTF-8"} target="_blank" >
                            <img className="ranking__slide__game" src={type6} alt="img"/>
                        </a>
                        <div className="rankingName" style={{marginRight:"12px",marginLeft:"12px", width:"70px"}} >에픽세븐</div>
                        <div className={"rankingScore"} style={{marginRight:"12px",marginLeft:"12px"}}>
                            <img
                                className="rankingDdabong"
                                src={good}
                                alt="img"
                                width={"12px"}
                                height={"12px"}
                            ></img>
                            2334
                        </div>
                    </div>
                    <div>
                        <a href={"https://www.google.com/search?q=css+%EB%A7%81%ED%81%AC+%EC%83%88%EC%B0%BD&oq=css+%EB%A7%81%ED%81%AC+%EC%83%88%EC%B0%BD&aqs=chrome..69i57.2542j0j4&sourceid=chrome&ie=UTF-8"} target="_blank" >
                            <img className="ranking__slide__game" src={type6} alt="img"/>
                        </a>
                        <div className="rankingName" style={{marginRight:"12px",marginLeft:"12px", width:"70px"}} >에픽세븐</div>
                        <div className={"rankingScore"} style={{marginRight:"12px",marginLeft:"12px"}}>
                            <img
                                className="rankingDdabong"
                                src={good}
                                alt="img"
                                width={"12px"}
                                height={"12px"}
                            ></img>
                            2334
                        </div>
                    </div>
                    <div>
                        <a href={"https://www.google.com/search?q=css+%EB%A7%81%ED%81%AC+%EC%83%88%EC%B0%BD&oq=css+%EB%A7%81%ED%81%AC+%EC%83%88%EC%B0%BD&aqs=chrome..69i57.2542j0j4&sourceid=chrome&ie=UTF-8"} target="_blank" >
                            <img className="ranking__slide__game" src={type6} alt="img"/>
                        </a>
                        <div className="rankingName" style={{marginRight:"12px",marginLeft:"12px", width:"70px"}} >에픽세븐</div>
                        <div className={"rankingScore"} style={{marginRight:"12px",marginLeft:"12px"}}>
                            <img
                                className="rankingDdabong"
                                src={good}
                                alt="img"
                                width={"12px"}
                                height={"12px"}
                            ></img>
                            2334
                        </div>
                    </div>
                    <div>
                        <a href={"https://www.google.com/search?q=css+%EB%A7%81%ED%81%AC+%EC%83%88%EC%B0%BD&oq=css+%EB%A7%81%ED%81%AC+%EC%83%88%EC%B0%BD&aqs=chrome..69i57.2542j0j4&sourceid=chrome&ie=UTF-8"} target="_blank" >
                            <img className="ranking__slide__game" src={type6} alt="img"/>
                        </a>
                        <div className="rankingName" style={{marginRight:"12px",marginLeft:"12px", width:"70px"}} >에픽세븐</div>
                        <div className={"rankingScore"} style={{marginRight:"12px",marginLeft:"12px"}}>
                            <img
                                className="rankingDdabong"
                                src={good}
                                alt="img"
                                width={"12px"}
                                height={"12px"}
                            ></img>
                            2334
                        </div>
                    </div>
                    <div>
                        <a href={"https://www.google.com/search?q=css+%EB%A7%81%ED%81%AC+%EC%83%88%EC%B0%BD&oq=css+%EB%A7%81%ED%81%AC+%EC%83%88%EC%B0%BD&aqs=chrome..69i57.2542j0j4&sourceid=chrome&ie=UTF-8"} target="_blank" >
                            <img className="ranking__slide__game" src={type6} alt="img"/>
                        </a>
                        <div className="rankingName" style={{marginRight:"12px",marginLeft:"12px", width:"70px"}} >에픽세븐</div>
                        <div className={"rankingScore"} style={{marginRight:"12px",marginLeft:"12px"}}>
                            <img
                                className="rankingDdabong"
                                src={good}
                                alt="img"
                                width={"12px"}
                                height={"12px"}
                            ></img>
                            2334
                        </div>
                    </div>
                    <div>
                        <a href={"https://www.google.com/search?q=css+%EB%A7%81%ED%81%AC+%EC%83%88%EC%B0%BD&oq=css+%EB%A7%81%ED%81%AC+%EC%83%88%EC%B0%BD&aqs=chrome..69i57.2542j0j4&sourceid=chrome&ie=UTF-8"} target="_blank" >
                            <img className="ranking__slide__game" src={type6} alt="img"/>
                        </a>
                        <div className="rankingName" style={{marginRight:"12px",marginLeft:"12px", width:"70px"}} >에픽세븐</div>
                        <div className={"rankingScore"} style={{marginRight:"12px",marginLeft:"12px"}}>
                            <img
                                className="rankingDdabong"
                                src={good}
                                alt="img"
                                width={"12px"}
                                height={"12px"}
                            ></img>
                            2334
                        </div>
                    </div>
                    <div>
                        <a href={"https://www.google.com/search?q=css+%EB%A7%81%ED%81%AC+%EC%83%88%EC%B0%BD&oq=css+%EB%A7%81%ED%81%AC+%EC%83%88%EC%B0%BD&aqs=chrome..69i57.2542j0j4&sourceid=chrome&ie=UTF-8"} target="_blank" >
                            <img className="ranking__slide__game" src={type6} alt="img"/>
                        </a>
                        <div className="rankingName" style={{marginRight:"12px",marginLeft:"12px", width:"70px"}} >에픽세븐</div>
                        <div className={"rankingScore"} style={{marginRight:"12px",marginLeft:"12px"}}>
                            <img
                                className="rankingDdabong"
                                src={good}
                                alt="img"
                                width={"12px"}
                                height={"12px"}
                            ></img>
                            2334
                        </div>
                    </div>
                    <div>
                        <a href={"https://www.google.com/search?q=css+%EB%A7%81%ED%81%AC+%EC%83%88%EC%B0%BD&oq=css+%EB%A7%81%ED%81%AC+%EC%83%88%EC%B0%BD&aqs=chrome..69i57.2542j0j4&sourceid=chrome&ie=UTF-8"} target="_blank" >
                            <img className="ranking__slide__game" src={type6} alt="img"/>
                        </a>
                        <div className="rankingName" style={{marginRight:"12px",marginLeft:"12px", width:"70px"}} >에픽세븐</div>
                        <div className={"rankingScore"} style={{marginRight:"12px",marginLeft:"12px"}}>
                            <img
                                className="rankingDdabong"
                                src={good}
                                alt="img"
                                width={"12px"}
                                height={"12px"}
                            ></img>
                            2334
                        </div>
                    </div>
                    <div>
                        <a href={"https://www.google.com/search?q=css+%EB%A7%81%ED%81%AC+%EC%83%88%EC%B0%BD&oq=css+%EB%A7%81%ED%81%AC+%EC%83%88%EC%B0%BD&aqs=chrome..69i57.2542j0j4&sourceid=chrome&ie=UTF-8"} target="_blank" >
                            <img className="ranking__slide__game" src={type6} alt="img"/>
                        </a>
                        <div className="rankingName" style={{marginRight:"12px",marginLeft:"12px", width:"70px"}} >에픽세븐</div>
                        <div className={"rankingScore"} style={{marginRight:"12px",marginLeft:"12px"}}>
                            <img
                                className="rankingDdabong"
                                src={good}
                                alt="img"
                                width={"12px"}
                                height={"12px"}
                            ></img>
                            2334
                        </div>
                    </div>
                    <div>
                        <a href={"https://www.google.com/search?q=css+%EB%A7%81%ED%81%AC+%EC%83%88%EC%B0%BD&oq=css+%EB%A7%81%ED%81%AC+%EC%83%88%EC%B0%BD&aqs=chrome..69i57.2542j0j4&sourceid=chrome&ie=UTF-8"} target="_blank" >
                            <img className="ranking__slide__game" src={type6} alt="img"/>
                        </a>
                        <div className="rankingName" style={{marginRight:"12px",marginLeft:"12px", width:"70px"}} >에픽세븐</div>
                        <div className={"rankingScore"} style={{marginRight:"12px",marginLeft:"12px"}}>
                            <img
                                className="rankingDdabong"
                                src={good}
                                alt="img"
                                width={"12px"}
                                height={"12px"}
                            ></img>
                            2334
                        </div>
                    </div>
                </SlideWrapper>
            </Wrapper>
            <img src={right}
                 width="8px"
                 height="18px"
                 style={{marginTop:"50px", marginLeft:"8px", marginRight:"8px"}}
                 onClick={moveToNextSlide}></img>
        </>
    );
};

export default Slider;


const Wrapper = styeld.div`
  width: 300px;
  height: 200px;
  overflow: hidden;
`;

const SlideWrapper = styeld.div`
margin-top:10px;
  display: flex;
  width: 100%;
  height:100%;
`;

const Img = styeld.img`
  width: 80px;
  height: 200px;
`;