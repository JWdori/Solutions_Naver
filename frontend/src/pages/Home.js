import React from "react";
import {useNavigate} from "react-router-dom";
import gameIcon from "../images/gameIcon.png"

import facebook from "../images/facebook.png";
import kakao from "../images/kakao.png";
import link from "../images/link.png";
import twitter from "../images/twitter.png";
import shareIcon from "../images/shareicon.png"
import Header from "../elements/Header";
import Ad_game from "../elements/Ad_game";
import Slider from "../elements/Slider";
import MainSlide from "../elements/MainSlide";
import Serviceintroduce from "../elements/ServiceIntroduce";


import {TentuPlay} from '@tentuplay/js-client-sdk';
import GameSlide1 from "../elements/GameSlide1";
import GameSlide2 from "../elements/GameSlide2";


const Home = (props) => {
    const navigate = useNavigate();

    const onGameClick = () => {
        navigate("/loading");
    };

    const onSurClick = () => {
        navigate("/survey");
    };

    const tp = new TentuPlay({
            clientKey: "b64DGZZd38ZKHomhQFQE",
    });

    function myLogin(){
        tp.onInit(()=>{
            tp.sendJoin({
                playerUUID: "44"
            });
            tp.sendLogin({
                playerUUID: "44"
            })
        })

    }
    myLogin();


    return (
        <>
            <Header isBack={false}/>
            <div className="mainSubTitle">
                게임유형 검사와 게임 추천 서비스를 경험해보세요!
            </div>
            <div className="mainBox">
                <div className="mainTitle">
                    내가 만약&nbsp;
                </div>
                <div className="mainTitle" style={{fontSize: "28px", color: "#FF6900"}}>
                    게임&nbsp;
                </div>
                <div className="mainTitle">
                    속&nbsp;
                </div>
                <div className="mainTitle" style={{fontSize: "28px", color: "#FF6900"}}>
                    용사
                </div>
                <div className="mainTitle">
                    라면?
                </div>
            </div>



            <MainSlide></MainSlide>

            <div className="gameIntro">
                <img
                    className="homeGameIcon1"
                    src={gameIcon}
                    alt="img"
                    width="24px"
                    height="24px"
                ></img>
                <span>  평소 게임 스타일을 이입해서 답변해주세요   </span>
                <img
                    className="homeGameIcon2"
                    src={gameIcon}
                    alt="img"
                    width="24px"
                    height="24px"
                ></img>
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


            <div className={"slide__game__title"}>
                유형별 인기 게임
            </div>
            <div className={"slide__game__option"} >
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
