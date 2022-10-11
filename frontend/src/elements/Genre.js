import React from "react";
import { CloseOutlined } from "@ant-design/icons";



const Genre = (props) => {


    return (
        <>
            <div className="genreBox1" style={{marginTop:"40px"}}>
                <button id="genreButton">
                    RPG
                </button>
                <button id="genreButton">
                    스포츠
                </button>
                <button id="genreButton">
                    액션
                </button>
                <button id="genreButton" style={{marginRight:"0px"}}>
                    음악
                </button>
            </div>
                <div className="genreBox1" style={{marginBottom:"30px", marginTop:"12px"}}>
                <button id="genreButton">
                    전략
                </button>
                <button id="genreButton">
                    퍼즐
                </button>
                <button id="genreButton">
                    AOS
                </button>
                <button id="genreButton" style={{marginRight:"0px"}}>
                    FPS
                </button>
            </div>
        </>
    );
};

export default Genre;
