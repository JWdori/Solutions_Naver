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
import {useNavigate} from "react-router-dom";
import Resultmodal from "../elements/Resultmodal";
import Recommendnext from "../elements/Recommendnext";
import axios from "axios";
import back from "../images/back.png";
import Headerrec from "../elements/Headerrec";
import ScrollRestoration from "../elements/ScrollRestoration";

const GameRecommend = (props) => {
    const navigate = useNavigate();
    const [isShowAll, setShowPopup] = React.useState(false);
    const [isNextShowAll, setShowNextPopup] = React.useState(false);
    const [step, setStep] = React.useState(0);
    const [value, setValue] = React.useState(0);
    const [page, setPage] = React.useState(0);
    const [data, setData] = React.useState(null);
    const [num, setComplete] = React.useState(0);

    const showData = JSON.parse(sessionStorage.getItem("data"));
    const userId = showData.user.user_id;

    const getData = async () => {
        if (step === 0)
        {
            const btn = document.getElementsByClassName("next")[0];
            btn.disabled = true;
        }
        await axios.get("http://localhost:5000/api/recommend/getGameList", {
            params: {
                user_id: userId,
                page: page,
                size: 5
            }
        })
            .then((res) => {
                setData(res);
            })
            .catch((error) => {
                console.dir(error);
            });
    }

    const sendData = (input) => {
        const appid = data.data.gameList[step].appId;
        console.log(appid);
        axios.post("http://localhost:5000/api/recommend/postGameRate", {
            userId: userId,
            appId: appid,
            gameScore: input
        })
            .then((res) => {
                console.log(res);
            })
            .catch((error) => {
                console.dir(error);
            });
    }

    React.useEffect(() => {
        getData().then(r => console.log(r));
    }, [])

    const handleShowAllBtn = (props) => {
        setShowPopup(true);
        //setValue는 나중에...
    };
    const resetbtn = (props) => {
        setStep(0)
    };
    const handleShowNextBtn = (props) => {
        setShowNextPopup(true);
    };
    const btngood = () => {
        setValue(1)
        const btn = document.getElementsByClassName("next")[0];
        btn.disabled = false;
        btn.setAttribute("id", "recNextButton")
    };
    const btnbad = () => {
        setValue(-1)
        const btn = document.getElementsByClassName("next")[0];
        btn.disabled = false;
        btn.setAttribute("id", "recNextButton")
    };
    const complete = (num) => {
        setComplete(num);
    }

    const onClickNext = () => {
        if (step === 5) {
            //여기 코드 확인점. 테스트용으로만 해놔서
            // 5번 끝나면 팝업이 뜨고, 팝업에서 다음으로 넘어가게 해야되는데...
            setComplete(0)
            setShowNextPopup(true);
            setStep(0);
            getData();
            //재완씨 여기 두개 가져가서 element가서 해,,,
        } else {
            setComplete(0)
            setShowPopup(false);
            //이 순간에서 step 증가하기전에 디비에다가 계속 쌓아줘야함
            //axios 코드 짜기
            if (value !== 0) {
                sendData(value)
            } else {

            }

            setStep(step + 1);
            setPage(page + 1);
            const btn = document.getElementsByClassName("next")[0];
            btn.disabled = true;
            btn.setAttribute("id", "recNextDisabledButton")
            setValue(0);
        }
    }


    return (
        <>
            <Headerrec isBack={true} step={step} setStep={setStep}>
            </Headerrec>
            <ProgressRec
                width={329}
                percent={step / 5}
            />
            <ScrollRestoration></ScrollRestoration>



            <span className={"recTitle"}>추천 게임은</span>

            <div className={"recName"}>{data?.data.gameList[step].title}</div>
            <img
                className=""
                style={{marginRight: "300px", marginBottom: "-10px"}}
                src={quotes1}
                alt="img"
                width={"25px"}
                height={"22px"}
            ></img>
            <span className={"recdesc"} style={{textOverflow: "ellipsis"}}>{data?.data.gameList[step].summary}</span>
            <img
                className=""
                style={{marginLeft: "300px", marginTop: "-10px", marginBottom: "24px"}}
                src={quotes2}
                alt="img"
                width={"25px"}
                height={"22px"}
            ></img>
            <div className={"recGameAll"}>

                <div className={"recGame"}>

                    <img
                        className="recGameImg"
                        src={data?.data.gameList[step].headerImage}
                        alt="img"
                        width={"254px"}
                        height={"138px"}
                    ></img>

                    <div className={"recinfo"}>
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;{data?.data.gameList[step].scoreText} ★&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span className={"divideLine"}></span>
                        <span>{data?.data.gameList[step].installs}</span>
                        <span className={"divideLine"}></span>
                        <span>{data?.data.gameList[step].contentRating}</span>
                    </div>


                    <div className={"rectag"} style={{marginBottom: "6px"}}>
                        <button id={"recGenreButton"}>아케이드</button>
                        <button id={"recGenreButton"}>싱글 플레이어</button>
                        <button id={"recGenreButton"} style={{marginRight: "0px"}}>액션</button>
                    </div>
                    <div className={"rectag"} style={{marginBottom: "18px"}}>
                        <button id={"recGenreButton"}>플랫폼 게임</button>
                        <button id={"recGenreButton"}>오프라인</button>
                        <button id={"recGenreButton"} style={{marginRight: "0px"}}>추상</button>
                    </div>

                    <a className={"playstore"}
                       href={data?.data.gameList[step].url}
                       target="_blank">플레이스토어에서
                        확인하기</a>

                    <div className={"rating"}>
                        <div>
                            <button id={"goodButton"} style={{marginLeft:"20px"}} onClick={btngood}>만족</button>

                            <img
                                className=""
                                src={good}
                                style={{marginTop: "8px", marginLeft: "16px"}}
                                alt="img"
                                width={"18px"}
                                height={"20px"}
                            ></img>
                        </div>
                        <span style={{marginBottom: "24px"}}>게임 평가</span>
                        <div>
                            <button id={"badButton"} style={{marginRight: "20px"}} onClick={btnbad}>관심없음</button>
                            <img
                                className=""
                                src={bad}
                                style={{marginTop: "8px", marginRight: "16px"}}
                                alt="img"
                                width={"18px"}
                                height={"20px"}
                            ></img>
                        </div>

                    </div>

                    {
                        num == 0
                            ?
                            <span id={"already"} onClick={handleShowAllBtn}
                                  style={{color: "gray"}}>이미 해본 게임이라면?</span>
                            : <span id={"already"} onClick={handleShowAllBtn}
                                    style={{color: "#ff6900"}}>이미 해본 게임이라면?</span>
                    }


                    <div className={"shareText2"}>
                        <img
                            className="shareTextIcon"
                            src={shareIcon}
                            alt="shareIcon"
                            style={{marginRight: "4px"}}
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
                    <button id="recNextDisabledButton" onClick={onClickNext} className={"next"}>
                        다음 게임
                    </button>

                </div>
                <span className="resetButton" onClick={resetbtn}>
                초기화 하기
                <img
                    className="shareIcon"
                    style={{marginLeft: "4px"}}
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
                {isNextShowAll && <Recommendnext type = {showData.firstResult.type_name} setShowNextPopup={setShowNextPopup}/>}
            </div>
        </>
    );
};

export default GameRecommend;