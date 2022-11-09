import React from "react";
import {useNavigate} from "react-router-dom";
import Header from "../elements/Header";

import Resultmodal from "../elements/Resultmodal";
import type1 from "../images/test/type1.png"
import type2 from "../images/test/type2.png"
import type3 from "../images/test/type3.png"
import gameIcon from "../images/game_2.png";
import shareIcon from "../images/shareicon2.png";
import kakao from "../images/kakao.png";
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import link from "../images/link.png";
import goldCrown from "../images/crown1.png"
import sliverCrown from "../images/crown2.png"
import copperCrown from "../images/crown3.png"
import r1 from "../images/ranking1.png"
import r2 from "../images/ranking2.png"
import r3 from "../images/ranking3.png"
import Serviceintroduce from "../elements/ServiceIntroduce";
import box from "../images/box.png";
import reset from "../images/reset.png"

const Result = (props) => {
    const navigate = useNavigate();
    const [showPopup, setShowPopup] = React.useState(false);

    const handleShowPopup = () => {
        setShowPopup(true);
    };

    const onGameClick = () => {
        navigate("/recommend");
    };
    return (
        <>
            <Header isBack={false}/>
            <span className={"mainTitle"} style={{marginTop:"60px"}}>
                게임 회사가 보는<br></br>나의 게임 성향은?
                <img
                    className="questionTxtImage"
                    src={box}
                    alt="img"
                    width="191px"
                    height="17px"
                ></img>
            </span>
            <div className="resultBox">

            </div>
            <img
                id=""
                src={type1}
                alt="img"
                width={"254px"}
                height={"254px"}
            ></img>


            <div className="typeExample">
                <div className="TypeSub">
                <img
                    className="typesubimg"
                    src={type2}
                    alt="img"
                    style={{marginRight:"24px"}}
                >
                </img>
                    <div className={"typedecs"} style={{marginLeft:"6px"}}>공략 따라쟁이
                    </div>

                    </div>

                    <div className="TypeSub">
                        <img
                            className="typesubimg"
                            src={type3}
                            alt="img"
                            style={{marginLeft:"24px"}}
                        ></img>
                            <div className={"typedecs"} style={{marginLeft:"30px"}}>익숙함 선호</div>
                    </div>
            </div>


            <div className="gameIntro2" style={{marginTop:"40px"}}>
                <img
                    className="homeGameIcon1"
                    src={gameIcon}
                    alt="img"
                    width="24px"
                    height="24px"
                ></img>
                <span>  겸사 결과를 기반으로 게임이 추천됩니다.   </span>
                <img
                    className="homeGameIcon2"
                    src={gameIcon}
                    alt="img"
                    width="24px"
                    height="24px"
                ></img>
            </div>

            <button id="resultGameBtn" onClick={onGameClick}>
                나에게 맞는 게임 확인하기
            </button>
            <div className={"shareText2"}>
                <img
                    className="shareTextIcon"
                    src={shareIcon}
                    alt="shareIcon"
                    style={{marginRight:"4px"}}
                    width="10px"
                    height="11px"
                />
                테스트 공유하기
            </div>
            <div id="shareContainer">
                <img
                    className="shareIcon"
                    src={kakao}
                    alt="kakaotalk"
                    width="40px"
                    height="40px"
                    // onClick={kakaoShare}
                />

                <img
                    className="shareIcon"
                    src={facebook}
                    alt="facebook"
                    width="40px"
                    height="40px"
                    // onClick={facebookShare}
                ></img>

                <img
                    className="shareIcon"
                    src={twitter}
                    alt="twitter"
                    width="40px"
                    height="40px"
                    // onClick={twitterShare}
                ></img>
                <input type="hidden" id="urlInput" className="url-input"/>

                <img
                    className="shareIcon"
                    src={link}
                    alt="link"
                    width="40px"
                    height="40px"
                    onClick={() => {
                        // copy(handleToast);
                    }}
                ></img>
            </div>
            <button id="regameBtn" onClick={onGameClick}>
                &nbsp;&nbsp;다시하기
                <img
                className="resetresult"
                src={reset}
                alt="link"
                width="26px"
                height="26px"
            ></img>
            </button>
            <span  className={"similarGameRanking"}>동일 유형 인기 게임</span><br/>
            <div className={"similarGame"}>
                <div className={"gameRating"}>
                    <img
                        className="crown"
                        src={sliverCrown}
                        alt="sliverCrown"
                        width="47px"
                        height="42.28px"
                        style={{

                        }}
                    ></img>
                    <img
                        className="gameRanking"
                        src={r1}
                        alt="ranking1"
                        width="80px"
                        height="80px"
                    ></img>
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
                    <img
                        className="gameRanking"
                        src={r2}
                        alt="ranking1"
                        width="104px"
                        height="104px"
                    ></img>
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
                    <img
                        className="gameRanking"
                        src={r3}
                        alt="ranking3"
                        width="80px"
                        height="80px"
                    ></img>
                </div>
            </div>

            <button id="allTypeBtn">
                모든 인기 게임 확인하기
            </button>
            <button id="allTypeBtn" style={{marginBottom:"100px"}}>
                모든 유형 확인하기
            </button>

            <Serviceintroduce></Serviceintroduce>

            {/*<div className={"gameIntro"}>*/}
            {/*    결과화면*/}
            {/*    <button id="resultAll" onClick={handleShowPopup}>*/}
            {/*        모달 팝업*/}
            {/*    </button>*/}
            {/*</div>*/}
            {/*{showPopup&& <GameRecommend setShowPopup={setShowPopup}/>}*/}

            {showPopup && <Resultmodal setShowPopup={setShowPopup}/>}

        </>
    );
};

export default Result;
