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
                 style={{marginTop:"56px", marginLeft:"8px", marginRight:"8px"}}
                 onClick={moveToPrevSlide}></img>
            <Wrapper>
                <SlideWrapper ref={slideRef}>
                    <div>
                        <a href={props.link1} target="_blank" >
                            <img className="ranking__slide__game" src={props.img1} alt="img"/>
                        </a>
                        <div className="rankingName" style={{marginRight:"6px",marginLeft:"6px", width:"76px"}} >{props.name1}</div>
                        <div className={"rankingScore"} style={{marginRight:"12px",marginLeft:"12px"}}>
                            <img
                                className="rankingDdabong"
                                src={good}
                                alt="img"
                                width={"12px"}
                                height={"12px"}
                            ></img>
                            {props.score1}
                        </div>
                    </div>
                    <div>
                        <a href={props.link2} target="_blank" >
                            <img className="ranking__slide__game" src={props.img2} alt="img"/>
                        </a>
                        <div className="rankingName" style={{marginRight:"12px",marginLeft:"12px", width:"70px"}} >{props.name2}</div>
                        <div className={"rankingScore"} style={{marginRight:"12px",marginLeft:"12px"}}>
                            <img
                                className="rankingDdabong"
                                src={good}
                                alt="img"
                                width={"12px"}
                                height={"12px"}
                            ></img>
                            {props.score2}
                        </div>
                    </div>
                    <div>
                        <a href={props.link3} target="_blank" >
                            <img className="ranking__slide__game" src={props.img3} alt="img"/>
                        </a>
                        <div className="rankingName" style={{marginRight:"12px",marginLeft:"12px", width:"70px"}} >{props.name3}</div>
                        <div className={"rankingScore"} style={{marginRight:"12px",marginLeft:"12px"}}>
                            <img
                                className="rankingDdabong"
                                src={good}
                                alt="img"
                                width={"12px"}
                                height={"12px"}
                            ></img>
                            {props.score3}
                        </div>
                    </div>
                    <div>
                        <a href={props.link4} target="_blank" >
                            <img className="ranking__slide__game" src={props.img4} alt="img"/>
                        </a>
                        <div className="rankingName" style={{marginRight:"12px",marginLeft:"12px", width:"70px"}} >{props.name4}</div>
                        <div className={"rankingScore"} style={{marginRight:"12px",marginLeft:"12px"}}>
                            <img
                                className="rankingDdabong"
                                src={good}
                                alt="img"
                                width={"12px"}
                                height={"12px"}
                            ></img>
                            {props.score4}
                        </div>
                    </div>
                    <div>
                        <a href={props.link5} target="_blank" >
                            <img className="ranking__slide__game" src={props.img5} alt="img"/>
                        </a>
                        <div className="rankingName" style={{marginRight:"12px",marginLeft:"12px", width:"70px"}} >{props.name5}</div>
                        <div className={"rankingScore"} style={{marginRight:"12px",marginLeft:"12px"}}>
                            <img
                                className="rankingDdabong"
                                src={good}
                                alt="img"
                                width={"12px"}
                                height={"12px"}
                            ></img>
                            {props.score5}
                        </div>
                    </div>
                    <div>
                        <a href={props.link6} target="_blank" >
                            <img className="ranking__slide__game" src={props.img6} alt="img"/>
                        </a>
                        <div className="rankingName" style={{marginRight:"12px",marginLeft:"12px", width:"70px"}} >{props.name6}</div>
                        <div className={"rankingScore"} style={{marginRight:"12px",marginLeft:"12px"}}>
                            <img
                                className="rankingDdabong"
                                src={good}
                                alt="img"
                                width={"12px"}
                                height={"12px"}
                            ></img>
                            {props.score6}
                        </div>
                    </div>
                    <div>
                        <a href={props.link7} target="_blank" >
                            <img className="ranking__slide__game" src={props.img7} alt="img"/>
                        </a>
                        <div className="rankingName" style={{marginRight:"12px",marginLeft:"12px", width:"70px"}} >{props.name7}</div>
                        <div className={"rankingScore"} style={{marginRight:"12px",marginLeft:"12px"}}>
                            <img
                                className="rankingDdabong"
                                src={good}
                                alt="img"
                                width={"12px"}
                                height={"12px"}
                            ></img>
                            {props.score7}
                        </div>
                    </div>
                    <div>
                        <a href={props.link8} target="_blank" >
                            <img className="ranking__slide__game" src={props.img8} alt="img"/>
                        </a>
                        <div className="rankingName" style={{marginRight:"12px",marginLeft:"12px", width:"70px"}} >{props.name8}</div>
                        <div className={"rankingScore"} style={{marginRight:"12px",marginLeft:"12px"}}>
                            <img
                                className="rankingDdabong"
                                src={good}
                                alt="img"
                                width={"12px"}
                                height={"12px"}
                            ></img>
                            {props.score8}
                        </div>
                    </div>
                    <div>
                        <a href={props.link9} target="_blank" >
                            <img className="ranking__slide__game" src={props.img9} alt="img"/>
                        </a>
                        <div className="rankingName" style={{marginRight:"12px",marginLeft:"12px", width:"70px"}} >{props.name9}</div>
                        <div className={"rankingScore"} style={{marginRight:"12px",marginLeft:"12px"}}>
                            <img
                                className="rankingDdabong"
                                src={good}
                                alt="img"
                                width={"12px"}
                                height={"12px"}
                            ></img>
                            {props.score9}
                        </div>
                    </div>
                    <div>
                        <a href={props.link10} target="_blank" >
                            <img className="ranking__slide__game" src={props.img10} alt="img"/>
                        </a>
                        <div className="rankingName" style={{marginRight:"12px",marginLeft:"12px", width:"70px"}} >{props.name10}</div>
                        <div className={"rankingScore"} style={{marginRight:"12px",marginLeft:"12px"}}>
                            <img
                                className="rankingDdabong"
                                src={good}
                                alt="img"
                                width={"12px"}
                                height={"12px"}
                            ></img>
                            {props.score10}
                        </div>
                    </div>
                </SlideWrapper>
            </Wrapper>
            <img src={right}
                 width="8px"
                 height="18px"
                 style={{marginTop:"56px", marginLeft:"8px", marginRight:"8px"}}
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