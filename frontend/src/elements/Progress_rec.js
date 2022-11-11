import React from "react";
import eggNo from "../images/game/egg_no.png"
import eggClear from "../images/game/egg_clear.png"

const ProgressRec = ({width,percent}) => {
    let progress = percent * width;
    return (
        <div>

            <div className="progress-div" style={{ width: width }}>
                <div style={{ width: `${progress}px`,marginTop:"20px", height:"8px" }} className="progress">
                </div>
            </div>
        </div>
    );
};

export default ProgressRec;