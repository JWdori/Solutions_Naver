import React from "react";
import {useNavigate} from "react-router-dom";
import main from "../images/main.png"
import adimage from "../images/adimage.png"
import gameIcon from "../images/gameIcon.png"
import Header from "../elements/Header";

const Home = (props) => {
    const navigate = useNavigate();

    const onClick = () => {
        navigate.push("/test");
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

            <button id="homeGameBtn" onClick={onClick}>
                성향 검사 시작하기
            </button>
            <button id="homeSurveyBtn" onClick={onClick}>
                게임 추천 설문하기
            </button>
            <div className="ad_game">
                <div className="ad_game_font">
                    넷째주 게임
                </div>
                <img
                    className="ad_game_image"
                    id="adimage"
                    src={adimage}
                    alt="img"
                    width="300x"
                    height="170px"
                ></img>
                <div className="ad_game_box">
                    <div className="ad_game_box_black_1">
                        <div className="ad_game_box_black_2">
                        </div>
                    </div>
                </div>

            </div>



        </>
    );
};

export default Home;
