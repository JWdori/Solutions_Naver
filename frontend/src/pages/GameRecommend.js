import React from "react";
import Header from "../elements/Header";
import ProgressRec from "../elements/Progress_rec";
import type1 from "../images/gamerec_1.png"
import good from "../images/good_red.png"
import bad from "../images/bad_blue.png"
import kakao from "../images/kakao.png";
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import link from "../images/link.png";
import shareIcon from "../images/shareicon.png";
import reset from "../images/reset.png";
import Score from "../elements/Score";
import ScorePage from "../elements/ScorePage";

const GameRecommend = (props) => {
    const [isShowAll, setShowPopup] = React.useState(false);
    const [step, setStep] = React.useState(0);

    const handleShowAllBtn = () => {
        setShowPopup(true);
    };

    return (
        <>

            <Header isBack={false}/>
            <ProgressRec width={"300px"} step={step}/>

            <div className={"recGame"}>
                <img
                    className="recGameImg"
                    src={type1}
                    alt="img"
                    width={"320px"}
                    height={"165px"}
                ></img>
                <div className={"recGameDesc"}>
                    - 한국밈 피하기 -
                </div>
                <span className={"recGameDesc2"}>
                        정신없이 나오는 패턴을 피해서 최고점수에 도달하라!
                </span>

                <div className={"recinfo"}>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;3.9 ★&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span className={"divideLine"}></span>
                    <span>1000만회 이상</span>
                    <span className={"divideLine"}></span>
                    <span>전체 이용가</span>
                </div>

                <div className={"recinfo"} style={{marginBottom:"-12px"}}>
                    <button id={"recGenreButton"}>아케이드</button>
                    <button id={"recGenreButton"}>싱글 플레이어</button>
                    <button id={"recGenreButton"}>액션</button>
                </div>
                <div className={"recinfo"} style={{marginBottom:"20px"}}>
                    <button id={"recGenreButton"}>플랫폼 게임</button>
                    <button id={"recGenreButton"}>오프라인</button>
                    <button id={"recGenreButton"}>추상</button>
                </div>

                <a className={"playstore"}
                   href="https://play.google.com/store/apps/details?id=com.REDNOSE.AvoidKmeme&hl=ko&gl=US">플레이스토어에서 확인하기</a>

                <div className={"rating"}>

                    <button id={"goodButton"}>만족</button>
                    <span style={{marginBottom:"4px"}}>게임 평가</span>
                    <button id={"badButton"}>관심없음</button>
                </div>



                <div className={"rating2"}>
                    <img
                        className="recGameImg"
                        src={good}
                        alt="img"
                        width={"18px"}
                        height={"20px"}
                    ></img>
                    <span>게임 평가</span>
                    <img
                        className="recGameImg"
                        src={bad}
                        alt="img"
                        width={"18px"}
                        height={"20px"}
                    ></img>
                </div>

                <button id={"already"} onClick={handleShowAllBtn}>이미 해본 게임이라면?</button>

                <div className={"shareText"} style={{marginTop:"40px"}}>
                    게임 공유하기
                    <img
                        className="shareTextIcon"
                        src={shareIcon}
                        alt="shareIcon"
                        width="18px"
                        height="18px"
                    />
                </div>
                <div id="shareContainer">
                    <img
                        className="shareIcon"
                        src={kakao}
                        alt="kakaotalk"
                        width="36px"
                        height="36px"
                        // onClick={kakaoShare}
                    />

                    <img
                        className="shareIcon"
                        src={facebook}
                        alt="facebook"
                        width="36px"
                        height="36px"
                        // onClick={facebookShare}
                    ></img>

                    <img
                        className="shareIcon"
                        src={twitter}
                        alt="twitter"
                        width="36px"
                        height="36px"
                        // onClick={twitterShare}
                    ></img>
                    <input type="hidden" id="urlInput" className="url-input"/>

                    <img
                        className="shareIcon"
                        src={link}
                        alt="link"
                        width="36px"
                        height="36px"
                        onClick={() => {
                            // copy(handleToast);
                        }}
                    ></img>
                </div>
                <button id = "recNextButton">
                    다음 게임
                </button>

                </div>
            <button id = "resetButton">
                초기화 하기
                <img
                    className="shareIcon"
                    style={{paddingTop:"4px"}}
                    src={reset}
                    alt="link"
                    width="24px"
                    height="24px"
                    onClick={() => {
                        // copy(handleToast);
                    }}
                ></img>
            </button>
            {isShowAll && <ScorePage setShowPopup={setShowPopup} />}
        </>
    );
};

export default GameRecommend;
