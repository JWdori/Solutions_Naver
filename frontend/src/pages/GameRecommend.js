import React from "react";

import ProgressRec from "../elements/Progress_rec";

import good from "../images/good_gray.png"
import bad from "../images/bad_gray.png"
import kakao from "../images/kakao.png";
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import link from "../images/link.png";
import shareIcon from "../images/shareicon2.png";
import reset from "../images/reset2.png";

import ScorePage from "../elements/ScorePage";

import quotes1 from "../images/chat_1_gray.png"
import quotes2 from "../images/chat_2_gray.png"
import {useNavigate} from "react-router-dom";
import Recommendnext from "../elements/Recommendnext";
import axios from "axios";
import Headerrec from "../elements/Headerrec";
import ScrollRestoration from "../elements/ScrollRestoration";
import {kakaoShare_test, facebookShare_test, twitterShare_test} from "../elements/Share_test";
const GameRecommend = (props) => {
    const navigate = useNavigate();
    const [isShowAll, setShowPopup] = React.useState(false);
    const [isNextShowAll, setShowNextPopup] = React.useState(false);
    const [step, setStep] = React.useState(0);
    const [value, setValue] = React.useState(0);
    const [next, setNext] = React.useState(false);
    const [page, setPage] = React.useState(0);
    const [star, setStar] = React.useState(0);
    const [subGen1, setSubGen1] = React.useState(null);
    const [subGen2, setSubGen2] = React.useState(null);
    const [data, setData] = React.useState(null);
    const [num, setComplete] = React.useState(0);
    const showData = JSON.parse(sessionStorage.getItem("data"));
    const userId = showData.user.user_id;
    const goodBtn = document.getElementsByClassName("recBtn")[0];
    const badBtn = document.getElementsByClassName("recBtn")[1];


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


    React.useEffect(() => {
        const initPage = JSON.parse(sessionStorage.getItem("page"))
        setPage(initPage);
        getData(initPage);
    }, [])

    const getData = async (gamePage) => {
        if (step === 0) {
            const btn = document.getElementsByClassName("next")[0];
            btn.disabled = true;
            btn.setAttribute("id", "recNextDisabledButton")
        }
        await axios.get("http://localhost:5000/api/recommend/getGameList", {
            params: {
                user_id: userId,
                page: gamePage,
                size: 5
            }
        })
            .then((res) => {
                //console.log(res);
                setData(res);

                const sub1 = res.data.gameList[0].subGenre.filter((el,idx) =>
                    idx < 2
                );
                const sub2 = res.data.gameList[0].subGenre.filter((el,idx) =>
                    idx > 2
                );
                setSubGen1(sub1);
                setSubGen2(sub2);
            })
            .catch((error) => {
                //console.dir(error);
            });

    }

    const sendData = (input) => {
        const appid = data.data.gameList[step].appId;
        //console.log(appid);
        axios.post("http://localhost:5000/api/recommend/postGameRate", {
            userId: userId,
            appId: appid,
            gameScore: input
        })
            .then((res) => {
                //console.log(res);
            })
            .catch((error) => {
                //console.dir(error);
            });
    }


    const sendStar = (star) => {
        const appid = data.data.gameList[step].appId;
        //console.log(appid);
        axios.post("http://localhost:5000/api/recommend/postGameStar", {
            userId: userId,
            appId: appid,
            gameStar: star
        })
            .then((res) => {
                //console.log(res);
            })
            .catch((error) => {
                //console.dir(error);
            });
    }
    const starRating = (star) => {
        setStar(star);
        goodBtn.disabled = true;
        badBtn.disabled = true;
    }

    const handleShowAllBtn = (props) => {
        setShowPopup(true);
        //setValue는 나중에...
    };
    const resetbtn = (props) => {
        setStep(0)
        const btn = document.getElementsByClassName("next")[0];
        btn.disabled = true;
        btn.setAttribute("id", "recNextDisabledButton")
    };
    const handleShowNextBtn = (props) => {
        setShowNextPopup(true);
        const btn = document.getElementsByClassName("next")[0];
        btn.disabled = false;
        btn.setAttribute("id", "recNextButton")

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

    const recommendNext = (next) => {
        if (next) {
            const btn = document.getElementsByClassName("next")[0];
            btn.disabled = true;
            btn.setAttribute("id", "recNextDisabledButton")
            setNext(next);
            sessionStorage.setItem("page", JSON.stringify(page + 2));
            setPage(page + 2);
            setComplete(0)
            setStep(0);
            getData(page + 2);
            setShowNextPopup(false);
        }
    }

    const onClickNext = () => {
        if (step === 4) {
            //여기 코드 확인점. 테스트용으로만 해놔서
            // 5번 끝나면 팝업이 뜨고, 팝업에서 다음으로 넘어가게 해야되는데...
            setShowNextPopup(true);
        } else {
            setComplete(0)
            setShowPopup(false);
            //이 순간에서 step 증가하기전에 디비에다가 계속 쌓아줘야함
            //axios 코드 짜기
            if (value !== 0) {
                sendData(value)//-1인지 1인지
            } else if (star > 0) {
                sendStar(star);
            }
            setStep(step + 1);

            const btn = document.getElementsByClassName("next")[0];
            btn.disabled = true;
            btn.setAttribute("id", "recNextDisabledButton")
            setValue(0);
            goodBtn.disabled = false;
            badBtn.disabled = false;
            const sub1 = data.data.gameList[0].subGenre.filter((el,idx) =>
                idx < 2
            );
            const sub2 = data.data.gameList[0].subGenre.filter((el,idx) =>
                idx > 2 && idx < 7
            );
            setSubGen1(sub1);
            setSubGen2(sub2);
        }
    }


    return (
        <>
            <Headerrec isBack={true} step={step} setStep={setStep}>
            </Headerrec>
            <ProgressRec
                width={329}
                percent={0.2 + step / 5}
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


                    {/*{data?.data.gameList[step].subGenre.length >= 3 ?*/}
                    {/*    <div className={"rectag"} style={{marginBottom: "6px"}}>*/}
                    {/*        <button id={"recGenreButton"}>{data?.data.gameList[step].subGenre[0]}</button>*/}
                    {/*        <button id={"recGenreButton"}>{data?.data.gameList[step].subGenre[1]}</button>*/}
                    {/*        <button id={"recGenreButton"}*/}
                    {/*                style={{marginRight: "0px"}}>{data?.data.gameList[step].subGenre[2]}</button>*/}
                    {/*    </div>*/}
                    {/*    :*/}

                    {/*    <div className={"rectag"} style={{marginBottom: "6px"}}>*/}
                    {/*        {subGen1?.map((sub, index) => (*/}
                    {/*            <button id={"recGenreButton"} key={index}>{sub}</button>*/}
                    {/*        ))}*/}
                    {/*    </div>*/}

                    {/*}*/}
                    {/*{data?.data.gameList[step].subGenre.length >= 6 ?*/}
                    {/*    <div className={"rectag"} style={{marginBottom: "6px"}}>*/}
                    {/*        <button id={"recGenreButton"}>{data?.data.gameList[step].subGenre[3]}</button>*/}
                    {/*        <button id={"recGenreButton"}>{data?.data.gameList[step].subGenre[4]}</button>*/}
                    {/*        <button id={"recGenreButton"}*/}
                    {/*                style={{marginRight: "0px"}}>{data?.data.gameList[step].subGenre[5]}</button>*/}
                    {/*    </div>*/}
                    {/*    :*/}
                    {/*    <div className={"rectag"} style={{marginBottom: "6px"}}>*/}
                    {/*        {subGen2?.map((sub, index) => (*/}
                    {/*            <button id={"recGenreButton"} key={index}>{sub}</button>*/}
                    {/*        ))}*/}
                    {/*    </div>*/}
                    {/*}*/}


                    <div className={"rectag"} style={{marginBottom: "6px"}}>
                        <button id={"recGenreButton"}>{data?.data.gameList[step].subGenre[0]}</button>
                        <button id={"recGenreButton"}>{data?.data.gameList[step].subGenre[1]}</button>
                        <button id={"recGenreButton"} style={{marginRight: "0px"}}>{data?.data.gameList[step].subGenre[2]}</button>
                    </div>
                    <div className={"rectag"} style={{marginBottom: "18px"}}>
                        <button id={"recGenreButton"}>{data?.data.gameList[step].subGenre[3]}</button>
                        <button id={"recGenreButton"}>{data?.data.gameList[step].subGenre[4]}</button>
                        <button id={"recGenreButton"} style={{marginRight: "0px"}}>{data?.data.gameList[step].subGenre[5]}</button>
                    </div>

                    <a className={"playstore"}
                       href={data?.data.gameList[step].url}
                       target="_blank">플레이스토어에서
                        확인하기</a>

                    <div className={"rating"}>
                        <div>
                            <button id={"goodButton"} style={{marginLeft: "20px"}} onClick={btngood}
                                    className={"recBtn"}>만족
                            </button>

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
                            <button id={"badButton"} style={{marginRight: "20px"}} onClick={btnbad}
                                    className={"recBtn"}>관심없음
                            </button>
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
                            width="28px"
                            height="28px"
                            onClick={kakaoShare_test}
                        />
                        <img
                            className="shareIcon"
                            src={facebook}
                            alt="facebook"
                            width="28px"
                            height="28px"
                             onClick={facebookShare_test}
                        ></img>
                        <img
                            className="shareIcon"
                            src={twitter}
                            alt="twitter"
                            width="28px"
                            height="28px"
                            onClick={twitterShare_test}
                        ></img>
                        <input type="hidden" id="urlInput" className="url-input"/>

                        <img
                            className="shareIcon"
                            src={link}
                            alt="link"
                            width="28px"
                            height="28px"
                            onClick={() => {
                                copy(handleToast);
                            }}
                        ></img>
                    </div>
                    <button id="recNextDisabledButton" onClick={onClickNext} className={"next"}>
                        다음 게임
                    </button>

                </div>
                <span className="resetButton" onClick={resetbtn}>
                처음으로
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
                {isShowAll &&
                <ScorePage setShowPopup={setShowPopup} complete={complete} num={num} starRating={starRating}/>}
                {isNextShowAll &&
                <Recommendnext type={showData.firstResult.type_id} typeName={showData.firstResult.type_name} setShowNextPopup={setShowNextPopup}
                               recommendNext={recommendNext}/>}
            </div>
        </>
    );
};

export default GameRecommend;