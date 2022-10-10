import React from "react";
import { CloseOutlined } from "@ant-design/icons";



const Genre = (props) => {


    return (
        <>
            <div className="genreBox1" style={{marginTop:"20px"}}>
                <button id="genreButton">
                    RPG
                </button>
                <button id="genreButton">
                    공포
                </button>
                <button id="genreButton">
                    공포
                </button>
                <button id="genreButton" style={{marginRight:"0px"}}>
                    공포
                </button>
            </div>
                <div className="genreBox1" style={{marginBottom:"40px", marginTop:"12px"}}>
                <button id="genreButton">
                    RPG
                </button>
                <button id="genreButton">
                    공포
                </button>
                <button id="genreButton">
                    공포
                </button>
                <button id="genreButton" style={{marginRight:"0px"}}>
                    공포
                </button>
            </div>
        </>
    );
};

export default Genre;
