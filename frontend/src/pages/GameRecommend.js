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
            //?????? ?????? ?????????. ????????????????????? ?????????
            // 5??? ????????? ????????? ??????, ???????????? ???????????? ???????????? ???????????????...

            setShowNextPopup(true);

            //????????? ?????? ?????? ???????????? element?????? ???,,,
            setStep(0);
            getData();
        } else {
            //??? ???????????? step ?????????????????? ??????????????? ?????? ???????????????
            //axios ?????? ??????
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
            <Header isBack={true} step={step} setStep={setStep}/>
            <ProgressRec
                width={329}
                percent={step / 5}
            />
            <span className={"recTitle"}>?????? ?????????</span>
            <div className={"recName"}>
                {data?.data.gameList[0].title}
            </div>
            <img
                className=""
                style={{marginRight: "300px", marginBottom: "-10px"}}
                src={quotes1}
                alt="img"
                width={"25px"}
                height={"22px"}
            ></img>
            <span className={"recdesc"} style={{textOverflow: "ellipsis"}}>asddddd</span>
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
                        src={type1}
                        alt="img"
                        width={"254px"}
                        height={"138px"}
                    ></img>

                    <div className={"recinfo"}>
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;3.9 ???&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span className={"divideLine"}></span>
                        <span>1000?????? ??????</span>
                        <span className={"divideLine"}></span>
                        <span>?????? ?????????</span>
                    </div>


                    <div className={"rectag"} style={{marginBottom: "6px"}}>
                        <button id={"recGenreButton"}>????????????</button>
                        <button id={"recGenreButton"}>?????? ????????????</button>
                        <button id={"recGenreButton"} style={{marginRight: "0px"}}>??????</button>
                    </div>
                    <div className={"rectag"} style={{marginBottom: "18px"}}>
                        <button id={"recGenreButton"}>????????? ??????</button>
                        <button id={"recGenreButton"}>????????????</button>
                        <button id={"recGenreButton"} style={{marginRight: "0px"}}>??????</button>
                    </div>

                    <a className={"playstore"}
                       href="https://play.google.com/store/apps/details?id=com.REDNOSE.AvoidKmeme&hl=ko&gl=US"
                       target="_blank">????????????????????????
                        ????????????</a>

                    <div className={"rating"}>
                        <div>
                            <button id={"goodButton"} style={{marginLeft: "20px"}} onClick={btngood}>??????</button>
                            <img
                                className=""
                                src={good}
                                style={{marginTop: "8px", marginLeft: "16px"}}
                                alt="img"
                                width={"18px"}
                                height={"20px"}
                            ></img>
                        </div>
                        <span style={{marginBottom: "24px"}}>?????? ??????</span>
                        <div>
                            <button id={"badButton"} style={{marginRight: "20px"}} onClick={btnbad}>????????????</button>
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
                                  style={{color: "#ffbd8d"}}>?????? ?????? ????????????????</span>
                            : <span id={"already"} onClick={handleShowAllBtn}
                                    style={{color: "#ff6900"}}>?????? ?????? ????????????????</span>
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
                        ????????? ????????????
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
                        ?????? ??????
                    </button>

                </div>
                <span className="resetButton">
                ????????? ??????
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
                {isNextShowAll && <Recommendnext setShowNextPopup={setShowNextPopup}/>}
            </div>
        </>
    );
};

export default GameRecommend;