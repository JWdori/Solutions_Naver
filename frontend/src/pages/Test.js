import React from "react";
import {useNavigate} from "react-router-dom";
import {useLocation} from "react-router-dom";
import Header from "../elements/Header";
import Progress from "../elements/Progress_test";

import q1 from "../images/test/q1.png"
import q2 from "../images/test/q4.png"
import q3 from "../images/test/q5.png"
import q4 from "../images/test/q6.png"
import q5 from "../images/test/q7.png"
import q6 from "../images/test/q8.png"
import q7 from "../images/test/q9.png"
import q8 from "../images/test/q10.png"
import q9 from "../images/test/q11.png"
import q10 from "../images/test/q12.png"
import q11 from "../images/test/q13.png"
import q12 from "../images/test/q14.png"
import q13 from "../images/test/q14.png"
import box from "../images/box.png"

let select = ["x"];
const Test = (props) => {
    const navigate = useNavigate();
    const {state} = useLocation();
    const userId = state.userId;
    const userName = state.userName;
    const userGenre = state.userGenre;

    // console.log(userId,userName,userGenre);

    const [step, setStep] = React.useState(3);
    const [time, setTime] = React.useState(false);
    const questionImg = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13];
    const question =
        [
            "가입이 끝났다!\n바로 게임에 접속할까?",

            "먼저, 플레이할 캐릭터의\n 커스터마이징을 해야한다.",


            "과금 아이템 광고가\n 눈에 들어온다.",

            "마을에 도착한 나는 ...",

            "갑자기 NPC가 말을 걸어왔다!",


            "[동료] 컨텐츠에 대해 알게 되었다!",

            "이런! 패치로 때문에 기존에 사용하던\n 동료들의 능력치가 낮아졌다...",

            "이벤트에 당첨되어 뽑기권을 받았다!\n하나만 선택할 수 있다.",

            "......",

            "다시 과금 아이템 광고가 나타났다!",

            "점점...\n 육성이 어렵고 지루해진다!",

            "드디어 만렙을 달성했다!\n 캐릭터도 충분히 강력하다!\n이제 나는. . ."
        ]
    const answerYes = [
        "게임의 컨셉, 스토리, 공략 드을 더\n찾아보고 게임을 시작한다.",
        "어디서든 한눈에 들어오는\n개성있는 커스터마이징",
        "구매한다.",
        "pvp를 위해 투기장으로 향한다.",
        "소지한 대부분의 게임 머니를\n 랜덤 아이템 뽑기에 사용한다.",
        "공략을 찾아보며 최강의 효율을 낼 수 있는\n동료를 사용한다.",
        "효율은 낮아졌지만, 기존 동료와 아이템을\n 바꾸지 않고 그대로 사용한다.",
        "레전드 등급의 아바타 뽑기권",
        "다른 걸 선택할걸....",
        "구매한다.",
        "아바타와 커스터마이징에 신경쓴다.",
        "종종 접속해서 숙제와 pvp만 즐긴다."

    ];
    const answerNo = [
        "무슨 게임인지 잘 모르지만...\n일단 한번 해본다.",
        "개성보다는 대중적인 예쁨에 관점을 둔\n 커스터마이징",
        "구매하지 않는다.",
        "빠른 성장을 위해 사냥터로 떠난다.",
        "더 좋은 기회를 위해 아낀다.",
        "사람들이 잘 쓰지 않는\n 특별한 동료를 사용한다.",
        "효율이 좋아진\n 새로운 동료와 아이템으로 바꾼다.",
        "레전드 등급의 동료 뽑기권",
        "내 선택은 틀리지 않았다!",
        "이건 선을 넘은 가격이다.\n구매하지 않는다.",
        "아이템, 동료, 무기 등,\n 다양한 요소들을 수집한다.",
        "남들과 다른 새로운 공략을 짜거나\n 게임에 숨겨진 요소를 탐구한다.",
    ];
    const wid = [280, 260, 260, 240, 270, 290, 240, 240, 240, 270, 240, 260, 230, 230];
    const hei = [200, 200, 200, 230, 230, 230, 200, 200, 230, 230, 201, 242, 200, 230];

    React.useEffect(() => {
        setTime(true);
    }, [time]);
    const onClick = (value) => {
        setTime(false);
        if (step < 14) setStep(step + 1);
        else if (step === 14) {  //16아님.
            navigate("/beforeResult", {
                state: {
                    select: select,
                    userId: userId,
                    userName: userName,
                    userGenre: userGenre
                }
            })
        }
        select[step - 2] = value;
    };
    return (
        <>
            <Header isBack={true} step={step} setStep={setStep}/>
            <Progress
                width={300}
                percent={0.07 + (step - 2.9) / 12}
            />
            {time && (
                <div>
                    {
                        step === 3 ?
                            <span className={"questionTxt"}>
                                가입이 끝났다!<br></br>바로 게임에 접속할까?
                                                            <img
                                                                className="questionTxtImage"
                                                                src={box}
                                                                alt="img"
                                                                width="111px"
                                                                height="13px"
                                                            ></img>
                            </span>
                            :
                            step === 14 ?
                                <div className={"questionTxt"}>
                                    {question[step - 3]}
                                </div> :
                                <div className={"questionTxt"}>
                                    {question[step - 3]}
                                </div>
                    }
                    {
                        step === 3
                            ? <img
                                className="questionImg"
                                src={questionImg[step - 3]}
                                alt="img"
                                width="158px"
                                height="108px"
                                style={{marginTop: "72px"}}
                            ></img>
                            : <img
                                className="questionImg"
                                src={questionImg[step - 3]}
                                alt="img"
                                width={wid[step - 3]}
                                height={hei[step - 3]}
                            ></img>
                    }

                    <div id="questionDiv">
                    <button
                        style={{marginTop:"40px"}}
                        className="testAnswer"
                        onClick={() => {
                            onClick("a");
                        }}
                    >
                        {answerYes[step - 3]}
                    </button>
                    {
                        step !== 15 ?
                            <button
                                style={{marginBottom: "150px"}}
                                className="testAnswer"
                                onClick={() => {
                                    onClick("b");
                                }}

                            >
                                {answerNo[step - 3]}
                            </button> : null
                    }
                </div>
                </div>
            )}
        </>
    );
};

export default Test;
