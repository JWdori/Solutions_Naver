import React from "react";
import {useNavigate} from "react-router-dom";
import main from "../images/main.png"
import gameIcon from "../images/gameIcon.png"
import popular_game from "../images/popular_game.png"
import popular_result from "../images/popular_result.png"
import left from "../images/left.png"
import right from "../images/right.png"
import facebook from "../images/facebook.png";
import kakao from "../images/kakao.png";
import link from "../images/link.png";
import twitter from "../images/twitter.png";
import shareIcon from "../images/shareicon.png"
import Header from "../elements/Header";
import Ad_game from "../elements/Ad_game";
import popular_game_slide from "../elements/Popular_game_slide";


const Home = (props) => {
    const navigate = useNavigate();

    const onGameClick = () => {
        navigate("/loading");
    };

    const onSurClick = () => {
        navigate("/survey");
    };

    return (
        <>
            <Header isBack={false}/>
            <div className="mainDesc">
                여기에 우리 거 설명이 들어감
            </div>

            <img
                id="mainImg"
                src={main}
                alt="img"
                width="300x"
                height="357px"
            ></img>

            <div className="gameIntro">
                <img
                    className="homeGameIcon"
                    src={gameIcon}
                    alt="img"
                    width="24px"
                    height="24px"
                ></img>
                <span>  평소 게임 스타일을 이입해서 답변해주세요   </span>
                <img
                    className="homeGameIcon"
                    src={gameIcon}
                    alt="img"
                    width="24px"
                    height="24px"
                ></img>
            </div>

            <button id="homeGameBtn" onClick={onGameClick}>
                성향 검사 시작하기
            </button>
            <button id="homeSurveyBtn" onClick={onSurClick}>
                게임 추천 설문하기
            </button>
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
                    width="40px"
                    height="40px"
                    // onClick={kakaoShare}
                />

                <img
                    className="shareIcon"
                    src={facebook}
                    alt="facebook"
                    width="40px"
                    height="40px"
                    // onClick={facebookShare}
                ></img>

                <img
                    className="shareIcon"
                    src={twitter}
                    alt="twitter"
                    width="40px"
                    height="40px"
                    // onClick={twitterShare}
                ></img>
                <input type="hidden" id="urlInput" className="url-input"/>

                <img
                    className="shareIcon"
                    src={link}
                    alt="link"
                    width="40px"
                    height="40px"
                    onClick={() => {
                        // copy(handleToast);
                    }}
                ></img>

            </div>
            <Ad_game>
            </Ad_game>
            <div className="popular_result_box">
                <div className="popular_result_font">
                    유형별 인기 게임
                </div>

                <div className="popular_result_slide_box">

                    <button id="leftslidebutton">
                        <img
                            className="popular_result_left"
                            src={left}
                            alt="img"
                            width="8px"
                            height="18px"
                        ></img>
                    </button>


                    <img
                        className="popular_result_result"
                        src={popular_result}
                        alt="img"
                        width="112px"
                        height="112px"
                    ></img>
                    <img
                        className="popular_result_game"
                        src={popular_game}
                        alt="img"
                        width="112px"
                        height="112px"
                    ></img>


                    <button
                        id="rightslidebutton">
                            <img
                                className="popular_result_right"
                                src={right}
                                alt="img"
                                width="8px"
                                height="18px"
                            >
                            </img>
                    </button>
                </div>
            </div>



        </>
    );
};

export default Home;
