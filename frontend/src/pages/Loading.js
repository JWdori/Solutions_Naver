import React from "react";
import {useNavigate} from "react-router-dom";

import Header from "../elements/Header";

const Loading = (props) => {
    const navigate = useNavigate();
    React.useEffect(() => {
        setTimeout(() => {
            navigate("/test");
        }, 4000);

    })

    return (
        <>
            <Header isBack={false}/>
            <div className={"gameIntro"} id={"loading"}><b>눈을 뜨게 용사여 </b></div>
        </>
    );
};

export default Loading;
