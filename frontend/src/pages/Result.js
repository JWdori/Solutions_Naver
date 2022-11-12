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
import check from "../images/check.png"
import {TentuPlay} from "@tentuplay/js-client-sdk";



const Result = (props) => {
    const showData = JSON.parse(sessionStorage.getItem("data"));
    console.log(showData);
    const navigate = useNavigate();
    const [showPopup, setShowPopup] = React.useState(false);
    const handleShowPopup = () => {
        setShowPopup(true);
    };

    const onResetClick = () => {
        navigate("/");
    };
    const onGameClick = () => {
        navigate("/recommend");
    };
    const tp = new TentuPlay({
        clientKey: "b64DGZZd38ZKHomhQFQE",
    });

    function myLogin() {
        tp.onInit(() => {
            tp.sendLogin({
                playerUUID: "9BEIN2XUEN2P7ZW"
            });
            tp.sendPurchase({
                playerUUID: "9BEIN2XUEN2P7ZW", //받아온 아이디
                characterUUID: "TentuPlayKeyword._DUMMY_CHARACTER_ID_",
                purchassableSlug: "WHA",
                purchaseQuantity: 1,
                purchaseUnitPrice: 1,
                purchaseTotalPrice: 1,
                purchaseCurrencyCode: "KRW",
                isAdRemove: false
            });
        })
    }
    myLogin();
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
            <div className="resultType">
                후회하는 오프트래너
            </div>
            <img
                id=""
                src={type1}
                alt="img"
                width={"254px"}
                height={"254px"}
            ></img>

            <span className={"resultSub"}>게임을 할 시간이 충분하지 않아 짧은 시간 동안 플레이를
하지만 <br></br> 재화를 효율적으로 사용하여 매우 빠른 속도로 성장하는 유저</span>

            <span  className={"checktitle"} style={{marginBottom:"8px"}}>게임사의 맞춤 전략
                        <img
                            className="questionTxtImage"
                            src={check}
                            style={{paddingRight:"180px", paddingBottom:"10px"}}
                            alt="img"
                            width="82px"
                            height="65px"
                        ></img>
            </span>
            <span className={"checkSub"}>빠른 성장을 할 수 있는 재화의 지속적인 공급</span>


            <span  className={"similarGameRanking"} style={{marginBottom:"20px"}}>나의 다른 성향들
                            <img
                                className="questionTxtImage"
                                src={box}
                                style={{marginTop:"4px", marginLeft:"34px"}}
                                alt="img"
                                width="40px"
                                height="11px"
                            ></img>
            </span>

            <div className="typeExample">
                <div className="TypeSub">
                <img
                    className="typesubimg"
                    src={type2}
                    alt="img"
                    style={{marginRight:"24px"}}
                >
                </img>
                    <div className={"typedecs"} style={{marginLeft:"6px"}}>후회하는 오프트래너
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
                    width="24px"
                    height="24px"
                    // onClick={kakaoShare}
                />
                <img
                    className="shareIcon"
                    src={facebook}
                    alt="facebook"
                    width="24px"
                    height="24px"
                    // onClick={facebookShare}
                ></img>
                <img
                    className="shareIcon"
                    src={twitter}
                    alt="twitter"
                    width="24px"
                    height="24px"
                    // onClick={twitterShare}
                ></img>
                <input type="hidden" id="urlInput" className="url-input"/>

                <img
                    className="shareIcon"
                    src={link}
                    alt="link"
                    width="24px"
                    height="24px"
                    onClick={() => {
                        // copy(handleToast);
                    }}
                ></img>
            </div>
            <button id="regameBtn" onClick={onResetClick}>
                다시하기
                <img
                className="resetresult"
                src={reset}
                alt="link"
                width="26px"
                height="26px"
            ></img>
            </button>
            <span  className={"similarGameRanking"}>동일 성향 인기 게임</span><br/>
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

            <button id="allTypeBtn" style={{marginTop:"16px"}}>
                모든 인기 게임 확인하기
            </button>
            <button id="allTypeBtn" style={{marginBottom:"90px"}} onClick={handleShowPopup}>
                모든 성향 확인하기
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
