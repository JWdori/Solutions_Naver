import React from "react";
import {useNavigate} from "react-router-dom";

import Header from "../elements/Header";
import img from "../images/tutorial/tutorial_king.png";
import img2 from "../images/tutorial/q2_tuto.png";
import Progress from "../elements/Progress_test";
import Genre from "../elements/Genre";
import Name from "../elements/Name";

const Tutorial = (props) => {
    const navigate = useNavigate();
    const [step, setStep] = React.useState(0);
    const nameFunction = (x) => {
        console.log(x);
    }
    const text =
        ["내이름은 가르반 4세라고 하네.\n 사악할 용을 퇴치할 용사는\n 이름을 알려주겠나?",
            "그래 용사여,\n 먼저 싫어하는 게임 장르가 있는가?",
            "자네는 이제 사악한 흑염룡을 물리쳐서\n 왕국을 구해주면 된다네.\n\n 이곳이 자네에게 알맞은 게임을 찾기 위해\n 만들어진 세계라는 것은 알고 있을테지.\n\n 자네에 선택에 따라 이 세계의 운명이 바뀌니\n 모든 대답은 게임 스타일대로 대답해 줄 것이\n라 믿겠네."]
    const textSize = [120, 120, 250];
    const btnText = [
        "나를 소개한다",
        "완료",
        "다음"
    ];
    const btnSize = ["300px", "170px", "170px"]

    const onClick = (num) => {

        if (step < 2) setStep(step + 1);
        else if (step === 2) {
            navigate("/test");
        }

    };
    return (
        <>
            <Header isBack={true}/>
            <Progress width={300} percent={0}/>

            <div className={""}>
                <img
                    className=""
                    src={img}
                    alt="img"
                    width="220px"
                    height="220px"
                />
                <div className={"tutorialText"}
                     style={{height: textSize[step]}}>
                    {text[step]}
                </div>
            </div>

            <div
                style={{color: "white"}}>

                {step == 0 ?
                    <Name nameFunction={nameFunction}/> :
                    step == 1 ?
                        <Genre/> : null

                }

            </div>

            <div className={"tutorialBtn"}>
                <button id={"tutorialBtn"}
                        style={{width: btnSize[step]}}
                        onClick={onClick}>
                    {btnText[step]}
                </button>
            </div>
        </>
    );
};

export default Tutorial;
