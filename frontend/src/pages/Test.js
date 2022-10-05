import React from "react";
import {useNavigate} from "react-router-dom";
import main from "../images/main.png"
import Header from "../elements/Header";

const Test = (props) => {
    const navigate = useNavigate();


    return (
        <>
            <Header isBack={true}/>
            <div className={"gameIntro"}>
                test 화면
            </div>

        </>
    );
};

export default Test;
