import React from "react";
import {useNavigate} from "react-router-dom";
import Header from "../elements/Header";
import Recommend from "../elements/Recommend";
import Recommendnext from "../elements/Recommendnext";
import Resultmodal from "../elements/Resultmodal";


import graph1 from "../images/graph1.png"
import graph2 from "../images/graph2.png"
import graph3 from "../images/graph3.png"
import graph4 from "../images/graph4.png"
import gameIcon from "../images/gameIcon.png";
import shareIcon from "../images/shareicon.png";
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
import chat1 from "../images/chat_1_gray.png"
import chat2 from "../images/chat_2_gray.png"
import Ad_game from "../elements/Ad_game";
import Serviceintroduce from "../elements/ServiceIntroduce";


const Result = (props) => {
    const navigate = useNavigate();
    const [showPopup, setShowPopup] = React.useState(false);
    const handleShowPopup = () => {
        setShowPopup(true);
    };

    const onGameClick = () => {

    };
    return (
        <>
            <Header isBack={true}/>
            <div className="resultBox">


            </div>
            <div className={"resultText1"}>
                용사는 압도적인 무력으로<br/>
                사악한 용을 물리치고<br/>
                왕국에 평화를 가져왔습니다.
            </div>
            <img
                style={{marginTop:"10px"}}
                id=""
                src={chat1}
                alt="img"
                width={"25px"}
                height={"16px"}
            ></img>
            <img
                style={{marginTop:"10px"}}
                id=""
                src={chat2}
                alt="img"
                width={"25px"}
                height={"16px"}
            ></img>


            <div className={"resultImg2"}>
                두번째 img 규격만 잡아 놓을게용
            </div>
            <div className={"resultImg3"}>
                세번째 img 규격만 잡아 놓을게용
            </div>
            <div className={"resultBar"}>
                <div className="resultBox">
                    <div style={{marginTop:"10px",marginRight:"10px"}}>개인 &nbsp;</div>
                    <img
                        style={{marginTop:"10px"}}
                        id=""
                        src={graph1}
                        alt="img"
                        width={"185px"}
                        height={"30px"}
                    ></img>
                    <div style={{marginTop:"10px",marginLeft:"10px"}}>&nbsp; 협동</div><br/>
                </div>
                <div className="resultBox">
                    <div style={{marginTop:"10px",marginRight:"10px"}}>모험 &nbsp;</div>
                    <img
                        id=""
                        src={graph2}
                        alt="img"
                        width={"185px"}
                        height={"30px"}
                        style={{marginTop: "10px"}}
                    ></img>
                    <div style={{marginTop:"10px",marginLeft:"10px"}}>&nbsp; 공략</div><br/>
                </div>
                <div className="resultBox">
                    <div style={{marginTop:"10px",marginRight:"10px"}}>감각 &nbsp;</div>
                    <img
                        id=""
                        src={graph3}
                        alt="img"
                        width={"185px"}
                        height={"30px"}
                        style={{marginTop: "10px"}}
                    ></img>
                    <div style={{marginTop:"10px",marginLeft:"10px"}}>&nbsp; 직관</div><br/>
                </div>
                <div className="resultBox">
                    <div style={{marginTop:"10px",marginRight:"10px"}}>완성 &nbsp;</div>
                    <img
                        id=""
                        src={graph4}
                        alt="img"
                        width={"185px"}
                        height={"30px"}
                        style={{marginTop: "10px"}}
                    ></img>
                    <div style={{marginTop:"10px",marginLeft:"10px"}}>&nbsp; 재미</div><br/>
                </div>
            </div>

            <div className="gameIntro" style={{marginTop:"40px"}}>
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
            <div className={"shareText"}>
                결과 공유하기
                <img
                    className="shareTextIcon"
                    src={shareIcon}
                    alt="shareIcon"
                    width="20px"
                    height="20px"
                />
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
                다시하기
            </button>

            <div className={"similarGame"}>
                <span>동일 유형 인기 게임</span><br/>
                <div className={"gameRating"}>
                    <img
                        className="crown"
                        src={sliverCrown}
                        alt="sliverCrown"
                        width="80px"
                        height="35px"
                        style={{
                            marginLeft:"-20px",
                            marginRight:"20px",
                            marginBottom:"-25px"
                        }}
                    ></img>
                    <img
                        className="crown"
                        src={goldCrown}
                        alt="goldCrown"
                        width="85px"
                        height="40px"
                        style={{
                            marginBottom:"-5px"
                        }}
                    ></img>
                    <img
                        className="crown"
                        src={copperCrown}
                        alt="copperCrown"
                        width="80px"
                        height="35px"
                        style={{
                            marginLeft:"20px",
                            marginRight:"-20px",
                            marginBottom:"-25px"
                        }}
                    ></img><br/>
                    <img
                        className="gameRanking"
                        src={r1}
                        alt="ranking1"
                        width="80px"
                        height="80px"
                    ></img>
                    <img
                        className="gameRanking"
                        src={r2}
                        alt="ranking2"
                        width="100px"
                        height="100px"
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

            <button id="allGameBtn">
                모든 인기 게임 확인하기
            </button>
            <button id="allTypeBtn">
                모든 유형 확인하기
            </button>


            <Ad_game/>

            <Serviceintroduce></Serviceintroduce>

            {/*<div className={"gameIntro"}>*/}
            {/*    결과화면*/}
            {/*    <button id="resultAll" onClick={handleShowPopup}>*/}
            {/*        모달 팝업*/}
            {/*    </button>*/}
            {/*</div>*/}
            {/*{showPopup&& <Recommend setShowPopup={setShowPopup}/>}*/}

            {showPopup && <Resultmodal setShowPopup={setShowPopup}/>}

        </>
    );
};

export default Result;
