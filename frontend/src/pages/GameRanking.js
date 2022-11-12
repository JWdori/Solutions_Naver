import React from "react";
import {useNavigate} from "react-router-dom";

import Header from "../elements/Header";
import sliverCrown from "../images/crown2.png";
import r1 from "../images/ranking1.png";
import goldCrown from "../images/crown1.png";
import r2 from "../images/ranking2.png";
import copperCrown from "../images/crown3.png";
import r3 from "../images/ranking3.png";
import Slider from "../elements/Slider";
import good from "../images/good_gray.png";


const gameranking = (props) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [step, setStep] = React.useState(0);
    return (
        <>
            <Header isBack={true} step={step} setStep={setStep}/>
            <div className={"similarGame"} style={{marginTop:"28px"}}>
                <div className={"gameRating"}>
                    <img
                        className="crown"
                        src={sliverCrown}
                        alt="sliverCrown"
                        width="47px"
                        height="42.28px"
                    ></img>
                    <a href={"https://play.google.com/store/apps/details?id=com.mojang.minecraftpe"} target="_blank">
                    <img
                        className="gameRanking"
                        src={r1}
                        alt="ranking1"
                        width="80px"
                        height="80px"
                        style={{cursor:"pointer"
                        }}
                    ></img>
                        </a>

                    <div className="rankingName" style={{fontSize:"12px", marginTop:"8px", marginBottom:"2px"}}>ㅁㄴㅇ</div>
                    <div className={"rankingScore"} style={{fontSize:"12px"}}>
                            <img
                                className="rankingDdabong"
                                src={good}
                                style={{marginBottom:"2px",marginRight:"4px"}}
                                alt="img"
                                width={"18px"}
                                height={"18px"}
                            ></img>
                        123
                    </div>
                </div>



                <div className={"gameRating"}>

                    <img
                        className="crown"
                        src={goldCrown}
                        alt="sliverCrown"
                        width="47px"
                        height="42.28px"
                        style={{
                        }}
                    ></img>
                    <a href={"https://play.google.com/store/apps/details?id=com.hidea.cat"} target="_blank">
                    <img
                        className="gameRanking"
                        src={r2}
                        alt="ranking1"
                        width="104px"
                        height="104px"
                        style={{cursor:"pointer"
                        }}
                    ></img>
                    </a>

                    <div className="rankingName" style={{fontSize:"12px", marginTop:"8px", marginBottom:"2px", marginLeft:"14px"}}>이놈이 문제야</div>
                    <div className={"rankingScore"} style={{fontSize:"12px"}}>
                        <img
                            className="rankingDdabong"
                            src={good}
                            style={{marginBottom:"2px",marginRight:"4px"}}
                            alt="img"
                            width={"18px"}
                            height={"18px"}
                        ></img>
                        123
                    </div>
                </div>
                <div className={"gameRating"}>
                    <img
                        className="crown"
                        src={copperCrown}
                        alt="sliverCrown"
                        width="47px"
                        height="42.28px"
                        style={{
                        }}
                    ></img>
                    <a href={"https://play.google.com/store/apps/details?id=com.stove.epic7.google"} target="_blank">
                    <img
                        className="gameRanking"
                        src={r3}
                        alt="ranking3"
                        width="80px"
                        height="80px"
                        style={{cursor:"pointer"
                        }}
                    ></img>
                        </a>
                    <div className="rankingName" style={{fontSize:"12px", marginTop:"8px", marginBottom:"2px"}}>ㄴㅁㅇ</div>
                    <div className={"rankingScore"} style={{fontSize:"12px"}}>
                        <img
                            className="rankingDdabong"
                            src={good}
                            style={{marginBottom:"2px",marginRight:"4px"}}
                            alt="img"
                            width={"18px"}
                            height={"18px"}
                        ></img>
                        123
                    </div>
                </div>

            </div>

            <div className={"type1"}>
                <div className={"rankingtypedecs"}>후회하는 오프트래너</div>
                <div className={"rankingslidebox"}>
                    <Slider>
                    </Slider>
                </div>
            </div>

            <div className={"type2"}>
                <div className={"rankingtypedecs"}>기대치 높은 무과금</div>
                <div className={"rankingslidebox"}>
                    <Slider>
                    </Slider>
                </div>
            </div>

            <div className={"type3"}>
                <div className={"rankingtypedecs"}>폭풍성장</div>
                <div className={"rankingslidebox"}>
                    <Slider>
                    </Slider>
                </div>
            </div>

            <div className={"type4"}>
                <div className={"rankingtypedecs"}>패션 아이템 선호</div>
                <div className={"rankingslidebox"}>
                    <Slider>
                    </Slider>
                </div>
            </div>

            <div className={"type5"}>
                <div className={"rankingtypedecs"}>고래</div>
                <div className={"rankingslidebox"}>
                    <Slider>
                    </Slider>
                </div>
            </div>

            <div className={"type6"}>
                <div className={"rankingtypedecs"}>공략 따라쟁이</div>
                <div className={"rankingslidebox"}>
                    <Slider>
                    </Slider>
                </div>
            </div>

            <div className={"type7"}>
                <div className={"rankingtypedecs"}>언더독 키우기</div>
                <div className={"rankingslidebox"}>
                    <Slider>
                    </Slider>
                </div>
            </div>

            <div className={"type8"}>
                <div className={"rankingtypedecs"}>익숙함 선호</div>
                <div className={"rankingslidebox"}>
                    <Slider>
                    </Slider>
                </div>
            </div>

            <div className={"type9"}>
                <div className={"rankingtypedecs"}>수집가</div>
                <div className={"rankingslidebox"}>
                    <Slider>
                    </Slider>
                </div>
            </div>

            <div className={"type10"} style={{marginBottom:"60px"}}>
                <div className={"rankingtypedecs"}>처음부터 PvP</div>
                <div className={"rankingslidebox"}>
                    <Slider>
                    </Slider>
                </div>
            </div>

        </>
    );
};

export default gameranking;
