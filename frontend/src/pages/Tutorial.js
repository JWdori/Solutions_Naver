import React from "react";
import {useNavigate} from "react-router-dom";
import {useLocation} from "react-router-dom";
import img2 from "../images/tutorial/q2_tuto.png"
import Header from "../elements/Header";
import img from "../images/tutorial/tutorial_king.png";
import Progress from "../elements/Progress_test";
import Genre from "../elements/Genre";
import Name from "../elements/Name";
import q1 from "../images/tutorial/q1.png"


const Tutorial = (props) => {
    const navigate = useNavigate();
    const {state} = useLocation();
    const userId = state.userId;
    const [userName, setUserName] = React.useState(null);
    const [userGenre, setUserGenre] = React.useState([]);
    const [step, setStep] = React.useState(0);

    const onChangeName = (event) => {
        const btn = document.getElementsByClassName("nameBtn")[0];

        if (event.target.value.length==0) {
            btn.disabled = true;
            btn.setAttribute("id", "buttonLoginDisabled")
        } else {
            setUserName(event.target.value);
            btn.disabled = false;
            btn.setAttribute("id", "btn_login")
        }

    }


    const genreFunction = (x) => {
        console.log(x)
        setUserGenre(x);

    }
    const text =
        ["게임 플레이를 위해\n계정을 생성합니다!\n",
            "정확한 게임 추천 서비스를 위해\n불호, 혹은 관심없는\n게임 장르를 선택해주세요.",
        ]
    const btnText = [
        "완료",
        "완료",
    ];
    const btnSize = ["270px", "270px",]

    const onClick = (event) => {

        if (step < 1) setStep(step + 1);
        else if (step === 1) {
            navigate("/test", {state: {userId: userId, userName: userName, userGenre: userGenre}});
        }

    };
    return (
        <>
            <Header isBack={true} step={step} setStep={setStep}/>
            <Progress width={300} percent={0.08}/>

            <div>
                <div className={"tutorialText"} style={{marginTop: "120px"}}>
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
                    <input id="user_id" type="text" className="NameBox" maxLength='6' placeholder="닉네임을 입력하세요"
                           style={{color: "#FFAE68", marginTop: "80px"}}
                           onChange={onChangeName}>
                    </input> :
                    step === 1 ?
                        <Genre genreFunction={genreFunction}/> : null

                }

            </div>

            <div className={"tutorialBtn"}>
                {
                    step === 0
                        ?
                        <button id={"buttonLoginDisabled"}
                                style={{width: btnSize[step], marginBottom: "190px"}}
                                onClick={onClick}
                                className={"nameBtn"}
                        >
                            {
                                btnText[step]
                            }
                        </button>
                        :
                        <button id={"tutorialBtn"}
                                style={{width: btnSize[step], marginBottom: "190px"}}
                                onClick={onClick}
                        >
                            {
                                btnText[step]
                            }
                        </button>
                }
            </div>
        </>
    );
};

export default Tutorial;
