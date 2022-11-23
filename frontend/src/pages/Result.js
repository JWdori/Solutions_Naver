import React from "react";
import {useNavigate} from "react-router-dom";
import Header from "../elements/Header";
import Resultmodal from "../elements/Resultmodal";
import gameIcon from "../images/game_2.png";
import shareIcon from "../images/shareicon2.png";
import kakao from "../images/kakao.png";
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import link from "../images/link.png";
import goldCrown from "../images/crown1.png"
import sliverCrown from "../images/crown2.png"
import copperCrown from "../images/crown3.png"
import Serviceintroduce from "../elements/ServiceIntroduce";
import box from "../images/box.png";
import reset from "../images/reset.png"
import check from "../images/check.png"
import {TentuPlay} from "@tentuplay/js-client-sdk";
import ScrollRestoration from "../elements/ScrollRestoration";
import {kakaoShare_test, facebookShare_test, twitterShare_test} from "../elements/Share_test";
import axios from "axios";


const Result = (props) => {
    const showData = JSON.parse(sessionStorage.getItem("data"));
    console.log(showData);
    const navigate = useNavigate();
    const [showPopup, setShowPopup] = React.useState(false);
    const [type, setType] = React.useState(null);
    const [ToastStatus, setToastStatus] = React.useState(false);
    const ToastMsg = "클립보드에 URL이 복사되었습니다.";
    const handleToast = () => {
        if (!ToastStatus) {
            setToastStatus(true);
        }
    };
    const copyToClipboard = (val) => {
        const t = document.createElement("textarea");
        document.body.appendChild(t);
        t.value = val;
        t.select();
        document.execCommand("copy");
        document.body.removeChild(t);
    };

    const copy = (func) => {
        copyToClipboard("http://118.67.143.133/");
        func("complete");
    };


    const getRateGame = async () => {
        await axios.get("http://118.67.143.133/api/view/getRateGameByType", {})
            .then((res) => {
                //이게 유형별 10개 인기게임
                setType(res);
                console.log(res)
            })
            .catch((error) => {
                console.dir(error);
            });
    }




    React.useEffect(()=> {
        getRateGame();

    }, []);




    const handleShowPopup = () => {
        setShowPopup(true);
    };
    const onRankingClick = (props) => {
        navigate("/gameranking");
    };
    const onResetClick = () => {
        navigate("/");
    };
    const onGameClick = () => {
        navigate("/recommend");
        myLogin();
    };
    const tp = new TentuPlay({
        clientKey: "dxpG5HbqaYC44eqVnneh",
    });
    function myLogin() {
        tp.onInit(() => {
            tp.sendLogin({
                playerUUID: showData.user.user_id
            });
            tp.sendPurchase({
                playerUUID: showData.user.user_id, //받아온 아이디
                characterUUID: "TentuPlayKeyword._DUMMY_CHARACTER_ID_",
                purchassableSlug: showData.user.type_id,
                purchaseQuantity: 1,
                purchaseUnitPrice: 1,
                purchaseTotalPrice: 1,
                purchaseCurrencyCode: "USD",
                isAdRemove: false
            });
        })
    }
    let a;
    for(let i=0;i<=9;i++) {
        // eslint-disable-next-line no-unused-expressions
        if (type?.data[i].type === showData.user.type_id){
            a = i
            break;
        }
    }


    return (
        <>
            <ScrollRestoration></ScrollRestoration>
            <Header isBack={false}/>
            <span className={"mainTitle"} style={{marginTop:"60px"}}>
                게임 회사가 보는<br></br>나의 게임 유형은?
                <img
                    className="questionTxtImage"
                    src={box}
                    alt="img"
                    width="191px"
                    height="17px"
                ></img>
            </span>
            <div className="resultType">
                {showData.firstResult.type_name}
            </div>

            <img
                id=""
                src={showData.firstResult.type_img}
                alt="img"
                width={"254px"}
                height={"254px"}
            ></img>

            <span className={"resultSub"}>{showData.firstResult.type_desc}</span>

            <span  className={"checktitle"} style={{marginBottom:"8px"}}>게임사의 맞춤 전략
                                <img
                                    className="questionTxtImage"
                                    src={box}
                                    style={{marginTop:"4px", marginLeft:"41px"}}
                                    alt="img"
                                    width="84px"
                                    height="11px"
                                ></img>
                        <img
                            className="questionTxtImage"
                            src={check}
                            style={{paddingRight:"200px", paddingBottom:"10px"}}
                            alt="img"
                            width="82px"
                            height="65px"
                        ></img>
            </span>
            <span className={"checkSub"}>{showData.firstResult.type_sub_desc}</span>


            <span  className={"similarGameRanking"} style={{marginBottom:"20px"}}>나의 다른 유형들
                            <img
                                className="questionTxtImage"
                                src={box}
                                style={{marginTop:"5px", marginLeft:"44px"}}
                                alt="img"
                                width="60px"
                                height="11px"
                            ></img>
            </span>

            <div className="typeExample">
                <div className="TypeSub">
                <img
                    className="typesubimg"
                    src={showData.secondResult.type_img}
                    alt="img"
                    style={{marginRight:"24px"}}
                >
                </img>
                    {
                        showData.secondResult.type_name === "후회하는 오프트래너" || showData.secondResult.type_name === "기대치 높은 무과금러"
                        ? <div className={"typedecs"}
                        style={{marginLeft: "-18px"}}>{showData.secondResult.type_name}</div>
                        :<div className={"typedecs"}
                             style={{marginRight: "30px"}}>{showData.secondResult.type_name}</div>
                    }
                    </div>

                    <div className="TypeSub">
                        <img
                            className="typesubimg"
                            src={showData.thirdResult.type_img}
                            alt="img"
                            style={{marginLeft:"24px"}}
                        ></img>
                        {
                            showData.thirdResult.type_name === "후회하는 오프트래너" || showData.thirdResult.type_name === "기대치 높은 무과금러"
                                ? <div className={"typedecs"}
                                       style={{marginLeft: "18px"}}>{showData.thirdResult.type_name}</div>
                                : <div className={"typedecs"}
                                       style={{marginLeft: "30px"}}>{showData.thirdResult.type_name}</div>
                        }
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
                <span>  검사 결과를 기반으로 게임이 추천됩니다.   </span>
                <img
                    className="homeGameIcon2"
                    src={gameIcon}
                    alt="img"
                    width="24px"
                    height="24px"
                ></img>
            </div>

            <button id="resultGameBtn" onClick={onGameClick}>
                나에게 맞는 게임 추천받기
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
                    width="32px"
                    height="32px"
                    onClick={kakaoShare_test}
                />
                <img
                    className="shareIcon"
                    src={facebook}
                    alt="facebook"
                    width="32px"
                    height="32px"
                    onClick={facebookShare_test}
                ></img>
                <img
                    className="shareIcon"
                    src={twitter}
                    alt="twitter"
                    width="32px"
                    height="32px"
                    onClick={twitterShare_test}
                ></img>
                <input type="hidden" id="urlInput" className="url-input"/>

                <img
                    className="shareIcon"
                    src={link}
                    alt="link"
                    width="32px"
                    height="32px"
                    onClick={() => {
                        copy(handleToast);
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
            <span  className={"similarGameRanking"}>{showData.firstResult.type_name} 유형의<br></br> 인기 게임</span><br/>
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
                    <a href={type?.data[a].app[1].url}  target="_blank" rel="noopener noreferrer">
                    <img
                        className="gameRanking"
                        src={type?.data[a].app[1].icon}
                        alt="ranking1"
                        width="80px"
                        height="80px"
                    ></img>
                    </a>
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
                    <a href={type?.data[a].app[0].url}   target="_blank"  target="_blank" rel="noopener noreferrer">
                    <img
                        className="gameRanking"
                        src={type?.data[a].app[0].icon}
                        alt="ranking1"
                        width="104px"
                        height="104px"
                    ></img>
                    </a>
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
                        <a href={type?.data[a].app[2].url}   target="_blank"  target="_blank" rel="noopener noreferrer">
                    <img
                        className="gameRanking"
                        src={type?.data[a].app[2].icon}
                        alt="ranking3"
                        width="80px"
                        height="80px"
                    ></img>
                            </a>
                </div>
            </div>

            <button id="allTypeBtn" style={{marginTop:"16px"}} onClick={onRankingClick}>
                모든 인기 게임 확인하기
            </button>
            <button id="allTypeBtn" style={{marginBottom:"90px"}} onClick={handleShowPopup}>
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
