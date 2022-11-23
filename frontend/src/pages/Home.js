import React from "react";
import {useNavigate} from "react-router-dom";
import gameIcon from "../images/gameIcon.png"

import facebook from "../images/facebook.png";
import kakao from "../images/kakao.png";
import link from "../images/link.png";
import twitter from "../images/twitter.png";
import shareIcon from "../images/shareicon.png"
import Header from "../elements/Header";
import MainSlide from "../elements/MainSlide";
import Serviceintroduce from "../elements/ServiceIntroduce";

import {kakaoShare_test, facebookShare_test, twitterShare_test} from "../elements/Share_test";
import GameSlide1 from "../elements/GameSlide1";
import GameSlide2 from "../elements/GameSlide2";
import box from "../images/box.png"
import ScrollRestoration from "../elements/ScrollRestoration"
import axios from "axios";
const Home = (props) => {
    const [type, setType] = React.useState(null);
    const [uuid, setUuid] = React.useState(null);
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


    React.useEffect(()=>{
        setUuid(Math.random().toString(36).substr(2) + (new Date()).getTime().toString(36));
    },[])
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
    const navigate = useNavigate();

    const onGameClick = () => {
        navigate("/tutorial", {state: {userId: uuid},});
    };
    const onRankingClick = () => {
        navigate("/gameranking");
    };

    const onSurClick = () => {
        navigate("/survey");
    };



    return (
        <>
            <ScrollRestoration></ScrollRestoration>
            <Header isBack={false}/>
            <span className="mainSubTitleBold">
                게임유형검사
                            <span className="mainSubTitle">와&nbsp;</span>
                 유형별 게임 추천 서비스
                            <span className="mainSubTitle">를 경험해보세요!</span>
            </span>
            <span className={"mainTitle"} style={{marginTop: "10px"}}>
                게임 회사가 보는<br></br>나의 게임 유형은?
                <img
                    className="questionTxtImage"
                    src={box}
                    alt="img"
                    width="191px"
                    height="17px"
                ></img>
            </span>


            <MainSlide></MainSlide>

            <span className="mainSubTitle" style={{fontWeight: "400"}}>자료 제공: TentuPlay</span>
            <div className="gameIntro">
                <img
                    className="homeGameIcon1"
                    src={gameIcon}
                    alt="img"
                    width="21px"
                    height="15px"
                ></img>
                <span> 평소 게임 스타일을 이입해서 답변해주세요   </span>
            </div>

            <button id="homeGameBtn" onClick={onGameClick}>
                유형 검사 시작하기
                {

                }
            </button>
            {/*<button id="homeSurveyBtn" onClick={onSurClick}>*/}
            {/*    게임 추천 설문하기*/}
            {/*</button>*/}
            <div className={"shareText"}>
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
                    style={{marginRight: "0px"}}
                    src={link}
                    alt="link"
                    width="32px"
                    height="32px"
                    onClick={() => {
                        copy(handleToast);
                    }}
                ></img>

            </div>


            <div className={"slide__game__title"}>
                유형별 인기 게임
            </div>
            <div className={"slide__game__option"} style={{marginTop:"10px", marginLeft:"34px"}}>
                <GameSlide1></GameSlide1>
                <GameSlide2 gameimgRER={type?.data[0].app[0].icon} gameimgFAS={type?.data[3].app[0].icon} gameimgCOL={type?.data[8].app[0].icon}  gameimgGRO={type?.data[2].app[0].icon}
                            gameimgWHA={type?.data[4].app[0].icon}  gameimgNOM={type?.data[1].app[0].icon}  gameimgFOL={type?.data[5].app[0].icon}  gameimgFAM={type?.data[7].app[0].icon}
                            gameimgUND={type?.data[6].app[0].icon}  gameimgPVP={type?.data[9].app[0].icon} />
            </div>


            <button id="allGameBtn" style={{marginBottom: "80px"}}
            onClick={onRankingClick}>

                모든 인기 게임 확인하기
            </button>
            <Serviceintroduce></Serviceintroduce>


        </>
    );
};

export default Home;
