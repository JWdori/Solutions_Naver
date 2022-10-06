import adimage from "../images/adimage.png";
import React from "react";
import {useNavigate} from "react-router-dom";


const Ad_game = (props) => {
    const navigate = useNavigate();
    const onadClick = () => {
        navigate("/adgame");
    };

    return (

    <div className="ad_game">
        <div className="ad_game_font">
            9월 넷째주 게임
        </div>
        <img
            className="ad_game_image"
            id="adimage"
            src={adimage}
            alt="img"
            width="300x"
            height="170px"
        ></img>
        <div className="ad_game_name">
            하트리스
        </div>
        <div className="ad_game_tag">
            #싱글플레이 #액션 #인디
        </div>
        <div className="ad_game_sum">
            무료 다운로드<br/>09/22 ~ 10/31
        </div>
        <button id="adgamebutton" onClick={onadClick}>
            확인하기
        </button>


        <div className="ad_game_box">
            <div className="ad_game_box_black_1">
                <div className="ad_game_box_black_2">
                </div>
            </div>
        </div>

    </div>
    );
};

export default Ad_game;