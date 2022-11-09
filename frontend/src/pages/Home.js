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


import {TentuPlay} from '@tentuplay/js-client-sdk';
import GameSlide1 from "../elements/GameSlide1";
import GameSlide2 from "../elements/GameSlide2";
import box from "../images/box.png"


const Home = (props) => {
    const [uuid, setUuid] = React.useState(Math.random().toString(36).substr(2) + (new Date()).getTime().toString(36));

    const navigate = useNavigate();

    const onGameClick = () => {
        navigate("/tutorial", {state: {userId: uuid},});
    };

    const onSurClick = () => {
        navigate("/survey");
    };

    const tp = new TentuPlay({
        clientKey: "b64DGZZd38ZKHomhQFQE",
    });


    function myLogin() {
        tp.onInit(() => {
            tp.sendJoin({
                playerUUID: uuid
            });
            tp.sendLogin({
                playerUUID: uuid
            })
        })

    }

    myLogin();


    return (
        <>
            <Header isBack={false}/>
            <span className="mainSubTitleBold">
                게임유형검사
                            <span className="mainSubTitle">와</span>
                 유형별 게임 추천 서비스
                            <span className="mainSubTitle">를 경험해보세요!</span>
            </span>
            <span className={"mainTitle"} style={{marginTop: "10px"}}>
                게임 회사가 보는<br></br>나의 게임 성향은?
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
                성향 검사 시작하기
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
                    style={{marginRight: "0px"}}
                    src={link}
                    alt="link"
                    width="24px"
                    height="24px"
                    onClick={() => {
                        // copy(handleToast);
                    }}
                ></img>

            </div>


            <div className={"slide__game__title"}>
                유형별 인기 게임
            </div>
            <div className={"slide__game__option"}>
                <GameSlide1/>
                <GameSlide2/>
            </div>


            <button id="allGameBtn" style={{marginBottom: "80px"}}>
                모든 인기 게임 확인하기
            </button>
            <Serviceintroduce></Serviceintroduce>


        </>
    );
};

export default Home;
