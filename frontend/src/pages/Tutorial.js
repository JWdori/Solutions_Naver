import React from "react";
import {useNavigate} from "react-router-dom";
import img2 from "../images/tutorial/q2_tuto.png"
import Header from "../elements/Header";
import img from "../images/tutorial/tutorial_king.png";
import Progress from "../elements/Progress_test";
import Genre from "../elements/Genre";
import Name from "../elements/Name";
import q1 from "../images/tutorial/q1.png"

const Tutorial = (props) => {
    const navigate = useNavigate();

    const [step, setStep] = React.useState(0);
    const nameFunction = (x) => {
        console.log(x);
    }

    const genreFunction = (x) => {
        console.log(x);
    }
    const text =
        ["게임 플레이를 위해\n계정을 생성합니다!\n",
            "정확한 게임 추천 서비스를 위해\n불호, 혹은 관심없는\n게임 장르를 선택해주세요.",
        ]
    const btnText = [
        "완료",
        "완료",
    ];
    const btnSize = ["270px", "170px", "170px"]

    const onClick = (num) => {

        if (step < 1) setStep(step + 1);
        else if (step === 1) {
            navigate("/test");
        }

    };
    return (
        <>
            <Header isBack={true} step={step} setStep={setStep}/>
            <Progress width={300} percent={0.01}/>

                <div>
                    <div className={"tutorialText"}>
                        {text[step]}
                    </div>
                    {
                        step == 1
                            ? <div></div>
:
                        <img
                        className="questionImg"
                        src={q1}
                        alt="img"
                        width="180px"
                        height="88px"
                        />

                    }
                </div>

                <div
                    style={{color: "white"}}>
                    {step === 0 ?
                        <Name nameFunction={nameFunction}/> :
                        step === 1 ?
                            <Genre genreFunction={genreFunction}/> : null

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
