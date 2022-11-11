import React from "react";
import Header from "../elements/Headerrec"
import ProgressRec from "../elements/Progress_rec";
import type1 from "../images/gamerec_1.png"
import good from "../images/good_gray.png"
import bad from "../images/bad_gray.png"
import kakao from "../images/kakao.png";
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import link from "../images/link.png";
import shareIcon from "../images/shareicon2.png";
import reset from "../images/reset2.png";
import Score from "../elements/Score";
import ScorePage from "../elements/ScorePage";
import Progress from "../elements/Progress_test";
import quotes1 from "../images/chat_1_gray.png"
import quotes2 from "../images/chat_2_gray.png"

const GameRecommend = (props) => {
    const [isShowAll, setShowPopup] = React.useState(false);
    const [step, setStep] = React.useState(0);
    const [num, setComplete] = React.useState(0);
    const handleShowAllBtn = (props) => {
        setShowPopup(true);
    };

    const complete = (num) => {
        setComplete(num);
    }

    return (
        <>
            <Header isBack={true} step={step} setStep={setStep}/>
            <ProgressRec width={329} percent={0.2}/>
            <span className={"recTitle"}>추천 게임은</span>
            <div className={"recName"}>&nbsp;&nbsp;&nbsp;한국밈 피하기&nbsp;&nbsp;&nbsp;</div>
            <img
                className=""
                style={{marginRight:"300px", marginBottom:"-10px"}}
                src={quotes1}
                alt="img"
                width={"25px"}
                height={"22px"}
            ></img>
            <span className={"recdesc"} style={{textOverflow:"ellipsis"}}>asddddd</span>
            <img
                className=""
                style={{marginLeft:"300px",marginTop:"-10px",marginBottom:"24px"}}
                src={quotes2}
                alt="img"
                width={"25px"}
                height={"22px"}
            ></img>
            <div className={"recGameAll"}>
                <div className={"recGame"}>
                    <img
                        className="recGameImg"
                        src={type1}
                        alt="img"
                        width={"254px"}
                        height={"138px"}
                    ></img>

                    <div className={"recinfo"}>
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;3.9 ★&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span className={"divideLine"}></span>
                        <span>1000만회 이상</span>
                        <span className={"divideLine"}></span>
                        <span>전체 이용가</span>
                    </div>


                    <div className={"rectag"} style={{marginBottom: "6px"}}>
                        <button id={"recGenreButton"}>아케이드</button>
                        <button id={"recGenreButton"}>싱글 플레이어</button>
                        <button id={"recGenreButton"} style={{marginRight:"0px"}}>액션</button>
                    </div>
                    <div className={"rectag"} style={{marginBottom: "18px"}}>
                        <button id={"recGenreButton"}>플랫폼 게임</button>
                        <button id={"recGenreButton"}>오프라인</button>
                        <button id={"recGenreButton"} style={{marginRight:"0px"}}>추상</button>
                    </div>

                    <a className={"playstore"}
                       href="https://play.google.com/store/apps/details?id=com.REDNOSE.AvoidKmeme&hl=ko&gl=US" target="_blank">플레이스토어에서
                        확인하기</a>

                    <div className={"rating"}>
                        <div>
                            <button id={"goodButton"} style={{marginLeft:"20px"}}>만족</button>
                            <img
                                className=""
                                src={good}
                                style={{marginTop:"8px", marginLeft:"16px"}}
                                alt="img"
                                width={"18px"}
                                height={"20px"}
                            ></img>
                        </div>
                        <span style={{marginBottom: "24px"}}>게임 평가</span>
                        <div>
                            <button id={"badButton"} style={{marginRight:"20px"}}>관심없음</button>
                            <img
                                className=""
                                src={bad}
                                style={{marginTop:"8px", marginRight:"16px"}}
                                alt="img"
                                width={"18px"}
                                height={"20px"}
                            ></img>
                        </div>

                    </div>

                    {
                        num == 0
                            ?
                            <span id={"already"} onClick={handleShowAllBtn} style={{color: "#ffbd8d"}}>이미 해본 게임이라면?</span>
                            : <span id={"already"} onClick={handleShowAllBtn}
                                    style={{color: "#ff6900"}}>이미 해본 게임이라면?</span>
                    }


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
                    <button id="recNextButton">
                        다음 게임
                    </button>

                </div>
                <span className="resetButton">
                초기화 하기
                <img
                    className="shareIcon"
                    style={{marginLeft:"4px"}}
                    src={reset}
                    alt="link"
                    width="14px"
                    height="17px"
                    onClick={() => {
                        // copy(handleToast);
                    }}
                ></img>
            </span>
                {isShowAll && <ScorePage setShowPopup={setShowPopup} complete={complete} num={num}/>}
            </div>
        </>
    );
};

export default GameRecommend;
