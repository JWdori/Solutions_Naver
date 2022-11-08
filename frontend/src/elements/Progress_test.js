import React from "react";
import progresschar from "../images/progressCHAR.png";

const Progress = ({ width, percent }) => {
    let progress = percent * width;

    return (
        <div>

            <div className="progress-div" style={{ width: width }}>
                <div style={{ width: `${progress}px`,marginTop:"38px" }} className="progress">
                </div>
            </div>
        </div>
    );
};

export default Progress;
