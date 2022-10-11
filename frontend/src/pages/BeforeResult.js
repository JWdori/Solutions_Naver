import React from "react";
import {useNavigate} from "react-router-dom";
import Header from "../elements/Header";
import waiting from "../images/waiting.gif";

const BeforeResult = (props) => {
    const navigate = useNavigate();

    React.useEffect(() => {
        setTimeout(() => {
            navigate("/result");
        }, 4000);
    }, []);

    return (
        <>
            <Header isBack={false} />
            <div className="h3Container">
                <img src={waiting} width="290px" height="250px" alt="img" />
                <h3 className="resultH3">결과를 분석하고 있어요</h3>
            </div>
        </>
    );
};

export default BeforeResult;
