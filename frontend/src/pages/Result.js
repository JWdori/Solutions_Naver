import React from "react";
import {useNavigate} from "react-router-dom";
import Header from "../elements/Header";
import Recommend from "../elements/Recommend";

const Result = (props) => {
    const navigate = useNavigate();
    const [showPopup,setShowPopup] = React.useState(false);
    const handleShowPopup = () => {
        setShowPopup(true);
    };
    return (
        <>
            <Header isBack={true}/>
            <div className={"gameIntro"}>
                결과화면
                <button id="resultAll" onClick={handleShowPopup}>
                    모달 팝업
                </button>
            </div>
            {showPopup&& <Recommend setShowPopup={setShowPopup}/>}
        </>
    );
};

export default Result;
