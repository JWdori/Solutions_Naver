import React from "react";
import progresschar from "../images/progressCHAR.png";

const Progress = ({ width, percent }) => {
    let progress = percent * width;

    return (
        <div>

            <div className="progress-div" style={{ width: width }}>
                <div style={{ width: `${progress}px`,marginTop:"52px" }} className="progress">
                <img
                        className="progresschar"
                        src={progresschar}
                        alt="img"
                        width="50px"
                        height="50px"
                    ></img>
                </div>
            </div>
        </div>
    );
};

export default Progress;
