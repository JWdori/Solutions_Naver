import React from "react";
import left from "../images/left.png";
import popular_result from "../images/popular_result.png";
import popular_game from "../images/popular_game.png";
import right from "../images/right.png";




const Slider = (props) => {


        return (

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


    );
};

export default Slider;